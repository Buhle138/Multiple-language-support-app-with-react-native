import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import * as Localization from 'expo-localization'

const Translator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Translator App</Text>
    </View>
  )
}

export default Translator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 80 
    }
  });
  