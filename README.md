<a name="readme-top"></a>

# Scarpool
A mobile application created during the Hack the Valley 8 hackathon event at the University of Toronto Scarborough Campus.
Contributors: Ivy Chen, Andy Ma, Annie Wu, Ashley Wong

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project
Scarpool was created due to the fact that a lot of students at UTSC commute. We wanted to create a solution to help provide transportation exclusively for UTSC students.

What our app provides:
<br/>
-a place for students requiring commute to search for carpools
<br/>
-a place for other students with transportation capabilities to advertise their carpools

Given the nature of carpooling, we aim to reduce carbon emissions along with providing transport.

### Built With

![mongodb](https://github.com/eveev26/Scarpool/assets/88058599/d3d88665-f149-4e2b-aee8-78a6897320eb)
![express](https://github.com/eveev26/Scarpool/assets/88058599/c3f6bc90-ac9b-4810-ad13-a4fbe81a55f1)
<br/>
![react](https://github.com/eveev26/Scarpool/assets/88058599/011915ba-d612-4a58-8ae1-7901be947031)
![nodejs](https://github.com/eveev26/Scarpool/assets/88058599/7f7ca092-232c-479f-98eb-983b107ab833)

We used the MERN stack, pretty much.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

If you would like to set our project up on your local device, you can start by doing the usual git clone and stuff. After doing so, please note our project requires a couple of API keys: one from Google Cloud Services using the Javascript Maps API(https://developers.google.com/maps/documentation/javascript/overview), one from the (very obscure) Geoapify API(https://www.geoapify.com/), and a URI from a MongoDB you will have to create(https://www.mongodb.com/). Replace our environment variables with your own API keys and URI. 

### Prerequisites

Here is a list of npm stuff you will need. (Please look up the correct command if we got any of these wrong) Make sure to do these in the backend directory.
npm install express
npm install dotenv (if you also want to use environment variables)
npm install node-fetch@2.6.1 (we are using an older version for our purposes)
npm install mongodb

### Installation
To sum it up:
1) Clone the repository
2) Get the API keys and the URI from the links in "Getting Started" and replace them wherever we used the corresponding environment variable. If it is an API key, replace the whole "process.env.API_KEY" with your API key. If it is the URI, replace the whole "process.env.MONGO_URI" with your URI as well. Create your own .env file if you want. Look up "environment variables javascript" if you need help with that.
3) That is it, I think. (At the time of writing this, we are not done yet) Go ahead and try out our app for yourself.
   
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

(At the time of writing this, we are not done yet)

## Roadmap

- [ ] Finish project
- [ ] Finish Devpost + README
- [ ] Clean up repository
- [ ] Present after hacking time is over
- [ ] Acknowledge that we may not go back to it but it was a good learning experience

## Link to Devpost
https://devpost.com/software/scarpool?ref_content=user-portfolio&ref_feature=in_progress

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Thanks for checking this project out. We hope you enjoyed learning about this random idea we had. If there's anything we learned, it's that Google ALWAYS knows where we are. Have a good day.
