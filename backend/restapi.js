var express = require("express");
var app = express();
const hostname = "0.0.0.0"; // Change this to your preferred hostname
const port = 8080;

//load and configure environment variables
const dotenv = require("dotenv");
dotenv.config();

const apiKey = process.env.GEOAPIFY_API_KEY;

const { MongoClient } = require("mongodb");
var ObjectId = require("mongodb").ObjectId;
const uri = process.env.MONGO_API_KEY;
const client = new MongoClient(uri);

app.use(express.json());

async function main() {
  try {
    await client.connect();
  } finally {
    await client.close();
  }
}
main().catch(console.error);

//function to take a string of a location and return longitude and latitude
async function getLatLon(addressName) {
  const fetch = require("node-fetch");
  const newAddressName = addressName
    .replaceAll(", ", "%2C%20")
    .replaceAll(" ", "%20");

  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=` +
        newAddressName +
        `&apiKey=${apiKey}`
    );

    const data = await response.json();
    const latLong = [0.0, 0.0];
    latLong[0] = parseFloat(data.features[0].properties.lat);
    latLong[1] = parseFloat(data.features[0].properties.lon);

    return latLong;
  } catch (error) {
    throw new Error("Error fetching data: " + error.message);
  }
}

async function findOneListingById(client, id) {
  var o_id = new ObjectId(id);
  const result = await client
    .db("scarpool")
    .collection("drivers")
    .findOne({ _id: o_id });

  if (result) {
    console.log(`Found a listing in the collection with the id '${id}':`);
    console.log(result);
    return result;
  } else {
    console.log(`No listings found with the id '${id}'`);
  }
}

async function createListing(client, newListing) {
  const result = await client
    .db("scarpool")
    .collection("drivers")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
  return client
    .db("scarpool")
    .collection("drivers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
}

async function updateListingById(client, id, updatedListing) {
  var o_id = new ObjectId(id);
  const result = await client
    .db("scarpool")
    .collection("drivers")
    .updateOne({ _id: o_id }, { $set: updatedListing });
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
  return client
    .db("scarpool")
    .collection("drivers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
}

async function deleteListingById(client, id) {
  var o_id = new ObjectId(id);
  const result = await client
    .db("scarpool")
    .collection("drivers")
    .deleteOne({ _id: o_id });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
  return client
    .db("scarpool")
    .collection("drivers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
}

// get all drivers
app.get("/", async (req, res) => {
  await client.connect();
  let collection = await client.db("scarpool").collection("drivers");
  let results = await collection.find({}).toArray();
  res.json(results);
});

// get one driver
app.get("/:id", async (req, res) => {
  await client.connect();
  res.json(await findOneListingById(client, req.params.id));
});

// make a new driver
app.post("/", async (req, res) => {
  await client.connect();
  let latlon = getLatLon(req.body.address);
  res.json(
    await createListing(client, {
      name: req.body.name,
      address: req.body.address,
      longitude: (await latlon)[1],
      latitude: (await latlon)[0],
      email: req.body.email,
      phone: req.body.phone,
      car_description: req.body.car_description,
      available_seats: req.body.available_seats,
      occupied_seats: 0,
      time: req.body.time,
    })
  );
});

// update a driver
app.patch("/:id", async (req, res) => {
  await client.connect();
  res.json(await updateListingById(client, req.params.id, req.body));
});

// add a person
app.patch("/add/:id", async (req, res) => {
  await client.connect();
  var o_id = new ObjectId(req.params.id);
  const result = await client
    .db("scarpool")
    .collection("drivers")
    .findOne({ _id: o_id });
  if (result.occupied_seats < result.available_seats) {
    res.json(
      await updateListingById(client, req.params.id, {
        occupied_seats: result.occupied_seats + 1,
      })
    );
  } else res.json({ msg: "No available Seats" });
});

// remove a person
app.patch("/remove/:id", async (req, res) => {
  await client.connect();
  var o_id = new ObjectId(req.params.id);
  const result = await client
    .db("scarpool")
    .collection("drivers")
    .findOne({ _id: o_id });
  if (result.occupied_seats > 0) {
    res.json(
      await updateListingById(client, req.params.id, {
        occupied_seats: result.occupied_seats - 1,
      })
    );
  } else res.json({ msg: "Error" });
});

// delete a driver
app.delete("/:id", async (req, res) => {
  await client.connect();
  res.json(await deleteListingById(client, req.params.id));
});

app.listen(port, hostname, () => {
  console.log(`Server started on http://${hostname}:${port}`);
});

// give latitude and longitude
app.get("/location/:id", async (req, res) => {
    let latlon = getLatLon(req.params.id);
    res.json({longitude: (await latlon)[1],
        latitude: (await latlon)[0],})
})