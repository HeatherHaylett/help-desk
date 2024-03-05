import React, {useState} from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
} from 'react-native';

export default TicketScreen = ({route, navigation}) => { 
    const { id, message, name, status } = route.params;
    const [supportRes, setSupportRes] = useState("");
    return (
        <View  style={{
            height: "100%",
            padding: 15,
        }}>
            <View style={{paddingBottom: 20}}>
                <Text style={{fontSize: 20}}>Ticket ID: {id}</Text>
                <Text style={{fontSize: 20}}>Customer: {name}</Text>
                <Text style={{fontSize: 20}}>Status: {status}</Text>
            </View>
            <View style={{height: "40%", justifyContent: "space-evenly"}}>
                <View style={{
                            borderColor: "#027c2a",
                            borderWidth: 1,
                            borderRadius: 5,
                            height: 100,
                        }} >
                    <Text>
                        {message}
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={{
                            borderColor: "#027c2a",
                            borderWidth: 1,
                            borderRadius: 5,
                            height: 100,
                        }}
                        onChangeText={(value) => setSupportRes(value)}
                        value={supportRes}
                        placeholder="Provide a response"
                        keyboardType="default"
                    />
                </View>
                <Button
                    title="Submit Response"
                    onPress={() => console.log(supportRes)}
                />
            </View>
        </View>
    )
}
