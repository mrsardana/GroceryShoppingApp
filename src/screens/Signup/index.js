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

const Signup = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={IL_Background}
        style={styles.backgroundStyle}
        resizeMode="cover">
        <View style={styles.viewStyle1}>
          <View style={styles.viewStyle2}>
            <Text style={styles.welcomeStyle}>Register</Text>
            <Text style={styles.loginAccountStyle}>Create a new account</Text>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.primary}
              placeholder="First Name"
            />
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.primary}
              placeholder="Last Name"
            />
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.primary}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.primary}
              placeholder="City"
            />
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.primary}
              placeholder="Address"
            />
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.primary}
              placeholder="Mobile Phone"
            />
            <View style={styles.viewStyle5}>
              <Text style={styles.textStyle2}>
                By signing up, you agree to our{' '}
              </Text>
              <Text style={styles.textStyle3}>Terms & Conditions </Text>
              <Text style={styles.textStyle4}>and </Text>
              <Text style={styles.textStyle5}>Privacy Policy!</Text>
            </View>
            <TouchableOpacity
              onPress={() => alert('Account Created')}
              style={styles.loginBtnStyle}>
              <Text style={styles.loginTextStyle}>Signup</Text>
            </TouchableOpacity>
            <View style={styles.viewStyle4}>
              <Text style={styles.textStyle}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signupBtnStyle}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;

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
    marginVertical: 5,
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
  viewStyle5: {
    display: 'flex',
    flexDirection: 'row',
    width: '78%',
    alignItems: 'center',
  },
  textStyle2: {
    color: 'grey',
    fontSize: 10,
    alignSelf: 'center',
    fontFamily: fonts.Medium,
  },
  textStyle3: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 10,
    fontFamily: fonts.Medium,
  },
  textStyle4: {
    color: 'grey',
    fontSize: 10,
    fontFamily: fonts.Medium,
  },
  textStyle5: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 10,
    fontFamily: fonts.Medium,
  },
});
