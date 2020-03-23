import * as React from 'react';
import { View, StyleSheet, ScrollView, Button, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const defaultSociety = 'VOTRE SOCIÉTË';
const defaultName = 'PRÉNOM NOM';
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
            name: '', 
            function: '',
            mobile: '',
            direct: '',
            email: '',
            adress: '',
            postal: ''
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
                        disabled={true}
                    >
                        <Text style={styles.buttonText}> Valider </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.card, styles.firstCard]}>
                    <TextInput
                        style={styles.titleSociety}
                        // value={this.state.society} 
                        placeholder={defaultSociety}
                        onChangeText={text => this.setState({society: text})}
                        textAlign={'center'}
                    />
                    <TextInput
                        style={styles.name}
                        placeholder={defaultName}
                        onChangeText={text => this.setState({name: text})}
                        textAlign={'center'}
                    />
                    <TextInput 
                        style={styles.function} 
                        placeholder={defaultFunction}
                        onChangeText={text => this.setState({function: text})}
                        textAlign={'center'}
                    />
                </View>
                <View style={[styles.card, styles.bottomCard]}>
                    <View style={styles.inputGroup}>
                        <View style={styles.rowLabelInput}>
                            <Text style={styles.label}>Mobile :</Text>
                            <TextInput 
                                style={styles.normalText} 
                                placeholder={toComplete}
                                placeholderTextColor={'white'}
                                onChangeText={text => this.setState({mobile: text})}
                                textAlign={'left'}
                            />
                        </View>
                        
                        <View style={styles.rowLabelInput}>
                            <Text style={styles.label}>Ligne directe :</Text>
                            <TextInput 
                                style={styles.normalText} 
                                placeholder={toComplete}
                                placeholderTextColor={'white'}
                                onChangeText={text => this.setState({direct: text})}
                                textAlign={'left'}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.inputGroup}>
                        <TextInput 
                            style={styles.normalText} 
                            placeholder={defaultEmail}
                            placeholderTextColor={'white'}
                            onChangeText={text => this.setState({email: text})}
                            textAlign={'left'}
                        />
                    </View>
                    
                    <View style={styles.inputGroup}>
                        <TextInput 
                            style={styles.normalText} 
                            placeholder={defaultAdress}
                            placeholderTextColor={'white'}
                            onChangeText={text => this.setState({adress: text})}
                            textAlign={'left'}
                        />
                        <TextInput 
                            style={styles.normalText} 
                            placeholder={defaulPostal}
                            placeholderTextColor={'white'}
                            onChangeText={text => this.setState({postal: text})}
                            textAlign={'left'}
                        />
                    </View>
                    
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
        marginHorizontal: 30,
        padding: 30,
        flex: 1
    },
    firstCard: {
        flex: 1,
        marginTop: 30,
        marginBottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#f1f4f9',
        justifyContent: 'center',
        alignItems: "center",
    },
    bottomCard: {
        marginBottom: 30,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: '#5eaff4',
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: '#5b5b5b',
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 100
    },
    buttonText: {
        color: '#5b5b5b',
        textTransform: 'uppercase',
        fontSize: 18
    },
    titleSociety: {
        fontSize: 30,
        color: '#2196f3',
        textTransform: 'uppercase'
        
    },
    name: {
        fontSize: 25,
        color: 'gray',
        textTransform: 'uppercase'
    },
    function: {
        color: '#2196f3',
        fontSize: 23
    },
    normalText: {
        color: 'white'
    },
    label: {
        color: 'white',
        marginRight: 20
    },
    rowLabelInput: {flexDirection: 'row', alignItems: 'center'},
    inputGroup: {
        marginBottom: 40
    }
});