import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ChildComponent extends Component {
    render() {
        return (
            <View style={{ flex: 3 }}>
                <Text>Child Compoonents</Text>
            </View>
        )
    }
}