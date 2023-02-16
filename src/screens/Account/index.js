import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  TextInput,
} from 'react-native';
import {colors} from '../../res/colors';
import {IL_Avatar, IL_Profile} from '../../res';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalVisible: false,
      fullName: '',
      email: '',
      password: '',
      address: '',
      postalCode: '',
      phoneNumber: '',
    };
  }

  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }

  fetchCustomersData = () => {
    fetch('http://127.0.0.1:5000/customers')
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({data: jsonResponse});
      })
      .catch(error => console.log(error));
  };

  updateCustomersData = async () => {
    fetch('http://127.0.0.1:5000/customers', {
      method: 'PUT',
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
  updateButton() {
    this.updateCustomersData();
    this.setState({modalVisible: false});
  }

  componentDidMount() {
    this.fetchCustomersData();
  }

  renderItem = data => {
    // eslint-disable-next-line no-lone-blocks
    {
      return (
        <View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Full Name</Text>
            <Text style={styles.detailValue}>{data.item.fullName}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailValue}>{data.item.email}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>{data.item.address}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Postal Code</Text>
            <Text style={styles.detailValue}>{data.item.postalCode}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Phone Number</Text>
            <Text style={styles.detailValue}>{data.item.phoneNumber}</Text>
          </View>
        </View>
      );
    }
  };

  renderUpdate = data => {
    // eslint-disable-next-line no-lone-blocks
    {
      return (
        <View>
          <Text style={styles.heading3}> UPDATE CUSTOMER INFO SECTION:</Text>
          <Image style={styles.image} source={IL_Profile} />
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>FULL NAME:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.fullName}
              onChangeText={text => this.setState({fullName: text})}
            />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>EMAIL:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.email}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>ADDRESS:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.address}
              onChangeText={text => this.setState({address: text})}
            />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>POSTAL CODE:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.postalCode}
              onChangeText={text => this.setState({postalCode: text})}
            />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>PHONE NUMBER:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.phoneNumber}
              onChangeText={text => this.setState({phoneNumber: text})}
            />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>PASSWORD:</Text>
            <TextInput
              style={styles.input3}
              defaultValue={data.item.password}
              onChangeText={text => this.setState({password: text})}
            />
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={IL_Avatar} style={styles.avatar} />
          <TouchableOpacity onPress={() => this.toggleModal(true)}>
            <Text style={styles.editProfileButton}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item._id}
            renderItem={item => this.renderItem(item)}
          />
          <Modal
            animationType={'slide'}
            transparent={true}
            visible={this.state.modalVisible}>
            <View style={styles.modal}>
              <FlatList
                data={this.state.data}
                keyExtractor={item => item._id}
                renderItem={item => this.renderUpdate(item)}
              />
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.input4}
                  onPress={() => {
                    this.toggleModal(!this.state.modalVisible);
                  }}>
                  <Text style={styles.text}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.input4}
                  onPress={() => this.updateButton()}>
                  <Text style={styles.text}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: '40%',
    height: '35%',
    alignSelf: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  editProfileButton: {
    color: colors.primary,
  },
  details: {
    marginTop: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 80,
  },
  detailValue: {
    flex: 1,
  },
  modal: {
    alignSelf: 'center',
    width: '97%',
    height: '75%',
    borderColor: '#414142',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 120,
    padding: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  input3: {
    marginLeft: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 0.9,
    padding: 5,
    marginTop: 5,
    color: '#D4DF38',
    backgroundColor: '#414142',
    borderColor: '#414142',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input4: {
    marginLeft: 10,
    fontWeight: 'bold',
    borderRadius: 25,
    borderWidth: 0.9,
    padding: 5,
    marginTop: 5,
    color: colors.darkGreen,
    backgroundColor: colors.grey,
    width: 90,
    height: 35,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    borderColor: colors.darkGreen,
    alignSelf: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 5,
    color: '#414142',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
