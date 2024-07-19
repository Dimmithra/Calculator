import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const onButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        console.log(error);
        setResult('error')
      }

    } else if (value === 'C') {
      setInput('');
      setResult('')
    } else {
      setInput(input + value)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultsContainer}>

        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>
      <View style={styles.inputContainer}>

        <TextInput
          thousandSeparator={true}
          style={styles.textInput}
          value={input}
          onChangeText={setInput}
          keyboardType={'numeric'}
        />
      </View>
      <View
        style={styles.lineStyle}
      />
      <View style={styles.buttonContainer}>
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "-", "+", "0", '/', "*", "=", "C",].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => onButtonPress(item)}
            >
              <Text style={styles.buttontext}>{item}</Text>

            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flex: 1,
  }, resultsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }, resultText: {
    fontSize: 40,
    alignItems: 'center',
    color: '#024C8E',
  }, inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }, textInput: {
    flex: 7,
    fontSize: 30,
    // backgroundColor: "#FF5733",
    width: '100%',
  }, buttonContainer: {
    flex: 7,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,

  }, button: {
    backgroundColor: "#ECE5E3",
    padding: 25,
    margin: 4,
    width: '30%',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderColor: '#ccc',
  }, buttontext: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#04187E",
  }, lineStyle: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
