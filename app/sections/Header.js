import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  toggleUser = () => {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    });
  }

  render() {
    let display = this.state.isLoggedIn
      ? 'sample user'
      : this.props.message;
    return (<View style={styles.headStyle}>
      <Image style={styles.logoStyle} source ={require('./img/drake.jpeg')}/>
      <Text style={styles.headText} onPress={this.toggleUser}>{display}
      </Text>
    </View>)
  }
}

const styles = StyleSheet.create({
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: Platform.OS === 'android'
      ? '#31e981'
      : '#35605a',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#000000',

  },
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20,
    flex: 1
  },
  logoStyle:{
    flex: 1,
    width: undefined,
    height: undefined
  }
})
