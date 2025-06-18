import { Picker } from '@react-native-picker/picker'
import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Animated, Alert } from 'react-native'

export const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    const {pais, ciudad} = busqueda

    const [ animacionboton ] = useState(new Animated.Value(1))

    const consultarClima = () => {
        if(paisForm.trim() === '' || ciudadForm.trim() === ''){
            mostrarAlerta()
            return
        }
        //consultar la API
        setConsultar(true)
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Agrega una ciudad y pais',
            [{text: 'Entendido'}]
        )
    }

    const animacionEntrada = () => {
        Animated.spring(animacionboton, {
            toValue: .8,
            useNativeDriver: true,
        }).start()
    }

    const animacionSalida = () => {
         Animated.spring(animacionboton, {
            toValue: 1,
            friction: 3,
            tension: 30,
            useNativeDriver: true,
        }).start()
    }

    const estiloAnimacion = {
        transform: [{scale: animacionboton}]
    }

  return (
    <>
        <View style={styles.formulario}>
            <View>
                <TextInput
                    value={ciudad}
                    onChangeText={ ciudad => setBusqueda({ ...busqueda, ciudad })}
                    style={styles.input}
                    placeholder='Ciudad'
                    placeholderTextColor={'#666'}
                />
            </View>

            <View>
                <Picker
                    style={styles.inputPicker}
                    selectedValue={pais}
                    dropdownIconColor='#64748B'
                    onValueChange={pais => setBusqueda({ ...busqueda, pais})}
                >
                    <Picker.Item label='- Seleccione un pais -' value='' />
                    <Picker.Item label='Alemania' value='DE' />
                    <Picker.Item label='Argentina' value='AR' />
                    <Picker.Item label='Brasil' value='BR' />
                    <Picker.Item label='Canada' value='CA' />
                    <Picker.Item label='Colombia' value='CO' />
                    <Picker.Item label='Chile' value='CL' />
                    <Picker.Item label='España' value='ES' />
                    <Picker.Item label='Estados Unidos' value='US' />
                    <Picker.Item label='Francia' value='FR' />
                    <Picker.Item label='Mexico' value='MX' />
                </Picker>
            </View>

            <TouchableWithoutFeedback
                onPressIn={() => animacionEntrada()}
                onPressOut={() => animacionSalida()}
                onPress={() => consultarClima()}
            >
                <Animated.View
                    style={[styles.btnBuscar, estiloAnimacion]}
                >
                    <Text style={styles.textoBuscar}>Buscar Clima</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    formulario: {
        marginTop: 100
    },
    inputPicker: {
        backgroundColor: '#FFF',
        marginTop: 3,
        color: '#64748B',
        height: 60,
        fontWeight: 'bold'
    },
    input:{
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        borderRadius: 15
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 15
    },
    textoBuscar: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
})
