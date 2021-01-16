import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated, 
  Image
} from 'react-native';
import Tabs from './components/Tabs'
import { data } from './data'

const { width, height } = Dimensions.get('screen');

export default function App() {

  const scrollX = React.useRef(new Animated.Value(0)).current
  const ref = React.useRef()

  const onItemPress = React.useCallback(itemIndex => {
    ref.current.scrollToOffset({
      offset: width * itemIndex
    })
  })

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList 
        ref={ref}
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.image}}
                style={{
                  flex: 1,
                  resizeMode: 'cover'
                }}
              />
              <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0,0,0, .3)' }]} ></View>
            </View>
          )
        }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
