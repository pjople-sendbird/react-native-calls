/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
} from 'react-native';

import {
    Header,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

    render() {
        return (
            <SafeAreaView>
                <StatusBar />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    >
                    <Header />
                    <View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
};


