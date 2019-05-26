import React from 'react';
import Home from '.Component/Home';
import secondScreen from '.Component/secondScreen';

import{
  Router,
  Scene,
} from 'react-native-router-flux';

import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component{
  render(){
    return{
      <Router>
        <Scene key='root'>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='secondScreen' component={secondScreen} title='secondScreen'/>
        </Scene>
      </Router>
    };
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

      <Text>Hello, Josue!</Text>

      </View>


      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
