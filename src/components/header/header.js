import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { Link } from '../routing/routing';
import MenuDrawer from 'react-native-side-drawer'

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
          open : false,
          textBurger: "Open",
        }
    }

    toggleOpen = () => {
      this.setState({ open: !this.state.open });
      if(this.state.open === false) {
        this.setState({textBurger: "Close"})
      } else {
        this.setState({textBurger: "Open"})
      }
    };

    drawerContent = () => {
      return (
        <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
          <Text>Close</Text>
        </TouchableOpacity>
      );
    };

    render() {
        return (
          <>
                <View style={styles.navBarBg}>
                      <TouchableOpacity onPress={this.toggleOpen} style={styles.beginEndNavBar}>
                          <Text style={styles.textParam}>{this.state.textBurger}</Text>
                      </TouchableOpacity>
                    <Link to={'/map'}><Text style={{flex:4}}>Map</Text></Link>
                    <View style={styles.beginEndNavBar}>
                      <Text style={styles.textParam}>logo ?</Text>
                    </View>

                </View>
                <View style={styles.container}>
                    <MenuDrawer
                            open={this.state.open}
                            drawerContent={this.drawerContent()}
                            drawerPercentage={25}
                            animationTime={250}
                            overlay={true}
                            opacity={0.4}
                            >

                    </MenuDrawer>
                </View>
          </>
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
    zIndex: 2,
    position: "relative"
  },
  beginEndNavBar: {
    flex:1,
    alignContent: 'center',
    textAlign:'center',
    justifyContent:'center',
    alignItems: 'center',
    padding: 5
  },
  textParam: {
    ...textColor,
    fontWeight: 'bold',
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",

    zIndex:1,
    paddingTop: 70,
},
animatedBox: {
    flex: 1,
    backgroundColor: "#383838",
    padding: 70
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
