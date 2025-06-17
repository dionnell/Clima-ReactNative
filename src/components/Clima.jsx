import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FormatToCentigrados } from '../helper/FormatToCentigrados'

export const Clima = ({resultado}) => {

  const {name, main} = resultado

  if(!name) return (<></>)
   
  return (
    <>
      <View style={styles.clima}>
        <Text style={[styles.texto, styles.actual]}>{FormatToCentigrados(main.temp)}
            <Text style={styles.temperatura}>
              &#x2103; 
            </Text>
            <Image
              style={{width: 66, height: 50}}
              source={{uri: `http://openweathermap.org/img/w/${resultado.weather[0].icon}.png`}}
            />
        </Text>

        <View style={styles.temperaturas}>
          <Text style={styles.texto}>Min 
            <Text style={styles.temperatura}>
               {FormatToCentigrados(main.temp_min)} &#x2103; 
            </Text>
          </Text>

          <Text style={styles.texto}>Max 
            <Text style={styles.temperatura}>
               {FormatToCentigrados(main.temp_max)} &#x2103; 
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20
  },
  texto: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 20
  },
  actual: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: 'bold'
  },
  temperatura: {
    fontSize: 24,
    fontWeight: 'normal'
  },
  temperaturas: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})