import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import cloudy from '../cloudy.png';
import sun from '../sun.png';
import rain from '../rain.png';
import thunder from '../thunder.png';
import fog from '../fog.png';
import snow from '../snow.png';

const Description = ({weather}) => {
 
  return (
    <>
      <View style={styles.image_container}>
        {weather.weather[0].main === 'Clear' ? (
          <Image source={sun} style={{width: 150, height: 150}}></Image>
        ) : weather.weather[0].main === 'Clouds' ? (
          <Image source={cloudy} style={{width: 200, height: 150}}></Image>
        ) : weather.weather[0].main === 'Rain' ? (
          <Image source={rain} style={{width: 200, height: 150}}></Image>
        ) : weather.weather[0].main === 'Thunder' ? (
          <Image source={thunder} style={{width: 200, height: 150}}></Image>
        ) : weather.weather[0].main === 'Haze' || weather.weather[0].main === 'Mist' ? (
          <Image source={fog} style={{width: 200, height: 150}}></Image>
        ) : (
          <Image source={snow} style={{width: 200, height: 150}}></Image>
        )}
      </View>
      <View style={styles.container}>
        <Text style={styles.temp}>
          {Math.floor(weather.main.temp - 273)}
          <Text style={{color: '#F9D65D', fontFamily: 'coolvetica rg'}}>°</Text>
        </Text>
        <Text style={styles.weather}>{weather.weather[0].main}</Text>
      </View>
      <View style={styles.container_desc}>
        <View style={styles.cont1}>
          <Text style={styles.description}>
            <View style={styles.desc}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#818185',
                  fontFamily: 'coolvetica rg',
                }}>
                Wind{' '}
              </Text>
              <Text style={styles.text}>
                {weather.wind.speed}{' '}
                <Text style={{fontSize: 20, fontFamily: 'coolvetica rg'}}>
                  km/h
                </Text>
              </Text>
            </View>
          </Text>
          <Text style={styles.description}>
            <View style={styles.desc}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#818185',
                  fontFamily: 'coolvetica rg',
                }}>
                Humidity{' '}
              </Text>
              <Text style={styles.text}>
                {weather.main.humidity}
                <Text style={{fontSize: 20}}>%</Text>
              </Text>
            </View>
          </Text>
        </View>
        <View
          style={{backgroundColor: '#fff', width: 1, height: '100%'}}></View>
        <View style={styles.cont2}>
          <Text style={styles.description}>
            <View style={styles.desc}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#818185',
                  fontFamily: 'coolvetica rg',
                }}>
                Temp. Max{' '}
              </Text>
              <Text style={styles.text}>
                {Math.floor(weather.main.temp_max - 273)}°
              </Text>
            </View>
          </Text>
          <Text style={styles.description}>
            <View style={styles.desc}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#818185',
                  fontFamily: 'coolvetica rg',
                }}>
                Temp. Min{' '}
              </Text>
              <Text style={styles.text}>
                {Math.floor(weather.main.temp_min - 273)}°
              </Text>
            </View>
          </Text>
        </View>
      </View>
    </>
  );
};
export default Description;

const styles = StyleSheet.create({
  image_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: -10,
  },
  temp: {
    color: '#fff',
    fontSize: 70,
    fontFamily: 'coolvetica rg',
  },
  container_desc: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1F1F219E',
    marginTop: 10,
    borderRadius: 10,
    minHeight: 180,
    minWidth: '100%',
    fontFamily: 'coolvetica rg',
  },
  desc: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50%',
    alignItems: 'center',
  },
  cont1: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cont2: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weather: {
    fontSize: 35,
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'coolvetica rg',
  },
  description: {
    color: '#fff',
    fontFamily: 'coolvetica rg',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    marginTop: 10,
    fontFamily: 'coolvetica rg',
  },
});
