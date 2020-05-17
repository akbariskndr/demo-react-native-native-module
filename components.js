import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1, 
    flexDirection: 'column'
  },
  flexGrow1: {
    flexGrow: 1,
  },
  spaceAroundRow: {
    flexDirection: 'row', justifyContent: 'space-around',
  },
  borderedInput: {
    flexGrow: 1, borderColor: '#333', borderWidth: 1,
  },
  divider: {
    flexGrow: 0.1
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultTextContainer: {
    flexGrow: 2, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export const Main = ({ children }) => (
  <View style={styles.mainContainer}>
    { children }
  </View>
);

export const Section = ({ children }) => (
  <View style={styles.flexGrow1}>
    { children }
  </View>
);

export const ResultText = ({ value }) => (
  <View style={styles.resultTextContainer}>
    <Text style={styles.resultText}>Result = {value}</Text>
  </View>
);

export const InputGroup = ({ x, y, onChangeX, onChangeY }) => (
  <View style={styles.spaceAroundRow}>
    <TextInput 
      style={styles.borderedInput}
      keyboardType="number-pad"
      onChangeText={onChangeX} 
      value={x}
    />
    <View style={styles.divider}/>
    <TextInput 
      style={styles.borderedInput}
      keyboardType="number-pad"
      onChangeText={onChangeY}
      value={y}
    />
  </View>
);

export const ButtonGroup = ({ onPressAdd, onPressSub, onPressMul, onPressDiv }) => (
  <View style={styles.spaceAroundRow}>
    <Button style={styles.flexGrow1} title="Add" onPress={onPressAdd}/>
    <Button style={styles.flexGrow1} title="Sub" onPress={onPressSub}/>
    <Button style={styles.flexGrow1} title="Mul" onPress={onPressMul}/>
    <Button style={styles.flexGrow1} title="Div" onPress={onPressDiv}/>
  </View>
);