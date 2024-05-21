import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import COLORS from '../consts/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import plants from '../consts/plants';
const width = Dimensions.get('screen').width / 2 - 30;
const HomeScreen = ({navigation}) => {
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const CategoryList = () => {
    // console.log("hello");
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categorytext,
                categoryIndex == index && style.categoryTextSlected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({plant}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={20}
                color={plant.like ? COLORS.red : COLORS.dark}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', height: 100}}>
            <Image
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 15,
              fontSize: 17,
              color: COLORS.dark,
            }}>
            {plant.name}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{fontWeight: 'bold', fontSize: 17, color: COLORS.dark}}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.green,
              }}>
              <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            Welcome To
          </Text>
          <Text style={{fontSize: 38, fontWeight: 'bold', color: COLORS.green}}>
            Plant Shop
          </Text>
        </View>
        <Icon name="shopping-cart" size={28} color="black" />
      </View>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={23} color="black" />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        numColumns={2}
        data={plants}
        renderItem={({item}) => (
          <Card
            plant={item}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 50,
            }}
            showsVerticalScrollIndicator={false}
          />
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 45,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 45,
    width: 45,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  categorytext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
  },
  categoryTextSlected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.green,
  },
  card: {
    height: 240,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 8,
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
});
export default HomeScreen;
