import React from 'react';
import {Button} from 'react-native';

const ButtonDecrement = props => (
    <Button
    color="red"
    onPress={props.onPress}
    title="DECREMENT" />
);

export default ButtonDecrement;