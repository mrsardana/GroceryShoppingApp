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

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      password: '',
      address: '',
      postalCode: '',
      phoneNumber: '',
    };
  }

  postCustomersData = async () => {
    fetch('http://127.0.0.1:5000/customers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        postalCode: this.state.postalCode,
        phoneNumber: this.state.phoneNumber,
      }),
    });
  };

  submitData = () => {
    if (
      this.state.fullName.trim().length !== 0 &&
      this.state.email.trim().length !== 0 &&
      this.state.password.trim().length !== 0 &&
      this.state.address.trim().length !== 0 &&
      this.state.postalCode.trim().length !== 0 &&
      this.state.phoneNumber.trim().length !== 0
    ) {
      this.postCustomersData();
      alert('New Customer Has Been Added');
      this.props.navigation.navigate('Login');
    } else {
      alert('All Input Fields Must Have Some Value');
    }
  };

  render() {
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
                placeholder="Full Name"
                value={this.state.fullName}
                onChangeText={text => this.setState({fullName: text})}
              />
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor={colors.primary}
                placeholder="Email"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor={colors.primary}
                placeholder="Password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor={colors.primary}
                placeholder="Address"
                value={this.state.address}
                onChangeText={text => this.setState({address: text})}
              />
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor={colors.primary}
                placeholder="Postal Code"
                value={this.state.postalCode}
                onChangeText={text => this.setState({postalCode: text})}
              />
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor={colors.primary}
                placeholder="Mobile Phone"
                value={this.state.phoneNumber}
                onChangeText={text => this.setState({phoneNumber: text})}
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
                onPress={() => this.submitData()}
                style={styles.loginBtnStyle}>
                <Text style={styles.loginTextStyle}>Signup</Text>
              </TouchableOpacity>
              <View style={styles.viewStyle4}>
                <Text style={styles.textStyle}>Already have an account? </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.signupBtnStyle}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

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
