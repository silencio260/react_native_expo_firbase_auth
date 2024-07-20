import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements'
import axios from 'axios'

class SignInForm extends Component {
    state = {phone: '', code: ''}

    handleSubmit = async () => {
        try{
            let res = await axios.post('', {
                phone: this.state.phone,
                code: this.state.code
            })

            console.log(res)

        }catch(err){
            console.log(err)
        }
    }

    render() {
        return (
            <View>
                <View style={{marginBottom: 10}}>
                   <Input 
                        label={'Enter Phone Number'}
                        value={this.state.phone}
                        onChangeText={phone => this.setState({phone})}
                   />
                    <Input 
                        label={'Enter Code'}
                        value={this.state.code}
                        onChangeText={code => this.setState({code})}
                   />
                </View>

               <Button 
                    title='Submit' 
                    onPress={this.handleSubmit}
                />
            </View>
        )
    }
}

export default SignInForm