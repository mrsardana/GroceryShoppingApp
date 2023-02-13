import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IL_GetStarted_PNG, IL_Greentea_PNG} from '../../res';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import {Login} from '..';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Image source={IL_GetStarted_PNG} style={styles.image} />
      <View style={styles.wrapperSlogan}>
        <Text style={styles.txtSlogan}>Shop Your Daily</Text>
        <Text style={styles.txtSlogan}>Necessary</Text>
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: colors.primary,
          height: 50,
          width: 259,
          borderRadius: 20,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 18,
            fontFamily: fonts.Medium,
            color: colors.white,
            textAlign: 'center',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fonts.Medium,
              color: colors.white,
              textAlign: 'center',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  screen: {flex: 1, paddingHorizontal: 20, justifyContent: 'center'},
  image: {height: 225, width: '100%', resizeMode: 'stretch'},
  wrapperSlogan: {marginTop: 51},
  txtSlogan: {
    fontSize: 30,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
  },
});
