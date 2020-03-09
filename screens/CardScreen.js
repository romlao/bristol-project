import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { window } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        flex: 1,
        backgroundColor: 'steelblue',
        marginTop: '20%',
        marginBottom: '50%',
        width: '80%',
        marginLeft: '10%'
    }
})

export default function CardScreen () {
    return (
        <View style={styles.container}>
            <View style={styles.card} />
        </View>
    );
}

CardScreen.navigationOptions = {
    header: null,
};