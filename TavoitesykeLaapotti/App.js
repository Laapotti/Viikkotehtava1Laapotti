import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [heartRateMin, setHeartRateMin] = useState(0)
  const [heartRateMax, setHeartRateMax] = useState(0)
  const [age, setAge] = useState(0)

  const calculate = () => {
    setHeartRateMin(age * 11 * 0.65)
    setHeartRateMax(age * 11 * 0.85)

  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        placeholder='Enter your age'
        value={age}
        onChangeText={setAge}
        keyboardType='decimal-pad' />
      <Text style={styles.field}> Limits</Text>
      <Text style={styles.field}> {`${heartRateMin} - ${heartRateMax}`}</Text>


      <Button title='Calculate' onPress={calculate}></Button>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    margin: 8,
  },
  field: {
    marginTop: 8,
    marginBottom: 8,
  },
});
