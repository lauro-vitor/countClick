import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonContainer from './components/ButtonsContainer/';
import ButtonIncrement from './components/ButtonIncrement/';
import ButtonDecrement from './components/ButtonDecrement/';
import ButtonClear from './components/ButtonClear/';
import ClickValue from './components/ClickValue/';
const App = () => {
   const [state, setState] = React.useState({
       value: 0
   });

  return (
    <View style={styles.container}>
      <ClickValue value={state.value} />
      <ButtonContainer>
        <ButtonDecrement onPress={() => decrement(state, setState)} />
        <ButtonIncrement onPress={() => increment(state, setState)} />
      </ButtonContainer>
      <ButtonClear onPress={() => clear(state, setState)} />
    </View>
  );
}
const clear = (state, setState) => {
  setState({
    ...state,
    value: 0
  });
}
const decrement = (state, setState) => {
  setState({
    ...state,
    value: state.value - 1
  });
}
const increment = (state, setState) => {
  setState({
    ...state,
    value: state.value + 1
  })
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
export default App;
