import React from 'react';
import {Text, FlatList, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Favorites1 from './components/favoriteslist';
import {withNavigation} from 'react-navigation';
function FavoritesImage({navigation, fav}){
    var c=2;
    return <View>
    <View style={styles.low}>
        <FlatList  
        // horizontal={c%2==0 ? true: false}
     keyExtractor={friend=>friend.id}
     data={fav}
     numColumns={c}
     renderItem={({item})=>{
      return <View style={styles.box}>
      <TouchableOpacity onPress={()=> navigation.navigate('Results', {id: item.id})}>
           <View style={styles.img}>
            <Image source = {{uri:item.imageUrl}}
                style = {{ width: "98%", height: 170, borderRadius: 10 }}
                /></View>
        <View style={styles.content}>
            <Text style={{color: 'white',fontWeight:'bold',fontSize:15,textDecorationLine: 'underline'}}>{item.title}</Text>
            </View>
            </TouchableOpacity> 
        </View>
    }}/>
    </View>
    </View>
};

const styles=StyleSheet.create({
    box: {
        width: "40%",
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 80,
        height: 220,
        marginLeft: "5%",
        borderRadius:10,
        marginHorizontal:10,
        alignSelf: 'center',
        backgroundColor:'black',
    },
    content: {
        alignSelf: 'center',
        textAlign: 'center',
        // flexDirectin: 'column'
    },
    low: {
        marginBottom: 15,
        flexDirection: 'row',
        // backgroundColor:'black',
    },
    img: {
        borderRadius:10,
    }
});
export default withNavigation(FavoritesImage);