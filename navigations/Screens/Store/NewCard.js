import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NewCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.heading}>Card Number</Text>
        <View style={styles.inputBlock}>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.cardContainer, styles.halfWidth]}>
          <Text style={styles.heading}>Expiry Date (MM/YY)</Text>
          <View style={styles.inputBlock}>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={[styles.cardContainer, styles.halfWidth]}>
          <Text style={styles.heading}>CVV</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={[styles.inputBlock, styles.cvvInputBlock]}>
              <TextInput style={styles.input} />
              <FontAwesome name="question-circle" size={20} color="#189AB4" style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.heading}>Name on Card</Text>
        <View style={styles.inputBlock}>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleCheckboxToggle}>
          <View style={[styles.checkbox, isChecked && styles.checked]}>
            {isChecked && <FontAwesome name="check" size={14} color="white" />}
          </View>
        </TouchableOpacity>
        <View style={styles.checkboxTextContainer}>
          <Text style={styles.checkboxHeading}>Securely save this card for faster checkouts.</Text>
          <Text style={styles.checkboxDescription}>This means you might not have to add CVV while you pay as per RBI guidelines.</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.orangeBlock}>
          <Text style={styles.proceedText}>Proceed to pay ₹245</Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require('../../../assets/icons/cvv.png')} style={styles.imageIcon} />
            <Text style={styles.modalHeading}>What is CVV?</Text>
            <Text style={styles.modalText}>CVV is the three-digit code on the backside of your debit or credit card.</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.okButton}>
              <Text style={styles.okButtonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  cardContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  halfWidth: {
    flex: 1,
    marginRight: 10,
  },
  heading: {
    fontSize: 12,
    color: 'grey',
  },
  inputBlock: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cvvInputBlock: {
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  input: {
    paddingHorizontal: 10,
    flex: 1,
    height:35,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#189AB4',
  },
  checkboxTextContainer: {
    flex: 1,
  },
  checkboxHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  checkboxDescription: {
    fontSize: 12,
    color: '#666',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    marginLeft: 20,
  },
  orangeBlock: {
    backgroundColor: '#189AB4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 3,
  },
  proceedText: {
    alignItems: 'center',
    marginLeft: 60,
    marginRight: 60,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  greyLine: {
    marginBottom: 20,
    marginTop: 20,
    height: 1,
    backgroundColor: 'grey',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  modalText: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  okButton: {
    backgroundColor: '#189AB4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  okButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default NewCard;