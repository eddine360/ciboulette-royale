import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Router, Route, Link } from './components/routing/routing';
import Header from './components/header/header';

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }


    render() {

        return (
            <>
                <StatusBar backgroundColor="#383838"/>
                <Router>
                    <Header/>
                    <View style={styles.container}>

                        <Text style={{color: 'white', fontWeight:'bold'}}>Automatic pull request working</Text>
                        {/* <Route exact path="/" component={} */}
                    </View>

                </Router>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#606060',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
        elevation:0
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#38C8EC",
        padding: 10,
      },
      body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F04812'
      }
});
