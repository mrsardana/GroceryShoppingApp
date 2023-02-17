import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  BoxItemCategories,
  Header,
  Gap,
  BoxItemTopProducts,
} from '../../components';
import {
  IC_Search,
  IC_Fruits,
  IC_Vegetables,
  IC_Bakery,
  IC_Drinks,
  IC_Bakery2,
  IL_Grapes_PNG,
  IL_Tomato_PNG,
  IL_Greentea_PNG,
  IL_Cauliflawer_PNG,
  IL_RedOnion,
  IL_Brokoli,
} from '../../res';

const Dashboard = ({navigation}) => {
  const dataTopProducts = [
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      price: 0.99,
      bgColor: 'rgba(227, 206, 243, 0.5)',
      desc: 'Grapes are fleshy, rounded fruits that grow in clusters made up of many fruits of greenish, yellowish or purple skin. The pulp is juicy and sweet, and it contain several seeds or pips. It is a well-known fruit; it is eaten raw, although it is mainly used for making wine.',
    },
    {
      name: 'Tomato',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Drinks',
      icon: IL_Greentea_PNG,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 3.25,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145, 0.5)',
      price: 4.14,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Red Onion',
      icon: IL_RedOnion,
      bgColor: 'rgba(251, 216, 224, 0.5)',
      price: 2.56,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Broccoli',
      icon: IL_Brokoli,
      bgColor: 'rgba(140, 250, 145, 0.5)',
      price: 3.11,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.flex1}>
        <Header drawer />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal: 20}}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Search" style={styles.textInputSearch} />
              <IC_Search />
            </View>
            <View>
              <Text style={styles.titleCat}>Categories</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollViewCategories}>
                <BoxItemCategories
                  icon={<IC_Fruits />}
                  color="rgba(169, 178, 169, 0.5)"
                  text="Fruits"
                  onPress={() => navigation.navigate('Categories', 'Fruits')}
                />
                <BoxItemCategories
                  icon={<IC_Vegetables />}
                  color="rgba(233, 255, 210, 0.5)"
                  text="Vegetables"
                  onPress={() =>
                    navigation.navigate('Categories', 'Vegetables')
                  }
                />
                <BoxItemCategories
                  icon={<IC_Drinks />}
                  color="rgba(140, 175, 53, 0.5)"
                  text="Drinks"
                  onPress={() => navigation.navigate('Categories', 'Drinks')}
                />
                <BoxItemCategories
                  icon={<IC_Bakery />}
                  color="rgba(214, 255, 218, 0.5)"
                  text="Bakery"
                  onPress={() => navigation.navigate('Categories', 'Bakery')}
                />
                <BoxItemCategories
                  icon={<IC_Bakery2 />}
                  color="rgba(255, 250, 204, 0.5)"
                  text="Bakery"
                  onPress={() => navigation.navigate('Categories', 'Bakery')}
                />
              </ScrollView>
            </View>
            <Gap height={24} />
            <View>
              <View style={styles.wrapperHeadTopProducts}>
                <Text style={styles.titleTopProducts}>Top Products</Text>
                <TouchableOpacity>
                  <Text style={styles.textSeeAll}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionBoxTopProduct}>
                {dataTopProducts.map((item, index) => {
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
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  titleCat: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  scrollViewCategories: {
    paddingLeft: 20,
  },
  wrapperHeadTopProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  titleTopProducts: {
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  textSeeAll: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
  sectionBoxTopProduct: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
