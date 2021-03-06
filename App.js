import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Home } from './app/views/Home.js';
import  Contact  from './app/views/Contact.js';
import { AppLoading, Asset, Font, Icon } from 'expo';
import {StackNavigator} from 'react-navigation'
// import AppNavigator from './navigation/AppNavigator';
import {Video} from './app/views/Video.js'
import {VideoDetail} from './app/views/VideoDetail.js';
import {Register} from './app/views/Register.js';
import {Login} from './app/views/Login.js';


const MyRoutes = StackNavigator({
  HomeRT:{
    screen: Home
  },
  ContactRT:{
    screen: Contact
  },
  LessonRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  }
},
{
  InitialRouteName: 'HomeRT'
}
);
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <MyRoutes />
    )
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
