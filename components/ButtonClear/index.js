import React from 'react';
import {Button} from 'react-native';

const ButtonClear = props => (
    <Button
    color="green"
    onPress={props.onPress}
    title="Clear" />
);

export default ButtonClear;