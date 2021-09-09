import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}><Icon name="search" size={20} color={'#C6C6C8'}></Icon></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1F21',
    width: '20%',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


