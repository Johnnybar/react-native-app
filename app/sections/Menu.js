import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';

export class Menu extends React.Component {

  onPress = () => {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (<View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          this.props.navigate('LessonRT')}
        }>
          <Text style={styles.buttonText}>
            LESSONS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          this.props.navigate('RegisterRT')}
        }>
          <Text style={styles.buttonText}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
          <Text style={styles.buttonText}>
            BLOG
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          this.props.navigate('ContactRT')}
        }>
          <Text style={styles.buttonText}>
            CONTACT
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
          <Text style={styles.buttonText}>
            QUIZ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
          <Text style={styles.buttonText}>
            ABOUT
          </Text>
        </TouchableOpacity>
      </View>

    </View>)
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 6,
    backgroundColor: '#35605a'
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ffffff'
  },
  buttonStyles:{
    backgroundColor:'#35605a',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#ffffff'
  }
})
