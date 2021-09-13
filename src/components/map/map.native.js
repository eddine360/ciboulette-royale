import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, } from "react-native";
import MapView, {} from "react-native-maps";

const ASPECT_RATIO = Dimensions.get('window').width / Dimensions.get('window').height;
const LATITUDE_DELTA = 0.051;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function Map() {
    const [location, setLocation] = useState(null);

    useEffect(() => {

    }, []);

    const onUserLocationChange = coords => {
        console.log(coords);
        setLocation(coords);
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                loadingEnabled
                showsUserLocation
                showsMyLocationButton
                followsUserLocation
                showsIndoorLevelPicker

                onUserLocationChange={e => onUserLocationChange(e.nativeEvent)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
})

export default Map;
