import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Router, Route, Link } from './components/routing/routing';
import Header from './components/header/header';
import Map from './components/map/map';

import { getDetailsForLyon } from './services/lyon';

function App() {
    useEffect(() => {

    }, []);

    return (
        <>
            <StatusBar backgroundColor="#383838"/>
            <Router>
                <Header/>
                <View style={styles.container}>
                     <Route path="/map/:city" component={Map} />
                </View>

            </Router>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#606060',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#38C8EC",
        padding: 10
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F04812'
    }
});

export default App;
