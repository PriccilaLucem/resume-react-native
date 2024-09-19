import React from 'react';
import { Pressable, Text } from 'react-native';

type ButtonProps = {
    onTouch: () => void;
    children: string
};

const Button: React.FC<ButtonProps> = ({ onTouch, children }) => {
    return (
    <Pressable
      onPress={onTouch}
      style={({ pressed }) => [
        {
          margin:10,
          backgroundColor: pressed ? 'lightgray' : 'gray',
          padding: 10,
          borderRadius: 10,
          width:200
        },
      ]}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{children}</Text>
    </Pressable>
  );
};

export default Button;
