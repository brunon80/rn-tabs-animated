import React from 'react';
import { View, Dimensions } from 'react-native';
import Tab from './Tab'
import Indicator from './Indicator'

const { width } = Dimensions.get('screen')

const Tabs = ({ data, scrollX, onItemPress }) => {
    const [measures, setMeasures] = React.useState([])
    const containerRef = React.useRef()
    React.useEffect(() => {
        const m = []
        data.forEach(item => {
            item.ref.current.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    m.push({
                        x,
                        y,
                        width,
                        height
                    })
                    if (m.length === data.length) {
                        setMeasures(m)
                    }
                }
            )
        })
    }, [containerRef.current])

    return (
        <View style={{ position: 'absolute', top: 50, width }}>
            <View
                ref={containerRef}
                style={{
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    flex: 1
                }}>
                {
                    data.map((item, index) => {
                        return (
                            <Tab key={item.key} item={item} ref={item.ref} onItemPress={() => onItemPress(index)} />
                        )
                    })
                }
            </View>
            {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX}/>}
        </View>
    )
}

export default Tabs;