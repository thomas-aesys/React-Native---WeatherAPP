import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Title = ({title}) => {
  return (
    <View style={styles.container_title}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container_title: {
    alignItems: 'center',
    width: '100%',
    height:80
  },
  title: {
    height: 50,
    fontSize: 30,
    color: '#fff',
    fontFamily: 'coolvetica rg',
  },
});
