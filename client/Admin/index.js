import React, {useState} from 'react';
import {
  Button,
  FlatList,
  View,
  Text,
} from 'react-native';

export default AdminScreen = ({navigation}) => {
    
    const ticketList = [{
        name: "Heather",
        email: "Heather@email.com",
        message: "Support message",
        attachment: null,
        id: 123,
        status: "New"
    },
    {
        name: "Sam",
        email: "Sam@email.com",
        message: "Support message Two",
        attachment: null,
        id: 456,
        status: "In Progress"
    }]
    const [tickets, setTickets] = useState(ticketList);

    const Ticket = ({id, message, name, status}) => {
        return (
            <View style={{
                height: 100,
                backgroundColor: "#ebebeb",
                borderRadius: 5,
                marginVertical: 10,
                padding: 15,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <View>
                    <Text>Ticket ID: {id}</Text>
                    <Text>Customer: {name}</Text>
                    <Text>Status: {status}</Text>
                </View>
                <View style={{justifyContent: "center"}}>
                    <Button 
                        title="Review"
                        onPress={() =>
                            navigation.navigate('Ticket', {
                                id,
                                message,
                                name,
                                status
                            })}
                    />
                </View>
            </View>
        )
    }

    const handleGetTickets = () => {
        return fetch('http://localhost:3000/tickets')
        .then(response => response.json())
        .then(json => {
            setTickets([...tickets, json]);
        })
        .catch(error => {
          console.error(error);
        });
    }

    return (
        <View style={{ paddingHorizontal: 20,}}>
            <FlatList
                data={tickets}
                renderItem={({item}) => <Ticket {...item}/>}
                keyExtractor={item => item.id}
            />
            <Button
                title="Check New Tickets"
                onPress={() => handleGetTickets()}
            />
        </View>
    )
}
