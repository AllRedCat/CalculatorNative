import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
}
  from 'react-native';
import { Input, ThemeProvider } from 'react-native-elements';

const CalculatorApp = () => {
  // Estados para armazenar a expressão e o resultado
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  // Função para lidar com a pressão dos botões numéricos e operadores
  const handleButtonPress = (value) => {
    // Atualiza a expressão concatenando o valor do botão pressionado
    setExpression((prevExpression) => prevExpression + value);
  };

  // Função para calcular o resultado da expressão
  const handleCalculate = () => {
    try {
      // Avalia a expressão e atualiza o estado da expressão e do resultado
      setExpression(eval(expression).toString());
      setResult('');
    } catch (error) {
      // Em caso de erro na avaliação, define a expressão como 'Error'
      setExpression('Error');
    }
  };

  // Função para limpar a expressão e o resultado
  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  return (
    <ThemeProvider>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>

        <Input
          placeholder="Expression"
          value={expression}
          onChangeText={(text) => setExpression(text)}
        />

        <View style={style.BtnSpace}>
          <TouchableOpacity onPress={() => handleButtonPress('7')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('8')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('9')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('/')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={style.BtnSpace}>
          <TouchableOpacity onPress={() => handleButtonPress('4')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('5')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('6')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('-')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={style.BtnSpace}>
          <TouchableOpacity onPress={() => handleButtonPress('1')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('2')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('3')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('+')} style={style.BtnCalc}>
            <Text style={{ color: '#14213d', fontSize: 24 }}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={style.BtnFinalSpace}>
          <TouchableOpacity onPress={handleCalculate} style={style.BtnFinal}>
            <Text>Calculate</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClear} style={style.BtnFinal}>
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <StatusBar style="auto" />
      </View>

    </ThemeProvider>
  );
};

const style = StyleSheet.create({
  Body: {
    justifyContent: 'center',
  },

  BtnSpace: {
    width: 320,
    flexDirection: 'row',
  },

  BtnCalc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 40,
    height: 40,
    backgroundColor: '#fca311',
    margin: 10,
    borderRadius: 10,
  },

  BtnFinalSpace: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  BtnFinal: {
    flex: 1,
    height: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fca311',
    borderRadius: 10,
  },
});

export default CalculatorApp;
