import { useEffect, useState } from 'react';
import { Alert, Keyboard, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formulario } from './src/components/Formulario';
import { Clima } from './src/components/Clima';
import { FormatToCentigrados } from './src/helper/FormatToCentigrados';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [bgcolor, setBgcolor] = useState(['#4c669f', '#3b5998', '#192f6a'])

  const { ciudad, pais } = busqueda

  useEffect( () => {
    const consultarClima = async () => {
      if(consultar){
        const APIkey = '67cc9c4841454880b9770bbc4ee9cc24'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIkey}` 

        try {
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()

          setResultado(resultado)
          setConsultar(false)

          //Modifica los colores de fondo basado en la temperatura
          const {main} = resultado
          const actual = FormatToCentigrados(main.temp)

          if( actual < 10 ){
            setBgcolor(['#DE64DE', '#B68FFF', '#FFFEF5'])
          } else if( actual >= 10 && actual < 25 ){
            setBgcolor(['#73D7FF', '#8FFFFF', '#FFFEF5'])
          }else{
            setBgcolor(['#FF3030', '#FF8F8F', '#FFFEF5'])
          }

        } catch (error) {
          mostrarAlerta()
        }
      }
    }
    consultarClima()
  }, [consultar])
  
  const mostrarAlerta = () => {
    Alert.alert(
        'Error',
        'No hay resultados, intenta con otra ciudad o pais',
        [{text: 'OK'}]
    )
  }

  const ocultarTeclado = () => {
    Keyboard.dismiss()
  }

  const bgColorApp = {
    backgroundColor: bgcolor
  }

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => ocultarTeclado()}
      >
        <LinearGradient 
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          style={[styles.app]}
          colors={bgColorApp.backgroundColor}
        >
          <View style={styles.contenido}>
            <Clima
              resultado={resultado}
            />
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />

          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;
