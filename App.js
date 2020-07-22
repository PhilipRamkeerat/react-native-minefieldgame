import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Text style={styles.welcome}>Iniciando o Mines !!!</Text>
          <Text style={styles.instructions}>Tamanho da grade:
                  {params.getRowsAmount()}x{params.getRowsAmount()}
          </Text>
          <Field></Field>
          <Field opened></Field>
          <Field opened nearMines={1}></Field>
          <Field opened nearMines={2}></Field>
          <Field opened nearMines={3}></Field>
          <Field opened nearMines={6}></Field>
          <Field mined></Field>
          <Field mined opened></Field>
          <Field mined opened exploded></Field>

        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  }
});

export default App;
