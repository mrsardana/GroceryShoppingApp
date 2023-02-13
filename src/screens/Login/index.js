/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import {IL_GetStarted_PNG, IL_Background, IL_Back} from '../../res';

const Login = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={IL_Background}
        style={{width: '100%', aspectRatio: 1, height: 440}}
        resizeMode="cover">
        <View style={{alignItems: 'center', width: 460}}>
          <View
            style={{
              marginTop: 300,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 60,
              alignItems: 'center',
              fontFamily: fonts.Medium,
            }}>
            <Text
              style={{fontSize: 40, color: colors.primary, fontWeight: 'bold'}}>
              Welcome Back
            </Text>
            <Text
              style={{
                color: colors.grey,
                fontSize: 19,
                fontWeight: 'bold',
                marginBottom: 20,
                fontFamily: fonts.Medium,
              }}>
              Login to your account
            </Text>
            <TextInput
              style={{
                borderRadius: 100,
                color: colors.primary,
                paddingHorizontal: 10,
                width: '78%',
                height: '7%',
                backgroundColor: 'rgb(220,220, 220)',
                marginVertical: 30,
                fontFamily: fonts.Medium,
              }}
              placeholderTextColor={colors.primary}
              placeholder="Email / Username"
              keyboardType={'email-address'}
            />
            <TextInput
              style={{
                borderRadius: 100,
                color: colors.primary,
                paddingHorizontal: 10,
                width: '78%',
                height: '7%',
                backgroundColor: 'rgb(220,220, 220)',
                marginVertical: 10,
                fontFamily: fonts.Medium,
              }}
              placeholderTextColor={colors.primary}
              placeholder="Password"
              secureTextEntry={true}
            />
            <View
              style={{
                alignItems: 'flex-end',
                width: '78%',
                paddingRight: 10,
                marginBottom: 120,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: 'bold',
                  fontSize: 16,
                  fontFamily: fonts.Medium,
                }}>
                Forgot Password ?
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => alert('Logged In')}
              style={{
                height: 50,
                width: 300,
                borderRadius: 20,
                fontSize: 18,
                fontFamily: fonts.Medium,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignSelf: 'center',
                color: colors.white,
                textAlign: 'center',
                alignItems: 'center',
                paddingVertical: 5,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 25,
                  fontWeight: 'bold',
                  fontFamily: fonts.Medium,
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: colors.grey,
                  fontFamily: fonts.Medium,
                }}>
                Don't have an account ?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text
                  style={{
                    color: colors.primary,
                    fontWeight: 'bold',
                    fontSize: 16,
                    fontFamily: fonts.Medium,
                  }}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
