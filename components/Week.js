import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import cloudy from '../cloudy.png';
import sun from '../sun.png';
import rain from '../rain.png';
import thunder from '../thunder.png';
import fog from '../fog.png';
import snow from '../snow.png';

const Week = ({fiveDay}) => {
  let filter = fiveDay.list.filter(
    el =>
      new Date(el.dt_txt.replace('T ', '')).toLocaleDateString([], {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }) ===
      new Date().toLocaleDateString([], {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }),
  );

  console.log(filter);

  return (
    <View style={styles.container}>
      {fiveDay.list.length > 0 ? (
        filter.map(el => {
          return (
            <>
              <View style={styles.container_temp}>
                {el.weather[0].main === 'Clear' ? (
                  <Image source={sun} style={{width: 60, height: 60}}></Image>
                ) : el.weather[0].main === 'Clouds' ? (
                  <Image
                    source={cloudy}
                    style={{width: 60, height: 60}}></Image>
                ) : el.weather[0].main === 'Rain' ? (
                  <Image source={rain} style={{width: 60, height: 60}}></Image>
                ) : el.weather[0].main === 'Thunder' ? (
                  <Image
                    source={thunder}
                    style={{width: 60, height: 60}}></Image>
                ) : el.weather[0].main === 'Haze' ? (
                  <Image source={fog} style={{width: 60, height: 60}}></Image>
                ) : (
                  <Image source={snow} style={{width: 60, height: 60}}></Image>
                )}
                <Text style={{color: '#818185', fontFamily: 'coolvetica rg'}}>
                  {new Date(el.dt_txt.replace(' ', 'T')).toLocaleTimeString(
                    [],
                    {
                      hour: '2-digit',
                      minute: '2-digit',
                    },
                  )}
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 25,
                    fontFamily: 'coolvetica rg',
                    marginTop: 10,
                  }}>
                  {Math.floor(el.main.temp - 273)}°
                </Text>
              </View>
            </>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container_temp: {
  },
});

export default Week;
