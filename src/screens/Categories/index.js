import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import {BoxItemTopProducts, Gap, Header} from '../../components';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import {
  IL_Brinjal,
  IL_Brokoli,
  IL_Cauliflawer_PNG,
  IL_Pumpkin,
  IL_RedOnion,
  IL_Tomato_PNG,
} from '../../res';

const Categories = ({route, navigation}) => {
  const dataCategories = [
    {
      name: 'Tomato',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: '',
    },
    {
      name: 'Pumpkin',
      icon: IL_Pumpkin,
      bgColor: 'rgba(255, 244, 143, 0.5)',
      price: 2.15,
      desc: '',
    },
    {
      name: 'Brinjal',
      icon: IL_Brinjal,
      bgColor: 'rgba(238, 224, 248, 0.5)',
      price: 3.29,
      desc: '',
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: '',
    },
    {
      name: 'Red Onion',
      icon: IL_RedOnion,
      bgColor: 'rgba(251, 216, 224, 0.5)',
      price: 2.56,
      desc: '',
    },
    {
      name: 'Broccoli',
      icon: IL_Brokoli,
      bgColor: 'rgba(140, 250, 145, 0.5)',
      price: 3.11,
      desc: '',
    },
  ];

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.flex1}>
        <Header back onPress={() => navigation.goBack()} />
        <View style={styles.wrapperTitle}>
          <Text style={styles.title}>{route.params}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionBoxTopProduct}>
            {dataCategories.map((item, index) => {
              return (
                <BoxItemTopProducts
                  key={index}
                  bgColor={item.bgColor}
                  icon={item.icon}
                  text={item.name}
                  price={item.price}
                  //onPress={() => navigation.navigate('Detail', item)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrapperTitle: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
  },
  sectionBoxTopProduct: {
    flex1: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
