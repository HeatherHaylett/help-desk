import React, {useState} from 'react';
import {
  Button,
  View,
  TextInput
} from 'react-native';

export default CustomerScreen = ({navigation}) => {
    const [form, setForm] = useState({});
    console.log(form)
    const handleSubmitForm = () => {
        return fetch('http://localhost:3000/support', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...form
            }),
          })
    }

    return (
        <View style={{height: "100%", justifyContent: "space-between", borderColor: "pink", borderWidth: 1}}>
            <View style={{
                paddingHorizontal: 20,
                justifyContent: "space-evenly",
                height: "50%",
                borderColor: "purple", borderWidth: 1
            }}>
                <TextInput
                    onChangeText={(value) => setForm({...form, name: value})}
                    style={{
                        borderColor: "#027c2a",
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 10
                    }}
                    value={form.name}
                    placeholder="Name"
                    keyboardType="default"
                />            
                <TextInput
                    onChangeText={(value) => setForm({...form, email: value})}
                    style={{
                        borderColor: "#027c2a",
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 10
                    }}
                    value={form.email}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    onChangeText={(value) => setForm({...form, comment: value})}
                    style={{
                        borderColor: "#027c2a",
                        borderWidth: 1,
                        borderRadius: 5,
                        height: 100,
                        paddingTop: 10,
                        paddingLeft: 10,
                    }}
                    value={form.comment}
                    placeholder="Explain your problem"
                    keyboardType="default"
                />
                <Button 
                    title="Add Attachment"
                />
                <Button 
                    title="Submit Request"
                    onPress={() => handleSubmitForm()}
                />
            </View>
        </View>
    )
}
