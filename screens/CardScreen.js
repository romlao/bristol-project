import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { window } from 'react-native';
import * as WebBrowser from 'expo-web-browser';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    card: {
        backgroundColor: '#15CCC0',
        marginTop: '20%',
        marginBottom: '50%',
        width: '80%',
        height: 200,
        marginLeft: '10%',
        padding: 30
    },
    front: {},
    side: {},
    name: {
        color: '#3B3B3B',
        marginBottom: 0,
        textTransform: 'uppercase'
    },
    info: {
        paddingTop: 20,
    },

    property: {
        color: '#FFFFFF',
    },
    title: {
        color: '#FFFFFF'
    }

})

export default function CardScreen () {
    return (
        <View style={styles.container}>
            <View style={styles.card}>

                {/* <View style={[styles.front, styles.side]}>
                    <Text h1>Romain Laodicina</Text>
                </View> */}

                <View style={[styles.back, styles.side]}>
                    <Text h3 style={styles.name}>
                        Romain Laodicina
                    </Text>
                    <Text style={styles.title}>Ingénieur, Entrepreneur</Text>
                    <View style={styles.info}>
                        
                        <Text>
                            <Text style={styles.property}>Email:</Text>
                            <Text> romain.laodicina@gmail.com </Text>
                        </Text>
                        <Text>
                            <Text style={styles.property}>Telephone:</Text>
                            <Text> 0660224408 </Text>
                        </Text>
                        <Text onPress={() => WebBrowser.openBrowserAsync('https://www.linkedin.com/in/romain-laodicina-75b9674a')}>
                            <Text style={styles.property}>Linkedin:</Text>
                            <Text> https://www.linkedin.com/in/romain-laodicina-75b9674a </Text>
                        </Text>
                        <Text onPress={() => WebBrowser.openBrowserAsync('https://github.com/romlao')}>
                            <Text style={styles.property}>Github:</Text>
                            <Text> https://github.com/romlao </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

CardScreen.navigationOptions = {
    header: null,
};