import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChildComponent from './child-component';



export default class ParentComponent extends Component {
    style = StyleSheet.create(
        {
            fontDesign: {
                color: 'blue'
            }
        }
    )
    state = {
        age: 10
    }
    constructor(props) {
        super(props);
        console.log('parent : props::', props);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Parent Component name :: {this.props.name}</Text>
                <Text style={this.style.fontDesign}>His age : {this.state.age}</Text>
                <ChildComponent></ChildComponent>
            </View>
        );
    }

}

