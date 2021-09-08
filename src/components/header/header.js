import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { Link } from '../routing/routing';
import MenuDrawer from 'react-native-side-drawer'
import Hamburger from 'react-native-animated-hamburger';

// export default Header = props => {
//   const [open, setOpen] = React.useState(false);
//   const [state, setState] = React.useState({
//     open: true,
//     textBurger: "Open"
//   });

//   const a = { x: 1, y: 2 };
//   const b = { ...a, z: 3 };
//   // b = { x: 1, y: 2, z: 3}

//   const c = [1, 2];
//   const d = [...c, 3]

//   return (
//     <View>
//       <TouchableOpacity onPress={() => setState({ open: false })}></TouchableOpacity>
//     </View>
//   )
// }


// const Header = props => {
//   const [state, setState] = React.useState({
//     open: true,
//     textBurger: "Open"
//   });  

class Header extends React.Component {
    constructor() {
      super()
      this.state = {
        open: false,
        textBurger: "Open"
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
  
    //Remplacer les TouchableOpacity par des Links de Router si ils doivent rediriger sur d'autres pages
    // <Link to="/" component={TouchableOpacity}>  *** Text / Image ***  </Link>
    drawerContent = () => {
      return (
        <View style={styles.animatedBox}>
          <Link to='/' component={TouchableOpacity} style={styles.ButtonStyleTop}>
            <Text style={styles.textParam}>Home</Text>
          </Link>
          <TouchableOpacity onPress={this.toggleOpen} style={styles.ButtonStyleBottom}>
            <Text style={styles.textParam}>Faves</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleOpen} style={styles.ButtonStyleBottom}>
            <Text style={styles.textParam}>Settings</Text>
          </TouchableOpacity>
        </View>
      );
    };
  render() {
    return (
      <>
            <View style={styles.navBarBg}>
              <View style={styles.beginEndNavBar}>
                <Hamburger style="cross" 
                           active={this.state.active}
                           onPress={() => this.toggleOpen}
                           underlayColor="transparent"/>
              </View>
                  <TouchableOpacity onPress={this.toggleOpen} style={styles.beginEndNavBar}>
                      <Text style={styles.textParam}>{this.state.textBurger}</Text>
                  </TouchableOpacity>          
                <Text style={{flex:4}}></Text>
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

export default Header;


const textColor = {
  color:'white'
}

const ButtonCSS = {
  height:100,
  paddingTop:20,
  paddingBottom:20, 
  alignContent:'center', 
  alignItems:'center',
  textAlign: 'center',
  justifyContent: 'center',
  borderStyle:'solid', 
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
    fontWeight: 'bold'
  },
  container: {
    flex: 6,
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    zIndex:1,
    paddingTop: 70,
},
animatedBox: { 
    flex: 1,
    // backgroundColor: "#383838",
    backgroundColor: "red",
    paddingTop: 70,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonStyleTop: {
    ...ButtonCSS,
    borderTopWidth: 2,
    borderBottomWidth:2,
  },
  ButtonStyleBottom: {
    ...ButtonCSS,
    borderBottomWidth: 2
  }
});