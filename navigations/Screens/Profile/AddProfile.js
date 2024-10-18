import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
// import { Picker } from '@react-native-picker/picker';

const AddProfile = () => {
    const [gender, setGender] = useState('male');
    const [selectedGender, setSelectedGender] = useState(null);

    const handleSelectGender = (gender) => {
        setSelectedGender(gender);
    };
    return (
        <View style={styles.Container}>
        <View style={styles.MainContainer}>
            <Text style={styles.headerText}>Add Member</Text>
            <View style={{backgroundColor:"#fff",padding:15,borderRadius:8}}>
                <View style={styles.row}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput style={styles.input} placeholder="First Name" />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Second Name</Text>
                    <TextInput style={styles.input} placeholder="Second Name" />
                </View>
                <Text style={styles.label}>Gender</Text>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        style={[
                            styles.gender,
                            selectedGender === 'male' && {
                                backgroundColor: '#189ab4',
                            },
                        ]}
                        onPress={() => handleSelectGender('male')}>
                        <Text style={{ color: selectedGender === 'male' ? '#fff' : '#189ab4' }}>Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.gender,
                            selectedGender === 'female' && {
                                backgroundColor: '#189ab4',
                            },
                        ]}
                        onPress={() => handleSelectGender('female')}>
                        <Text style={{ color: selectedGender === 'female' ? '#fff' : '#189ab4' }}>Female</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.gender,
                            selectedGender === 'other' && {
                                backgroundColor: '#189ab4',
                            },
                        ]}
                        onPress={() => handleSelectGender('other')}>
                        <Text style={{ color: selectedGender === 'other' ? '#fff' : '#189ab4' }}>Other</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Relation</Text>
                    <TextInput placeholder="Relation" style={styles.input} />
                </View>
                <View style={styles.container}>
                    <View style={styles.twoFields}>
                        <View style={styles.field}>
                            <Text style={styles.label}>Age</Text>
                            <TextInput placeholder="Age" style={styles.input} />
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Blood Group</Text>
                            <TextInput placeholder="Blood Group" style={styles.input} />
                        </View>

                    </View>

                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder="Email" style={styles.input} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput placeholder="Phone Number" style={styles.input} />
                </View>
            </View>
         
        </View>
        <View style={styles.footerSections}>
                <TouchableOpacity style={{width:'90%'}}>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>SAVE</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default AddProfile
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#eaf7f9',
       
    },
    MainContainer: {
        
        paddingHorizontal: 10
    },
    headerText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
    }, row: {
        marginBottom: 10
    },
    label: {
        fontSize: 15,
        fontWeight: '500',
        color: '#189ab4',
        marginLeft: 5,
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: '100%',
        height: 40
    },
    container: {
        flexDirection: 'row',
    },
    twoFields: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    field: {
        flex: 1,
        marginRight: 10,
    },

    picker: {
        width: '100%',
    },
    gender: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#189ab4',
    }, footerSections: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
   
    footer: {
        backgroundColor: '#189ab4', // Example background color for the footer
        padding: 10,
        borderRadius: 8,
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff', // Example text color for the footer
        textAlign: 'center', // Example text alignment for the footer
    },

})