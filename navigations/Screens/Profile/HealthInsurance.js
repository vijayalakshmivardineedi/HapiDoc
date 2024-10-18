import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const InsuranceCard = ({ imageUrl, title, subTitle }) => {
  const handleLinkPress = () => {
   Linking.openURL(subTitle).catch((err) => console.error('An error occurred', err));
  };

  return (
    <TouchableOpacity onPress={handleLinkPress}>
      <View style={styles.cardContainer}>
        <Image source={imageUrl} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HealthInsurance = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.topCardContainer}>
          {/* Card image at the top */}
          <Image
            source={require('../../../assets/prioritize_your_health_720.png')}
            style={styles.topCardImage}
          />
        </View>
        <View style={styles.headerContainer}>
          {/* Header */}
          <Text style={styles.headerText}>Family Health Insurance</Text>
        </View>
        <View style={styles.insuranceCardContainer}>
          {/* First Insurance Card */}
          <InsuranceCard
            imageUrl={require('../../../assets/apolloinsurance.jpg')}
            title="Apollo Health Insurance"
            subTitle="https://www.apollo247.com/insurance"
          />
          {/* Second Insurance Card  */}
          <InsuranceCard
            imageUrl={require('../../../assets/hdfc_720.jpg')}
            title="HDFC Health-Insurance"
            subTitle="https://www.hdfcergo.com/health-insurance"
          />
          {/* Third Insurance Card */}
          <InsuranceCard
           imageUrl={require('../../../assets/star_480.png')}
            title="Star Health Insurance"
            subTitle="https://www.starhealth.in/"
          />
          {/* Fourth Insurance Card */}
          <InsuranceCard
            imageUrl={require('../../../assets/manipal_360.jpg')}
            title="Manipal Health Insurance"
            subTitle="https://www.manipalcigna.com/prohealthprime-campaign?"
          />
          {/* Add more InsuranceCard components here */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF7F9',
  },
  topCardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  topCardImage: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
  },
  headerContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#189AB4',
  },
  insuranceCardContainer: {
    marginBottom: 20,
  },
  cardContainer: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  cardImage: {
    width: 350,
    height: 180,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HealthInsurance;