import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ParentComponent from './components/parent.component'

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor calling');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ParentComponent name="kalees" />
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

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello, world!</Text>
//       </View>
//     );
//   }
// }
