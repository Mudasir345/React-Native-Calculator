import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

// Basic math operations functions
const Calculator = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.result}>{input}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleClear()} style={styles.button}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('%')} style={styles.button}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.button}>
            <Text style={styles.buttonText}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('/')} style={styles.button}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress('7')} style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('8')} style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('9')} style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('*')} style={styles.button}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress('4')} style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('5')} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('6')} style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('-')} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        {/* Row 4 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress('1')} style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('2')} style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('3')} style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('+')} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Row 5 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePress('00')} style={styles.button}>
            <Text style={styles.buttonText}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('0')} style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('.')} style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEvaluate} style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark background
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff', // White text
  },
  buttonContainer: {
    flex: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#333', // Dark button background
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 28,
    color: '#fff', // White button text
  },
});

export default Calculator;
