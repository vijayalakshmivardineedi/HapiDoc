import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"; // Import Alert
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const FirstRoute = () => {
    const [isSkipped, setIsSkipped] = useState(false);
    const [isTaken, setIsTaken] = useState(false);
    const [isReminder, setIsReminder] = useState(false);
    const [showButtons, setShowButtons] = useState(true);

    // Function to handle setting reminder for 15 minutes later
    const setReminder = () => {
        setIsReminder(true);
        setShowButtons(false);
        setTimeout(() => {
            Alert.alert("Reminder", "Time to take your medicine!");
        }, 1 * 60 * 1000); // 1 minute for demonstration, change to 15 * 60 * 1000 for 15 minutes
    };

    return (
        <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#eaf7f9" }}>
            <View style={{ borderWidth: 1, borderColor: "#189ab4", backgroundColor: "#fff", borderRadius: 8 }}>
                <View style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 10, }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 14, marginBottom: 3 }}>Today</Text>
                            <Text style={{ fontSize: 18 }}>11:30 am</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, marginBottom: 3, textAlign: "right", marginRight: 3 }}>with</Text>
                            <View style={{ backgroundColor: "#d1f1f4", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}>
                                <Text style={{ fontSize: 18, fontStyle: 'italic' }}>Lunch</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: "#189ab4" }}>DOLO 650 Tablet</Text>
                    {isSkipped && (
                        <View style={{ alignItems: "flex-end", paddingVertical: 10 }}>
                            <View style={{ backgroundColor: "#d1f1f4", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}>
                                <Text style={{ fontSize: 18, fontStyle: "italic" }}>All Skipped</Text>
                            </View>
                        </View>
                    )}
                    {isTaken && (
                        <View style={{ alignItems: "flex-end", paddingVertical: 10 }}>
                            <View style={{ backgroundColor: "#d1f1f4", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}>
                                <Text style={{ fontSize: 18, fontStyle: "italic" }}>All Taken</Text>
                            </View>
                        </View>
                    )}
                    {isReminder && (
                        <View style={{ alignItems: "flex-end", paddingVertical: 10 }}>
                            <View style={{ backgroundColor: "#d1f1f4", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}>
                                <Text style={{ fontSize: 18, fontStyle: "italic" }}>Snooze to 10 mins</Text>
                            </View>
                        </View>
                    )}
                </View>
                {showButtons && !isSkipped && !isTaken && (
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#189ab4', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <TouchableOpacity onPress={() => setIsTaken(true)} style={{ marginLeft: 30 }}>
                            <Text style={{ color: "#189ab4", fontSize: 18, fontWeight: "600" }}>Take</Text>
                        </TouchableOpacity>
                        <View style={{ borderRightWidth: 1, borderRightColor: "#189ab4" }} />
                        <TouchableOpacity onPress={setReminder}>
                            <Text style={{ color: "#189ab4", fontSize: 18, fontWeight: "600" }}>Later</Text>
                        </TouchableOpacity>
                        <View style={{ borderRightWidth: 1, borderRightColor: "#189ab4" }} />
                        <TouchableOpacity onPress={() => setIsSkipped(true)} style={{ marginRight: 30 }}>
                            <Text style={{ color: "#189ab4", fontSize: 18, fontWeight: "600" }}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const SecondRoute = () => (
    <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#eaf7f9" }}>
        <View style={{ borderWidth: 1, borderColor: "#189ab4", backgroundColor: "#fff", borderRadius: 8 }}>
            <View style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 10, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 14, marginBottom: 3, }}>21-03-2024</Text>
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>11:30 am</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginBottom: 3, textAlign: "right", marginRight: 3 }}>with</Text>
                        <View style={{ backgroundColor: "#d1f1f4", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}>
                            <Text style={{ fontSize: 18, fontStyle: 'italic' }}>Lunch</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 18, fontWeight: '600', color: "#189ab4" }}>DOLO 650 Tablet</Text>
                <View style={{ alignItems: "flex-end", paddingVertical: 10 }}>
                    <View style={{ backgroundColor: "#d1f1f4", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 5, paddingStart: 10 }}>
                        <Text style={{ fontSize: 18, fontStyle: "italic", color: "red" }}>Missed</Text>
                    </View>
                </View>
            </View>

        </View>
    </View>
);

const PillReminder = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Timeline' },
        { key: 'second', title: 'Missed' },
    ]);
    const navigation = useNavigation();
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <View style={{ flex: 1 }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                indicatorStyle={{ backgroundColor: 'blue', height: 2 }}
                renderTabBar={props => <TabBar {...props} style={{ backgroundColor: '#189ab4' }} />}
                initialLayout={{ width: 300 }}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Set Reminder")}>
                <AntDesign name="pluscircle" size={50} color="#189ab4" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
});

export default PillReminder;

