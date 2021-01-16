import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { data } from '../data';

const { width, height} = Dimensions.get('screen')

const Indicator = ({ measures, scrollX }) => {
  const inputRange = data.map((_, index) => index * width);
  const indicatorWidth = scrollX.interpolate({
      inputRange,
      outputRange: measures.map(measure => measure.width)
  })
  const translateX = scrollX.interpolate({
      inputRange,
      outputRange: measures.map(measure => measure.x)
  })
  return <Animated.View 
    style={{
         backgroundColor: 'white',
         position: 'absolute',
         height: 4,
         width: indicatorWidth,
         left: 0,
         bottom: -10,
         transform: [
            {
                translateX
            }
         ]
        }}
  />;
}

export default Indicator;