import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

export const Formulario = () => {
  return (
    <>
        <View style={styles.formulario}>
            <View>
                <TextInput
                    placeholder='Ciudad'
                    placeholderTextColor={'#666'}
                />
            </View>

            <View>
                <Picker
                    style={styles.inputPicker}
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

            <TouchableWithoutFeedback>
                <View>
                    <Text>Buscar Clima</Text>
                </View>
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
        backgroundColor: '#f5f5f5',
        marginTop: 8,
        color: '#64748B',
    },
})
