import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const FAQs = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const options = ["Online Consultation", "Pharmacy", "PHR", "Diagnostics"];

  
  const faqsData = {
    "Online Consultation": [
      { question: "How do I schedule an online consultation?", answer: "You can schedule an online consultation by visiting our website and selecting the 'Online Consultation' option. Follow the prompts to choose a suitable time slot and complete the booking process." },
      { question: "What are the requirements for an online consultation?", answer: "To attend an online consultation, you need a stable internet connection, a compatible device (such as a smartphone or computer), and a quiet environment conducive to communication with the healthcare provider." },
      { question: "How long does an online consultation usually take?", answer: "The duration of an online consultation varies depending on the nature of the medical issue and the healthcare provider's assessment. On average, it may take around 15 to 30 minutes." },
      { question: "Can I schedule an online consultation for someone else?", answer: "Yes, you can schedule an online consultation on behalf of someone else, such as a family member or dependent. During the booking process, you'll have the option to provide their details." },
      { question: "What if I miss my scheduled online consultation?", answer: "If you miss your scheduled online consultation, you may need to reschedule it based on the availability of your healthcare provider. Check your email or contact our support team for assistance." },
      { question: "Are online consultations secure and confidential?", answer: "Yes, we prioritize the security and confidentiality of online consultations. We use encrypted communication channels to ensure that your personal health information remains private and protected." },
    ],
    "Pharmacy": [
      { question: "How can I refill my prescription?", answer: "You can refill your prescription by visiting our pharmacy location or by using our online prescription refill service. Simply provide your prescription details, and we'll take care of the rest." },
      { question: "Do you offer home delivery for medications?", answer: "Yes, we offer home delivery services for medications. You can choose this option during the checkout process when refilling your prescription online." },
      { question: "What payment methods do you accept?", answer: "We accept various payment methods, including credit/debit cards, cash, and mobile payment apps. You can choose the most convenient option for you during the checkout process." },
      { question: "Can I transfer my prescription from another pharmacy?", answer: "Yes, you can transfer your prescription from another pharmacy to ours. Simply provide us with the necessary details, and we'll take care of the transfer process for you." },
      { question: "Do you offer over-the-counter medications?", answer: "Yes, we have a wide range of over-the-counter medications available for purchase. You can visit our pharmacy location to explore our selection." },
      { question: "How can I contact your pharmacy for assistance?", answer: "You can contact our pharmacy team by phone or email for assistance with any questions or concerns you may have. Our contact information is available on our website." },
      { question: "Do you offer medication counseling services?", answer: "Yes, we offer medication counseling services to help you understand your prescriptions better. Feel free to speak with our pharmacists during your visit or contact us to schedule a consultation." },
      { question: "What are your pharmacy hours of operation?", answer: "Our pharmacy operates during regular business hours, which may vary depending on the location. You can check our website or contact us for specific hours of operation." },
    ],
    "PHR": [
      { question: "What is a Personal Health Record (PHR)?", answer: "A Personal Health Record (PHR) is a digital record of your health information, including medical history, medications, allergies, test results, and doctor's notes. It allows you to manage and track your health information in one secure place." },
      { question: "How can I create a PHR?", answer: "You can create a PHR by signing up for our online PHR platform. Once registered, you'll have access to features that allow you to input, update, and manage your health information easily." },
    ],
    "Diagnostics": [
      { question: "What types of diagnostic tests do you offer?", answer: "We offer a wide range of diagnostic tests, including blood tests, urine tests, imaging scans (such as X-rays and MRIs), genetic testing, and more. Our healthcare professionals will recommend the appropriate tests based on your medical needs." },
      { question: "How do I schedule a diagnostic test?", answer: "You can schedule a diagnostic test by contacting our diagnostics department or by visiting our website and using our online scheduling tool. We'll help you choose a convenient time and provide any necessary instructions for preparation." },
      { question: "How long do diagnostic test results take?", answer: "The turnaround time for diagnostic test results varies depending on the type of test and the complexity of the analysis required. Our healthcare team will inform you of the expected timeframe for receiving your results." },
      { question: "Can I access my diagnostic test results online?", answer: "Yes, you can access your diagnostic test results securely through our online patient portal. Once the results are available, you'll receive a notification, and you can log in to view and download them." },
    ],

  };

  const [expandedFAQIndex, setExpandedFAQIndex] = useState(null);

  const renderOption = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.option, selectedOption === index && styles.selectedOption]}
      onPress={() => setSelectedOption(index)}
    >
      <Text style={[styles.optionText, selectedOption === index && styles.selectedOptionText]}>
        {item}
      </Text>
      {selectedOption === index && <View style={styles.selectedOptionUnderline} />}
    </TouchableOpacity>
  );

  const toggleFAQ = (index) => {
    setExpandedFAQIndex(expandedFAQIndex === index ? null : index);
  };

  const renderFAQs = () => {
    if (selectedOption !== null) {
      const selectedOptionName = options[selectedOption];
      const faqs = faqsData[selectedOptionName];
      return faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.questionContainer}>
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <FontAwesome5 name={expandedFAQIndex === index ? "angle-up" : "angle-down"} size={24} color="#189AB4" />
          </TouchableOpacity>
          {expandedFAQIndex === index && <Text style={styles.faqAnswer}>{faq.answer}</Text>}
        </View>
      ));
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.arrow} onPress={() => {}}>
            <FontAwesome5 name="arrow-left" size={24} color="#000000" />
          </TouchableOpacity>
        </View>    */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>How can we help you?</Text>
            <Text style={styles.subtext}>We are here to answer all your Frequently Asked Questions</Text>
          </View>
        </View>
        <View style={styles.centeredContainer}>
          <View style={styles.cardContainer1}>
            <FlatList
              data={options}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.optionsContainer}
              renderItem={renderOption}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.divider} />
            {renderFAQs()}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF7F9',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  arrow: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#05445E',
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
  },
  subtext: {
    fontSize: 16,
    color: '#189AB4',
  },
  cardContainer1: {
    marginTop: 20,
    paddingHorizontal: 4,
    backgroundColor: '#FFF',
    width: '90%', 
    borderRadius: 10,
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  optionText: {
    color: '#757575',
  },
  selectedOption: {
    borderBottomColor: '#189AB4',
  },
  selectedOptionText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginTop: 20,
  },
  selectedOptionUnderline: {
    borderBottomWidth: 2,
    borderBottomColor: '#189AB4',
  },
  faqContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#05445E',
    flex: 1,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#757575',
    marginTop: 10,
  },
});

export default FAQs;