import { StyleSheet, View } from 'react-native';
import { Formulario } from './src/components/Formulario';

const App = () => {

  return (
    <>
      <View style={styles.app}>
        <View style={styles.contenido}>
          <Formulario/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)'
  },
  contenido: {

  }
});

export default App;
