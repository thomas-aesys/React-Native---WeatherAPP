import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {View, StyleSheet, Text, Image} from 'react-native';
import cloudy from '../cloudy.png';
import sun from '../sun.png';
import rain from '../rain.png';
import thunder from '../thunder.png';

const Week = ({day}) => {
  console.log(day.list);
  return (
    <View style={styles.container}>
      {day.list.length > 0 ? (
        day.list.map(el => {
          return (
            <View style={styles.container_temp}>
              {el.weather[0].main === 'Clear' ? (
                <Image source={sun} style={{width: 60, height: 60}}></Image>
              ) : el.weather[0].main === 'Clouds' ? (
                <Image source={cloudy} style={{width: 60, height: 60}}></Image>
              ) : el.weather[0].main === 'Rain' ? (
                <Image source={rain} style={{width: 60, height: 60}}></Image>
              ) : el.weather[0].main === 'Thunder' ? (
                <Image
                  source={thunder}
                  style={{width: 200, height: 150}}></Image>
              ) : (
                <Icon name="weather-snowy" size={80}></Icon>
              )}
              <Text style={{color: '#818185',fontFamily: 'coolvetica rg'}}>
                {new Date(el.dt_txt.replace(' ', 'T')).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
              <Text style={{color:'#fff',fontSize: 25, fontFamily: 'coolvetica rg', marginTop: 10}}>{Math.floor(el.main.temp - 273)}°</Text>
            </View>
          );
        })
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    minWidth: '100%',
    minHeight: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container_temp:{
      alignItems: 'center'
  }
});

export default Week;
