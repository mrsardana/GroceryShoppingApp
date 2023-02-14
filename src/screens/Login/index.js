import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';
import {IL_Background} from '../../res';

const Login = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={IL_Background}
        style={styles.backgroundStyle}
        resizeMode="cover">
        <View style={styles.viewStyle1}>
          <View style={styles.viewStyle2}>
            <Text style={styles.welcomeStyle}>Welcome Back</Text>
            <Text style={styles.loginAccountStyle}>Login to your account</Text>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.primary}
              placeholder="Email / Username"
              keyboardType={'email-address'}
            />
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.primary}
              placeholder="Password"
              secureTextEntry={true}
            />
            <View style={styles.viewStyle3}>
              <Text style={styles.forgotPassStyle}>Forgot Password?</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainMenu')}
              style={styles.loginBtnStyle}>
              <Text style={styles.loginTextStyle}>Login</Text>
            </TouchableOpacity>
            <View style={styles.viewStyle4}>
              <Text style={styles.textStyle}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupBtnStyle}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  backgroundStyle: {
    width: '100%',
    aspectRatio: 1,
    height: 440,
  },
  viewStyle1: {
    alignItems: 'center',
    width: 460,
  },
  viewStyle2: {
    marginTop: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: 700,
    width: 460,
    borderTopLeftRadius: 130,
    paddingTop: 60,
    alignItems: 'center',
    fontFamily: fonts.Medium,
  },
  welcomeStyle: {
    fontSize: 40,
    color: colors.primary,
    fontWeight: 'bold',
  },
  loginAccountStyle: {
    color: colors.grey,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: fonts.Medium,
  },
  inputStyle: {
    borderRadius: 100,
    color: colors.primary,
    paddingHorizontal: 10,
    width: '78%',
    height: '7%',
    backgroundColor: 'rgb(220,220, 220)',
    marginVertical: 15,
    fontFamily: fonts.Medium,
  },
  viewStyle3: {
    alignItems: 'flex-end',
    width: '78%',
    paddingRight: 10,
    marginBottom: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  forgotPassStyle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
  loginBtnStyle: {
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
  },
  loginTextStyle: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: fonts.Medium,
  },
  viewStyle4: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey,
    fontFamily: fonts.Medium,
  },
  signupBtnStyle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
});
