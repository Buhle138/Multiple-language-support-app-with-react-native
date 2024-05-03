import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'
import * as Localization from 'expo-localization'
import {I18n} from 'i18n-js'


const translations = {
    en: {
        welcome: "Hello welcome to Dikeletsong",
    },
    zu: {
        welcome: "Sawubona wamkelekile e Dikeletsong",
    },
    se: {
        welcome: "Dumela ko Dikeletsong",
    },
    af: {
        welcome: "More jy is Welkom van Dikeletsong"
    }
}

const i18n = new I18n(translations);

i18n.locale = Localization.locale;

i18n.enableFallback = true

const Translator = () => {
    const [locale, setLocale] = useState(i18n.locale);

    const changeLocale = (locale) => {
        i18n.locale = locale;
        setLocale(locale)
    }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Translator App</Text>
      <Text style={styles.Text}>{i18n.t('welcome')}</Text>
      <Text style={styles.Text}>Select Language</Text>
      <TouchableOpacity onPress={() => changeLocale('en')}>
        <Text style={styles.langText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeLocale('zu')}>
        <Text style={styles.langText}>Zulu</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeLocale('se')}>
        <Text style={styles.langText}>Sesotho</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => changeLocale('af')}>
        <Text style={styles.langText}>Afrikaans</Text>
      </TouchableOpacity>
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
    },
    Text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        color: 'red'
    },
    langText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        color: 'blue'
    }
  });
  