import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import COLORS from '../consts/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function DetailScreen({navigation, route}) {
  const plant = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon
          name="arrow-back"
          size={28}
          color={COLORS.dark}
          onPress={() => navigation.navigate('Home')}
        />
        <Icon name="shopping-cart" size={28} color={COLORS.dark} />
      </View>
      <View style={style.imgContainer}>
        <Image source={plant.img} style={{flex: 1, resizeMode: 'contain'}} />
      </View>
      <View style={style.detailContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line}></View>
          <Text style={{fontSize: 18, color: COLORS.dark, fontWeight: 'bold'}}>
            Best Choice
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: COLORS.dark}}>
            {plant.name}
          </Text>
          <View style={style.priceDetail}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.white,
                marginLeft: 17,
              }}>
              ${plant.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
            About
          </Text>
          <Text style={{marginTop: 10, lineHeight: 18, color: 'grey'}}>
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={style.borderbtn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLORS.dark,
                    fontSize: 28,
                  }}>
                  -
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginHorizontal: 5,
                  color: COLORS.dark,
                }}>
                1
              </Text>
              <View style={style.borderbtn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLORS.dark,
                    fontSize: 28,
                  }}>
                  +
                </Text>
              </View>
              <View style={style.buybtn}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Buy
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    marginTop: 18,
    justifyContent: 'center',
    flex: 0.35,
    alignItems: 'center',
  },
  detailContainer: {
    flex: 0.85,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginTop: 30,
    paddingTop: 30,
    borderRadius: 20,
    marginBottom: 7,
  },
  line: {
    width: 25,
    marginRight: 3,
    marginBottom: 5,
    backgroundColor: COLORS.dark,
    height: 3,
  },
  priceDetail: {
    backgroundColor: COLORS.green,
    height: 40,
    width: 80,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  borderbtn: {
    height: 40,
    width: 60,
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buybtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 25,
  },
});
