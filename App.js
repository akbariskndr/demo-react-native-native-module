/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StatusBar,
} from 'react-native';
import {
  Main,
  Section,
  ResultText,
  InputGroup,
  ButtonGroup,
} from './components';

import Calculator from './CalculatorModule';

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setResult] = useState(0);

  const getResultPromise = operator => {
    return async () => {
      const result = await Calculator.applyWithPromise(x, y, operator);
      setResult(result);
    }
  };

  const getResultCallback = operator => {
    return () => {
      Calculator.applyWithCallback(x, y, operator, result => {
        setResult(result);
      });
    }
  }

  const onChangeX = val => {
    const value = Number(val);
    setX(Number.isNaN(value) ? 0 : value);
  }

  const onChangeY = val => {
    const value = Number(val);
    setY(Number.isNaN(value) ? 0 : value);
  }

  return (
    <>
      <StatusBar backgroundColor="#11d0ff" />
      <Main>
        <ResultText value={result} />
        <Section>
          <InputGroup
            x={String(x)}
            y={String(y)}
            onChangeX={onChangeX}
            onChangeY={onChangeY}
          />
        </Section>
        <Section>
          <ButtonGroup 
            onPressAdd={getResultPromise(Calculator.ADD)} 
            onPressSub={getResultCallback(Calculator.SUB)}
            onPressMul={getResultPromise(Calculator.MUL)}
            onPressDiv={getResultCallback(Calculator.DIV)}
          />
        </Section>
      </Main>
    </>
  );
};


export default App;
