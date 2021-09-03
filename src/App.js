import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, Link } from './components/routing/routing';
import Header from './components/header/header';

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            // Variables d'etats ici
        }
    }

    render() {

        return (
            <>
                <StatusBar/>
                <Header/>
                <Router>
                    <View style={styles.container}>
                        <Text>Automatic pull request working</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
