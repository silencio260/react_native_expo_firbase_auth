import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements'
import axios from 'axios'

class SignUpForm extends Component {
    state = {phone: ''}

    handleSubmit = async () => {
        try{
            await axios.post('', {phone: this.state.phone})
            await axios.post('', {phone: this.state.phone})

        }catch(err){
            console.log(err)
        }


  
    }

    render() {
        return (
            <View>
                <View style={{marginBottom: 10}}>
                   <Input 
                        label={'Enter phone number'}
                        value={this.state.phone}
                        onChangeText={phone => this.setState({phone})}
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

export default SignUpForm