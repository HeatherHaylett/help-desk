import React, {useState} from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  Pressable,
} from 'react-native';

export default TicketScreen = ({route, navigation}) => { 
    const { id, message, name, status } = route.params;
    const [supportRes, setSupportRes] = useState("");
    const [currentStatus, setCurrentStatus] = useState(status);

    const handleChangeStatus = () => {
        console.log(currentStatus)
    }

    return (
        <View  style={{
            height: "100%",
            padding: 15,
        }}>
            <View style={{paddingBottom: 20}}>
                <Text style={{fontSize: 20}}>Ticket ID: {id}</Text>
                <Text style={{fontSize: 20}}>Customer: {name}</Text>
                <View >
                    <Text style={{fontSize: 20}}>Status: {currentStatus}</Text>
                    <Pressable style={{alignSelf: "flex-start"}} onPress={handleChangeStatus}>
                        <Text style={{
                            fontSize: 12,
                            color: "#027c2a"
                        }}>Change Status</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{height: "40%", justifyContent: "space-evenly"}}>
                <View style={{
                            borderColor: "#027c2a",
                            borderWidth: 1,
                            borderRadius: 5,
                            height: "40%",
                            padding: 10
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
                            padding: 10
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
