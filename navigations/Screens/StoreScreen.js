import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

export default function StoreScreen({ navigation }) {
    const handleCardPress = () => {
        navigation.navigate('ProductList');
      };
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Feather name="arrow-left" size={24} color="black" marginTop={5} />
                <Text style={{ fontSize: 24, marginLeft: 10 }}>Store</Text>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <AntDesign name="shoppingcart" size={24} color="black" style={styles.icon} />
                </View>
            </View> */}
            <View style={styles.content}>
                <Searchbar
                    placeholder="Search..."
                    style={styles.searchBar}
                    iconColor="#189AB4"
                />
                <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={styles.category1}>Categories</Text>
                        <View style={styles.cardContainer}>
                            <Card style={styles.card} elevation={0}>
                                <Card.Cover style={styles.cardCover} source={{ uri: 'https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443647_skinn.webp?format=auto' }} />
                            </Card>
                            <Card style={styles.card} elevation={0}>
                                <Card.Cover style={styles.cardCover} source={{ uri: 'https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443670_hairr.webp?format=auto' }} />
                            </Card>
                           
                            <Card style={styles.card} elevation={0}>
                                <Card.Cover style={styles.cardCover} source={{ uri: 'https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443695_orall.webp?format=auto' }} />
                            </Card>
                            <Card style={styles.card} elevation={0}>
                                <Card.Cover style={styles.cardCover} source={{ uri: 'https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443705_elderly.webp?format=auto' }} />
                            </Card>
                            <Card style={styles.card} elevation={0}>
                                <Card.Cover style={styles.cardCover} source={{ uri: 'https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443714_baby.webp?format=auto' }} />
                            </Card>
                            <Card style={styles.card} elevation={0}>
                                <Card.Cover style={styles.cardCover} source={{ uri: 'https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443746_pett.webp?format=auto' }} />
                            </Card>
                            <Card style={styles.card} elevation={0}>
                                <Card.Cover style={styles.cardCover} source={{ uri: 'https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443735_menn.webp?format=auto' }} />
                            </Card>
                            <Card style={styles.card} elevation={0}>
                                <Card.Cover style={styles.cardCover} source={{ uri: 'https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443722_womenn.webp?format=auto' }} />
                            </Card>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.category1}>Health Concerns</Text>
                        <View style={styles.cardContainer}>
                            <Card style={styles.card1} elevation={0}>
                                <Card.Cover style={styles.cardCover1} source={{ uri: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0' }} />
                            </Card>
                            <Card style={styles.card1} elevation={0}>
                                <Card.Cover style={styles.cardCover1} source={{ uri: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0' }} />
                            </Card>
                            <Card style={styles.card1} elevation={0}>
                                <Card.Cover style={styles.cardCover1} source={{ uri: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0' }} />
                            </Card>
                            <Card style={styles.card1} elevation={0}>
                                <Card.Cover style={styles.cardCover1} source={{ uri: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=256x0' }} />
                            </Card>
                            <Card style={styles.card1} elevation={0}>
                                <Card.Cover style={styles.cardCover1} source={{ uri: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0' }} />
                            </Card>
                            <Card style={styles.card1} elevation={0} onPress={handleCardPress}>
                                <Card.Cover style={styles.cardCover1} source={{ uri: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0' }} />
                            </Card>
                            <Card style={styles.card1} elevation={0}>
                                <Card.Cover style={styles.cardCover1} source={{ uri: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0' }} />
                            </Card>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingLeft: 10,
        paddingRight: 16,
        paddingBottom: 10,
        borderBottomWidth: 1,
        marginTop: 20,
        borderBottomColor: '#ddd',
        justifyContent: 'space-between',
    },
    icon: {
        marginTop: 5,
    },
    content: {
        flex: 1,marginLeft:8, marginRight:8,
    },
    searchBar: {
        marginBottom: 10,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#189AB4',
    },
    searchInput: {
        color: '#189AB4',
    },
    category1: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // Align cards with space between them
        flexWrap: 'wrap',
    },
    card: {
        width: '30%', // Adjust the width as needed for 3 cards per row
        margin: 4,
    },
    cardCover: {
        height: 105,
        width: '100%',
    },
    card1: {
        width: '30%', // Adjust the width as needed for 3 cards per row
        margin: 4,
    },
    cardCover1: {
        height: 100,
        // Adjust the height as needed for each card
    },
});
