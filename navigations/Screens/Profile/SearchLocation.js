import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchLocation = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);
const navigation =useNavigation();
    const onChangeSearch = (query) => {
        setSearchQuery(query);
        if (query.length > 0) {
            getLocationsFromAPI(query);
        } else {
            setLocations([]);
        }
    };

    const getLocationsFromAPI = (query) => {
        const sampleLocations = [
            "Delhi",
            "Mumbai",
            "Bangalore",
            "Chennai",
            "Kolkata"
        ];
        setLocations(sampleLocations.filter(location => location.toLowerCase().includes(query.toLowerCase())));
    };

    const renderLocationItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleLocationPress(item)}>
            <Text style={styles.locationItem}>{item}</Text>
        </TouchableOpacity>
    );

    const handleLocationPress = (location) => {
        setSearchQuery(location);
        setSelectedLocation(location);
        setLocations([]); // Clear the list after selection
        updateRecentSearches(location);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setSelectedLocation('');
        setLocations([]);
    };

    const updateRecentSearches = (location) => {
        // Add the new search to the recent searches list
        setRecentSearches(prevSearches => [location, ...prevSearches]);
    };
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back
    };
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <TouchableOpacity onPress={handleBackPress}>
                <Ionicons
                    name="arrow-back"
                    size={28}
                    color="#189AB4"
                    style={styles.arrow}
                />
                </TouchableOpacity>
                
                <Searchbar
                    placeholder="Search..."
                    style={styles.searchBar}
                    iconColor="#189AB4"
                    onChangeText={onChangeSearch}
                    onIconPress={handleClearSearch} // Clear search bar when clear icon is pressed
                    value={selectedLocation !== '' ? selectedLocation : searchQuery} // Display selected location if not empty
                />
            </View>
            <View style={styles.contentContainer}>
                <FlatList
                    data={locations}
                    renderItem={renderLocationItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            {recentSearches.length > 0 && (
                <View style={styles.recentSearchContainer}>
                    <Text style={styles.recentTitle}>Recent Searches</Text>
                    {recentSearches.map((search, index) => (
                        <TouchableOpacity key={index} onPress={() => handleLocationPress(search)}>
                            <Text style={styles.recentItem}>{search}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default SearchLocation;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#FFF",
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrow: {
        marginHorizontal: 8,
        marginBottom: 10,
    },
    searchBar: {
        flex: 1,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#189AB4",
    },

    recentSearchContainer: {
        marginTop: 10,
    },
    locationItem: {
        padding: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
    },
    recentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    },
    recentItem: {
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
    },
});
