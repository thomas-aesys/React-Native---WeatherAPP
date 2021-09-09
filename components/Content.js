import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import City from './City';
import Description from './Description';
import Week from './Week';
import MoreDays from './MoreDays';

const Content = ({data, hours, isGeo, geoLocation}) => {
  return (
    <>
      {isGeo === true && geoLocation ? (
        <View style={styles.content_container}>
          <City
            name={geoLocation.name}
            country={geoLocation.sys.country}></City>
          <Description weather={geoLocation}></Description>
          <Week hours={hours}></Week>
        </View>
      ) : Object.entries(data).length > 0 && hours && hours.length > 0 ? (
        <>
          <View style={styles.content_container}>
            <City name={data.name} country={data.sys.country}></City>
            <Description weather={data}></Description>
            <Week hours={hours}></Week>
            {/* <MoreDays hours={hours}></MoreDays> */}
          </View>
        </>
      ) : (
        <Text></Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  content_container: {
    height: '77%',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Content;
