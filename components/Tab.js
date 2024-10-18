import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Tabs from './Tabs';
 
const Tab = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
 
            <Text
                style={{
                    marginLeft: 23,
                    fontSize: 20,
                    marginTop: 20,
                    fontWeight: 'bold',
                    color: 'green',
                    backgroundColor: 'yellow',
                    marginRight: 30
                }}>
                GeekforGeeks ChatBot App</Text>
 
            <Tabs />
        </SafeAreaView>
    );
};
 
export default Tab;