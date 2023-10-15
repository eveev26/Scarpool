import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';

function BdImage(){
    return(
        <View style= {styles.container}>
            <Image style = {styles.image}
                source = {require('./city-silhouette-splash-black-white-clipart-city.png')}
            />
        </View>
    )
}
export default BdImage;

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        paddingBottom: 160,
        alignItems: 'center',      
    },
    image:{
        height: 200,
        resizeMode: 'cover',
    }
});