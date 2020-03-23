import * as React from 'react';
import { AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    // StatusBarIOS,
    PixelRatio,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Picker,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';


export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props)
        // StatusBarIOS.setHidden(true);

        this.state = { pays: "france", display: false, step: 1, numero: '', code: '' }

    }

    

    render() {

        return (
            
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.card}>
                    <Image
                        style={{height: 200, width: '100%'}}
                        source={require('../assets/images/swowp_logo_card.png')}
                    />
                </View>

                <View>
                    {
                        this.state.step == 1 &&
                        <View>
                            <View style={[styles.mainText, styles.card]}>
                                <Text style={styles.explain}>Saisissez votre numero de téléphone pour créer un compte ou récupérer vos données sur cet appareil.</Text>
                            </View>
                            <View style={[styles.card, styles.inputGroup]}>
                                <View style={[styles.input]}>
                                    <Text style={styles.inputLabel}>Telephone</Text>
                                    <TextInput
                                        style={styles.inputPhone}
                                        keyboardType={'phone-pad'}
                                        onEndEditing={() => {this.setState({display: true})}}
                                        onChangeText={number => this.setState({numero: number})}
                                    />
                                </View>
                                <View style={[styles.input]}>
                                    <Text style={styles.inputLabel}>Pays</Text>
                                    <Picker
                                        style={styles.picker}
                                        enabled={false}
                                        selectedValue={this.state.pays}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({pays: itemValue})
                                        }>
                                        <Picker.Item label="France" value="france" />
                                    </Picker>
                                </View>
                                {
                                    this.state.display && 
                                    <View style={{paddingHorizontal: 50, paddingVertical: 10}}>
                                        <Button
                                            title="Recevoir le code"
                                            onPress={() => this.setState({step: 2})}
                                            color={"#ff5252"}
                                        />
                                    </View>
                                }
                            </View>
                        </View>
                        
                    }
                    {
                        this.state.step == 2 && 
                        <View>
                            <View style={[styles.mainText, styles.card]}>
                                <Text style={styles.explain}>Un code a été envoyé au :</Text>
                                <Text style={styles.explain}>{this.state.numero}</Text>
                            </View> 

                            <View style={[styles.card, styles.inputGroup]}>
                                <Text style={styles.explain}>Merci de le saisir ci dessous</Text>
                                <View style={[ styles.card, {paddingHorizontal: 50, paddingVertical: 10}]}>
                                    <View style={{alignItems: 'center'}}>
                                        <SmoothPinCodeInput
                                            cellStyle={{
                                                borderBottomWidth: 2,
                                                borderColor: 'gray',
                                            }}
                                            cellStyleFocused={{
                                                borderColor: 'black',
                                            }}
                                            codeLength={6}
                                            value={this.state.code}
                                            onTextChange={code => this.setState({ code: code })}
                                        />
                                    </View>
                                    
                                    <TouchableOpacity style={{marginTop: 20}}>
                                        <Text style={styles.underLineText}>Je n'ai pas recu le code</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
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
    card: {
        backgroundColor: '#FFFFFF',
        // height: 200,
        margin: 15,
        borderRadius: 20,
        overflow: "hidden"
    },
    mainText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingVertical: 20
    },
    explain: {
        textAlign: "center",
        alignContent: "center",
        fontSize: 26
    },
    inputGroup: {
        flex: 1,
        padding: 20,
    },
    input: {
        flex: 1,
        margin: 10,
        paddingTop: 3,
        paddingLeft: 8,
        backgroundColor: '#ededed',
        borderBottomWidth: 1,
    },
    inputLabel: {
        color: '#aaaaaa',
        margin: 0
    },
    inputPhone: {
        paddingLeft: 8
    },
    picker: {
        // backgroundColor: '#03f',
        height: 30
    },  
    data: {
        padding: 15,
        marginTop: 10,
        backgroundColor: '#ddd',
        borderColor: '#888',
        borderWidth: 1 / PixelRatio.get(),
        color: '#777'
    },
    underLineText: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#ff5252',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});