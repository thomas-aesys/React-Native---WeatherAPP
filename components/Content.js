import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import City from './City';
import Description from './Description';
import Week from './Week';
import FiveDays from './FiveDays';

const Content = ({data, day, fiveDay}) => {
  return (
    <>
      {Object.entries(data).length > 0 &&
      Object.entries(day).length > 0 &&
      Object.entries(fiveDay).length > 0 ? (
        <>
          <View style={styles.content_container}>
            <City weather={data}></City>
            <Description weather={data}></Description>
            <Week day={day}></Week>
            <FiveDays fiveDay={fiveDay}></FiveDays>
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
