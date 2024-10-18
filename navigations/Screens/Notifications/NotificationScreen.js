import * as React from 'react';
import { View, useWindowDimensions, Text, StyleSheet,ScrollView  } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
    <ScrollView  style={{ flex: 1, backgroundColor: '#eaf7f9', paddingHorizontal: 15 }} >
        <View style={{ marginTop: 15 }} >
            <View style={styles.firstRouteCard}>
                <View style={styles.cardHeader}>
                    <Text style={styles.CardText}>You're missing out on HUGE SAVINGS</Text>
                    <Text style={styles.CardTime}>Today, 11:10PM</Text>
                </View>
                <Text style={styles.CardBody}>Buy PLUS membership today and get FLAT 50% OFF on the fees + EXTRA 5% cashback on medicine orders. HURRY! Code:BIG50. *TC</Text>
            </View>
            
        </View>
        <View style={{ marginTop: 10 }} >
            <View style={styles.firstRouteCard}>
                <View style={styles.cardHeader}>
                    <Text style={styles.CardText}>You're missing out on HUGE SAVINGS</Text>
                    <Text style={styles.CardTime}>Today, 11:10PM</Text>
                </View>
                <Text style={styles.CardBody}>Buy PLUS membership today and get FLAT 50% OFF on the fees + EXTRA 5% cashback on medicine orders. HURRY! Code:BIG50. *TC</Text>
            </View>
        </View>
        <View style={{ marginTop: 10 }} >
            <View style={styles.firstRouteCard}>
                <View style={styles.cardHeader}>
                    <Text style={styles.CardText}>You're missing out on HUGE SAVINGS</Text>
                    <Text style={styles.CardTime}>Today, 11:10PM</Text>
                </View>
                <Text style={styles.CardBody}>Buy PLUS membership today and get FLAT 50% OFF on the fees + EXTRA 5% cashback on medicine orders. HURRY! Code:BIG50. *TC</Text>
            </View>
        </View>
        <View style={{ marginTop: 10 }} >
            <View style={styles.firstRouteCard}>
                <View style={styles.cardHeader}>
                    <Text style={styles.CardText}>You're missing out on HUGE SAVINGS</Text>
                    <Text style={styles.CardTime}>Today, 11:10PM</Text>
                </View>
                <Text style={styles.CardBody}>Buy PLUS membership today and get FLAT 50% OFF on the fees + EXTRA 5% cashback on medicine orders. HURRY! Code:BIG50. *TC</Text>
            </View>
        </View>
        <View style={{ marginTop: 10 }} >
            <View style={styles.firstRouteCard}>
                <View style={styles.cardHeader}>
                    <Text style={styles.CardText}>You're missing out on HUGE SAVINGS</Text>
                    <Text style={styles.CardTime}>Today, 11:10PM</Text>
                </View>
                <Text style={styles.CardBody}>Buy PLUS membership today and get FLAT 50% OFF on the fees + EXTRA 5% cashback on medicine orders. HURRY! Code:BIG50. *TC</Text>
            </View>
        </View>
        <View style={{ marginTop: 10 }} >
            <View style={styles.firstRouteCard}>
                <View style={styles.cardHeader}>
                    <Text style={styles.CardText}>You're missing out on HUGE SAVINGS</Text>
                    <Text style={styles.CardTime}>Today, 11:10PM</Text>
                </View>
                <Text style={styles.CardBody}>Buy PLUS membership today and get FLAT 50% OFF on the fees + EXTRA 5% cashback on medicine orders. HURRY! Code:BIG50. *TC</Text>
            </View>
        </View>
    </ScrollView >
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#eaf7f9' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function NotificationScreen() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'All Updates' },
        { key: 'second', title: 'Order Updates' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            indicatorStyle={{ backgroundColor: 'blue', height: 2 }}
            renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#189ab4'}}/>} // <-- add this line
        />
    );
}

const styles = StyleSheet.create({
    firstRouteCard: {
        paddingHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 5,
        paddingVertical:15,
    },
    cardHeader: {
        flexDirection: 'row',
        marginBottom:10
    },
    CardText: {
        flex: 2,
        fontSize: 16,
        fontWeight: "600",
        
        letterSpacing: 0.3,
    },
    CardTime: {
        fontSize:12,
        marginTop: 10,
        color: "#888",
    },
    CardBody: {
        fontSize: 13,
        color: "#888",
        lineHeight: 15,
        letterSpacing: 0.7,
    }
})