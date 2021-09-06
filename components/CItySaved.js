import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import cloudy from '../cloudy.png';
import sun from '../sun.png';
import rain from '../rain.png';
import thunder from '../thunder.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const CitySaved = ({name, data, setState}) => {
  const navigation = useNavigation();

  const deleteCity = index => {
    const newList = name.filter((item, i) => i !== index);
    setState(newList);
  };

  
// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('FavCity')
//     let parseValue = jsonValue != null ? JSON.parse(jsonValue) : null;
//     return parseValue
//   } catch(e) {
//     console.log(e)
//   }
// }
// getData().then(res => console.log(res))
  return (
    <>
      <ScrollView style={styles.content_container}>
        <View style={styles.card}>
          {data.map((el, index) => {
            if (el !== undefined)
              return (
                <View key={index} style={styles.container_desc}>
                  <View style={{alignItems: 'flex-end', margin: 8}}>
                    <TouchableOpacity
                      onPress={() => {
                        deleteCity(index);
                      }}>
                      <Icon name="close" size={15} color={'#C6C6C8'} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      let newData = [...name];
                      navigation.navigate('Home', {
                        data: newData,
                        index: index,
                      });
                    }}>
                    <View style={{alignItems: 'center', marginTop: -5}}>
                      <Text style={styles.text}>
                        {el.name},
                        <Text style={{color: '#C6C6C8'}}>({el.country})</Text>
                      </Text>
                    </View>
                    <View style={styles.image}>
                      {el.weather === 'Clear' ? (
                        <Image
                          source={sun}
                          style={{
                            width: 90,
                            height: 90,
                            marginTop: 10,
                          }}></Image>
                      ) : el.weather === 'Clouds' ? (
                        <Image
                          source={cloudy}
                          style={{width: 110, height: 100}}></Image>
                      ) : el.weather === 'Rain' ? (
                        <Image
                          source={rain}
                          style={{width: 110, height: 100}}></Image>
                      ) : el.weather === 'Thunder' ? (
                        <Image
                          source={thunder}
                          style={{width: 110, height: 100}}></Image>
                      ) : (
                        <Icon name="weather-snowy" size={80}></Icon>
                      )}
                    </View>
                    <View style={styles.temp_container}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 40,
                          fontFamily: 'coolvetica rg',
                        }}>
                        {Math.floor(el.temp - 273)}
                        <Text style={{color: '#F9D65D'}}>°</Text>
                      </Text>
                      <Text
                        style={{
                          color: '#818185',
                          fontSize: 20,
                          fontFamily: 'coolvetica rg',
                          marginTop: 10,
                        }}>
                        {el.weather}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  content_container: {
    padding: 10,
    height: '80%',
    borderRadius: 10,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_desc: {
    display: 'flex',
    backgroundColor: '#1F1F219E',
    marginTop: 10,
    borderRadius: 10,
    width: '50%',
    height: 200,
    fontFamily: 'coolvetica rg',
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    color: '#fff',
    fontFamily: 'coolvetica rg',
  },
  image: {
    alignItems: 'center',
  },
  temp_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CitySaved;
