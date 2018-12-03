// Import libraries for making a compment
import React from 'react';
import { Text, View } from 'react-native';

// We will make a Component
const Header = (props) => {
  // Destructuring to avoid having to use styles over and over
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}><Text style={textStyle}>{props.headerText}</Text></View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component available to other parts of the App
export { Header };
