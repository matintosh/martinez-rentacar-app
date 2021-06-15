import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {constants} from '../../styles/base';
import styles from './styles';

const renderItemDefault = ({item, index}) => {
  return (
    <View
      style={{
        height: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text h2>{item.title}</Text>
    </View>
  );
};
const entriesDefault = [
  {title: 'Martinez'},
  {title: 'Rent'},
  {title: 'A'},
  {title: 'Car'},
  {title: 'Now'},
];

export default function Slider({ entries = entriesDefault, renderItem = renderItemDefault }) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        data={entries}
        renderItem={renderItem}
        sliderWidth={constants.dimensions.windowWidth}
        itemWidth={constants.dimensions.windowWidth}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        inactiveDotStyle={styles.inactiveDot}
        dotStyle={styles.dot}
        inactiveDotOpacity={1}
        inactiveDotScale={0.2}
        containerStyle={{marginBottom: 42}}
      />
    </>
  );
}
