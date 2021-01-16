import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { data } from '../data'

const Tab = React.forwardRef(({ item, onItemPress }, ref) => {
    return (
        <TouchableOpacity onPress={onItemPress}>
            <View ref={ref}>
                <Text style={{
                    color: 'white',
                    fontSize: 84 / data.length,
                    fontWeight: '800',
                    textTransform: 'uppercase'
                }}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
})

export default Tab;