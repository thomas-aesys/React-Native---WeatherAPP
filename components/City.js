import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const City = ({weather}) => {
  console.log('weather', weather);
  return (
    <View style={styles.container}>
      <Icon style={styles.iconpin} name="map-marker" size={25} />
      <Text style={styles.cityName}>
        {weather.name},{' '}
        <Text style={{color: '#818185'}}>
          {weather.sys ? `(${weather.sys.country})` : ''}{' '}
        </Text>
      </Text>
    </View>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  iconpin: {
    minWidth: 30,
    color: '#fff',
    minHeight: 50,
  },
  cityName: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'coolvetica rg',
  },
});
