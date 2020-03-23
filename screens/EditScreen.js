import * as React from 'react';
import { View, StyleSheet, ScrollView, Button, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const defaultSociety = 'Votre société';
const defaultName = 'prénom nom';
const defaultFunction = 'fonction';
const toComplete = 'à compléter';
const defaultEmail = 'votre email';
const defaultAdress = 'adresse';
const defaulPostal = 'code postal ville';

export default class EditScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            society: '', 
            name: defaultName, 
            function: defaultFunction,
            mobile: toComplete,
            direct: toComplete,
            email: defaultEmail,
            adress: defaultAdress,
            postal: defaulPostal
        };
    }

    _onFocus() {

    }


    render() {

        return (
            
            <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.topCard}>
                    {/* <Button style={styles.validateButton}
                        title="Valider"
                        // onPress={() => this.setState({step: 2})}
                        color={"#ff5252"}
                    /> */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text> Valider </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.card]}>
                    <TextInput
                        style={styles.titleSociety}
                        // value={this.state.society} 
                        placeholder={defaultSociety}
                        onChangeText={text => this.setState({society: text})}
                        // onFocus={this._onFocus}
                    />
                    {/* <TextInput
                        style={styles.name}
                        value={this.state.name}
                        onKeyPress={text => this.setState({name: text})}
                    /> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    contentContainer: {
        paddingTop: 30,
        color: '#FFFFFF'
    },
    topCard: {
        marginTop: 40,
    },
    card: {
        backgroundColor: '#f1f4f9',
        height: '80%',
        margin: 30,
        borderRadius: 40,
        // overflow: "hidden"
        padding: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    button: {
        backgroundColor: '#ff5252',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 100
    },
    titleSociety: {
        fontSize: 30,
        color: '#09f',
        textTransform: 'uppercase'
        
    },
    name: {
        fontSize: 25,
        color: 'gray',
        textTransform: 'uppercase'
    }
});