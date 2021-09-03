import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
                <View style={styles.navBarBg}>
                    <View style={styles.beginEndNavBar}>
                      <Text style={styles.textParam}>Menu Burger</Text>
                    </View>
                    <Text style={{flex:4}}></Text>
                    <View style={styles.beginEndNavBar}>
                      <Text style={styles.textParam}>logo ?</Text>
                    </View>

                </View>

        );
    }


}


const textColor = {
  color:'white'
}

const styles = StyleSheet.create({
  navBarBg: {
    flexDirection: 'row',
    backgroundColor: '#383838',
    justifyContent: 'space-between',
    height: 70,
  },
  beginEndNavBar: {
    flex:1,
    alignContent: 'center',
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
    margin: 5
  },
  textParam: {
    ...textColor,
    fontWeight: 'bold'
  }
});