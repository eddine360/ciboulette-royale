import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Link } from '../routing/routing';


const menuList = props => {

    const [state, setState] = React.useState ({

    })

    const renderItemList = ({item}) => {
        const fave = require("../../../assets/header/fave.png");

        return(
            <>
                {/* {console.log(item.ville)} */}
                <View style={styles.cardList}>
                    <View style={styles.villeName}>
                        <Text style={styles.textNomVille}>{item.ville}</Text>

                    </View>
                    <View style={styles.containerFave}>
                        <Image style={styles.faveIcon} source={fave}/>
                    </View>

                </View>
            </>

        );
    }

    return(
        <>
            <FlatList
                data={[
                    {ville: "Lyon"},
                    {ville: "Paris"},
                    {ville: "Marseille"},
                    {ville: "Dole"}
                ]}
                renderItem={renderItemList}
                style={styles.container}/>
        </>
    );


}

export default menuList;


const textColor = { color: "white" }


const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFill,
        flex:1,
        alignContent: "center",
    },
    textParam: {
        ...textColor,
        fontWeight: "bold"
    },
    cardList: {
        flex:1,
        height: 100,
        borderWidth: 2,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign:"center",
        alignContent:"center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor:"#383838"
    },
    villeName: {
        flex:1,
        marginLeft: 15
    },
    textNomVille: {
        ...textColor,
        fontSize: 20,
        fontWeight: "bold"
    },
    containerFave: {
        justifyContent: "flex-end",
        marginRight: 20
    },
    faveIcon: {
        height: 50,
        width: 50,
        tintColor: "grey"
    }

});
