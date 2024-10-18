import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const Payment = ({ navigation }) => {
  const [showInputBlock, setShowInputBlock] = useState(false);
  const [walletInputBlock, setWalletInputBlock] = useState(false);
  const [mobikwikInputBlock, setMobikwikInputBlock] = useState(false);
  const [amazonInputBlock, setAmazonInputBlock] = useState(false);
  const [payInputBlock, setPayInputBlock] = useState(false);
  const [bankInputBlock, setBankInputBlock] = useState(false);
  const [netInputBlock, setNetInputBlock] = useState(false);
  const [websiteInputBlock, setWebsiteInputBlock] = useState(false);
  const [laterInputBlock, setLaterInputBlock] = useState(false);
  const [ringInputBlock, setRingInputBlock] = useState(false);
  const [dietInputBlock, setDietInputBlock] = useState(false);
  const [cashInputBlock, setCashInputBlock] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showWalletModal1, setShowWalletModal1] = useState(false);
  const [hdfcInputBlock, setHdfcInputBlock] = useState(false);
  const [bunInputBlock, setBunInputBlock] = useState(false);
  const [rayInputBlock, setRayInputBlock] = useState(false);
  const [rootInputBlock, setRootInputBlock] = useState(false);
  const [paidInputBlock, setPaidInputBlock] = useState(false);

  const toggleWalletModal = () => {
    setShowWalletModal(!showWalletModal);
  };
  const toggleWalletModal1 = () => {
    setShowWalletModal1(!showWalletModal1);
  };
  const toggleInputBlock = () => {
    setShowInputBlock(!showInputBlock);
  };
  const toggleInputBlock1 = () => {
    setWalletInputBlock(!walletInputBlock);
  };
  const toggleInputBlock2 = () => {
    setMobikwikInputBlock(!mobikwikInputBlock);
  };
  const toggleInputBlock3 = () => {
    setAmazonInputBlock(!amazonInputBlock);
  };
  const toggleInputBlock4 = () => {
    setPayInputBlock(!payInputBlock);
  };
  const toggleInputBlock19 = () => {
    setPaidInputBlock(!paidInputBlock);
  };
  const toggleInputBlock5 = () => {
    setBankInputBlock(!bankInputBlock);
  };
  const toggleInputBlock6 = () => {
    setNetInputBlock(!netInputBlock);
  };
  const toggleInputBlock7 = () => {
    setWebsiteInputBlock(!websiteInputBlock);
  };
  const toggleInputBlock8 = () => {
    setLaterInputBlock(!laterInputBlock);
  };
  const toggleInputBlock9 = () => {
    setRingInputBlock(!ringInputBlock);
  };
  const toggleInputBlock10 = () => {
    setDietInputBlock(!dietInputBlock);
  };
  const toggleInputBlock11 = () => {
    setCashInputBlock(!cashInputBlock);
  };
  const toggleInputBlock15 = () => {
    setHdfcInputBlock(!hdfcInputBlock);
  };
  const toggleInputBlock16 = () => {
    setBunInputBlock(!bunInputBlock);
  };
  const toggleInputBlock17 = () => {
    setRayInputBlock(!rayInputBlock);
  };
  const toggleInputBlock18 = () => {
    setRootInputBlock(!rootInputBlock);
  };
  const handleAddUPI = () => {
    navigation.navigate("New UPI")
  };
  const handleAddcard = () => {
    navigation.navigate("New Card")
  };
  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.container}>
        <Text style={styles.upi}>UPI</Text>
        <Text style={styles.subDescription}>Directly pay from your bank accounts</Text>
        <TouchableOpacity onPress={toggleInputBlock}>
          <View style={styles.rowContainer}>
            <Image source={require('../../../assets/bankicons/phonepe.png')} style={styles.upiIcon} />
            <Text style={styles.phonepeText}>Phonepe UPI</Text>
            <TouchableOpacity onPress={() => setShowInputBlock(!showInputBlock)} style={styles.arrowarrow}>
              <FontAwesome name={showInputBlock ? "angle-up" : "angle-down"} size={20} color="#000" style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {showInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={styles.inputContent}>pay </Text>
              <FontAwesome name="inr" size={16} color="#fff" />
              <Text style={styles.inputContent}>245</Text>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={handleAddUPI} style={styles.addNewUPI}>
          <AntDesign name="plus" size={24} color="#189AB4" />
          <View style={{marginLeft: 15}}>
          <Text style={{ color: '#189AB4', fontWeight: 'bold' , fontSize: 16}}>Add new UPI ID </Text>
          <Text style={{fontSize: 13}}>We support all major UPI payment apps</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddUPI} style={styles.addNewUPI}>
          <View style={styles.iconsContainer}>
            <Image source={require('../../../assets/bankicons/bhim.png')} style={styles.upiLogo} />
            <Image source={require('../../../assets/bankicons/gpay.png')} style={styles.upiLogo} />
            <Image source={require('../../../assets/bankicons/phonepe.png')} style={styles.upiLogo} />
            <Image source={require('../../../assets/bankicons/paytm.png')} style={styles.upiLogo} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.additionalContainer}>
        <Text style={styles.wallet}>Wallets</Text>
        <TouchableOpacity onPress={toggleInputBlock1}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/paytm.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>Paytm Wallet</Text>
            </View>
            {walletInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
          {walletInputBlock && (
            <View style={styles.inputBlockContainer}>
              <View style={styles.inputBlock}>
                <Text style={styles.inputContent}>Link</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleInputBlock2}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/mobikwik.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>Mobikwik</Text>
            </View>
            {mobikwikInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
            <Text style={{fontSize:12, color: 'grey',marginTop:-10, marginBottom:10,marginHorizontal:40 }}>
              Pay with Mobikwik wallet and get up to RS.500 Cashback Minimum cart value for the offer is Rs.999. Offer valid till 31st March'24
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {mobikwikInputBlock && (
            <View style={styles.inputBlockContainer}>
              <View style={styles.inputBlock}>
                <Text style={[styles.inputContent, { marginRight: 5 }]}>Link</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleInputBlock3}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/amazon.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>Amazon Pay</Text>
            </View>
            {amazonInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          {amazonInputBlock && (
            <View style={styles.inputBlockContainer}>
              <View style={styles.inputBlock}>
                <Text style={styles.inputContent}>Link</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.inputBlockContainer}>
          <TouchableOpacity onPress={toggleWalletModal1} style={styles.normalBlock}>
            <Text style={styles.normalBlockText}>See All Wallets</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={showWalletModal1}
        onRequestClose={toggleWalletModal1}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>All wallets</Text>
              <TouchableOpacity onPress={toggleWalletModal1}>
                <Text style={styles.closeButton}>x</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search wallet"
                placeholderTextColor="#999"
                editable={true}
              />
              <FontAwesome name="search" size={20} color="#999" style={styles.searchIcon} />
            </View>
            <TouchableOpacity onPress={toggleInputBlock4}>
              <View style={styles.walletBlock}>
                <View style={styles.walletInfo}>
                  <Image source={require('../../../assets/bankicons/paytm.png')} style={styles.walletIcon} />
                  <Text style={styles.walletText}>Paytm Wallet</Text>
                </View>
                {payInputBlock ? (
                  <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
                ) : (
                  <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
                )}
              </View>
            </TouchableOpacity>
            {payInputBlock && (
              <View style={styles.inputBlockContainer}>
                <View style={styles.inputBlock}>
                  <Text style={styles.inputContent}>Link</Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
      <View style={styles.additionalContainer}>
        <Text style={styles.wallet}>Debit & Credit Cards</Text>
        <TouchableOpacity onPress={handleAddcard} style={styles.addNewUPI}>
          <Text style={{ color: '#189AB4', fontWeight: 'bold', marginLeft: 10 }}>+ Credit & debit cards{'\n'}</Text>
          <Text style={{ marginBottom: 10, marginTop: 30, marginLeft: -120 }}>Add New Card For Payment</Text>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleAddcard} style={styles.addNewUPI}>
            <Image source={require('../../../assets/bankicons/credit.png')} style={styles.upiLogo} />
            <Image source={require('../../../assets/bankicons/mastercard.png')} style={styles.upiLogo} />
            <Image source={require('../../../assets/bankicons/american.png')} style={styles.upiLogo} />
            <Image source={require('../../../assets/bankicons/rupay.png')} style={styles.upiLogo} />
            <Image source={require('../../../assets/bankicons/visa.png')} style={styles.upiLogo} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.additionalContainer}>
        <Text style={styles.wallet}>Pay Later</Text>
        <TouchableOpacity onPress={toggleInputBlock19}>
          <View>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/amazon.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>Amazon Pay Later</Text>
              {paidInputBlock ? (
                <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
              ) : (
                <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
              )}

            </View>
            <Text style={styles.subDescription}>
              Pay with Amazon Pay Later on medicine for Rs. 499 and more and earn cashback up to Rs. 300 with minimum cashback of Rs. 15.
              Offer ends 31st March'24
            </Text>
            <View style={styles.walletContent}>
              <Text style={{ color: '#189AB4', fontWeight: 'bold', marginLeft: 10 }}>Linking Required</Text>
            </View>

          </View>
        </TouchableOpacity>
        {paidInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={styles.inputContent}>Link</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.additionalContainer}>
        <Text style={styles.wallet}>Net Banking</Text>
        <Text style={styles.subDescription1}>Pay from your bank's website</Text>

        <TouchableOpacity onPress={toggleInputBlock5}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/airtel.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>Airtel Payments Bank</Text>
            </View>
            {bankInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
        </TouchableOpacity>
        {bankInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
              <FontAwesome name="inr" size={20} color="#fff" />
              <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={toggleInputBlock6}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/yesbank.png')} style={styles.walletIcon} />

              <Text style={styles.walletText}>YES Bank</Text>
            </View>
            {netInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
        </TouchableOpacity>
        {netInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
              <FontAwesome name="inr" size={20} color="#fff" />
              <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={toggleInputBlock7}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/hdfc.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>HDFC</Text>
            </View>
            {websiteInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}

          </View>
        </TouchableOpacity>
        {websiteInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
              <FontAwesome name="inr" size={20} color="#fff" />
              <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={toggleInputBlock8}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/icic.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>ICIC</Text>
            </View>
            {laterInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
        </TouchableOpacity>
        {laterInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
              <FontAwesome name="inr" size={20} color="#fff" />
              <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={toggleInputBlock9}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/axis.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>AXIS</Text>
            </View>
            {ringInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
        </TouchableOpacity>
        {ringInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
              <FontAwesome name="inr" size={20} color="#fff" />
              <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={toggleInputBlock10}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/sbi.png')} style={styles.walletIcon} />
              <Text style={styles.walletText}>SBI</Text>
            </View>
            {dietInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
        </TouchableOpacity>
        {dietInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
              <FontAwesome name="inr" size={20} color="#fff" />
              <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
            </View>
          </View>
        )}
        <View style={styles.inputBlockContainer}>
          <TouchableOpacity onPress={toggleWalletModal} style={styles.normalBlock}>
            <Text style={styles.normalBlockText}>See All Banks</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showWalletModal}
        onRequestClose={toggleWalletModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Choose your bank</Text>
              <TouchableOpacity onPress={toggleWalletModal}>
                <Text style={styles.closeButton}>x</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search your bank"
                placeholderTextColor="#999"
                editable={true}
              />
              <FontAwesome name="search" size={20} color="#999" style={styles.searchIcon} />
            </View>
            <TouchableOpacity onPress={toggleInputBlock15}>
              <View style={styles.walletBlock}>
                <View style={styles.walletInfo}>
                  <Image source={require('../../../assets/bankicons/hdfc.png')} style={styles.walletIcon} />
                  <Text style={styles.walletText}>HDFC</Text>
                </View>
                {hdfcInputBlock ? (
                  <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
                ) : (
                  <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
                )}
              </View>
            </TouchableOpacity>
            {hdfcInputBlock && (
              <View style={styles.inputBlockContainer}>
                <View style={styles.inputBlock}>
                  <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
                  <FontAwesome name="inr" size={20} color="#fff" />
                  <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
                </View>
              </View>
            )}
            <TouchableOpacity onPress={toggleInputBlock16}>
              <View style={styles.walletBlock}>
                <View style={styles.walletInfo}>
                  <Image source={require('../../../assets/bankicons/icic.png')} style={styles.walletIcon} />
                  <Text style={styles.walletText}>ICIC</Text>
                </View>
                {hdfcInputBlock ? (
                  <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
                ) : (
                  <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
                )}
              </View>
            </TouchableOpacity>
            {bunInputBlock && (
              <View style={styles.inputBlockContainer}>
                <View style={styles.inputBlock}>
                  <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
                  <FontAwesome name="inr" size={20} color="#fff" />
                  <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
                </View>
              </View>
            )}
            <TouchableOpacity onPress={toggleInputBlock17}>
              <View style={styles.walletBlock}>
                <View style={styles.walletInfo}>
                  <Image source={require('../../../assets/bankicons/axis.png')} style={styles.walletIcon} />
                  <Text style={styles.walletText}>AXIS</Text>
                </View>
                {hdfcInputBlock ? (
                  <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
                ) : (
                  <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
                )}
              </View>
            </TouchableOpacity>
            {rayInputBlock && (
              <View style={styles.inputBlockContainer}>
                <View style={styles.inputBlock}>
                  <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
                  <FontAwesome name="inr" size={20} color="#fff" />
                  <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
                </View>
              </View>
            )}
            <TouchableOpacity onPress={toggleInputBlock18}>
              <View style={styles.walletBlock}>
                <View style={styles.walletInfo}>
                  <Image source={require('../../../assets/bankicons/sbi.png')} style={styles.walletIcon} />
                  <Text style={styles.walletText}>SBI</Text>
                </View>
                {hdfcInputBlock ? (
                  <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
                ) : (
                  <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
                )}
              </View>
            </TouchableOpacity>


            {rootInputBlock && (
              <View style={styles.inputBlockContainer}>
                <View style={styles.inputBlock}>
                  <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
                  <FontAwesome name="inr" size={20} color="#fff" />
                  <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
                </View>

              </View>
            )}
          </View>
        </View>
      </Modal>
      <View style={styles.additionalContainer}>
        <Text style={[styles.wallet, { fontWeight: 'bold', color: 'black' }]}>Pay by Cash</Text>
        <TouchableOpacity onPress={toggleInputBlock11}>
          <View style={styles.rowContainer}>
            <View style={styles.walletContent}>
              <Image source={require('../../../assets/bankicons/cash.png')} style={styles.upiLogo} />
              <Text style={styles.walletText}>Cash on delivery</Text>
            </View>

            {cashInputBlock ? (
              <FontAwesome name="angle-up" size={24} color="#000" style={styles.arrowIcon} />
            ) : (
              <FontAwesome name="angle-down" size={24} color="#000" style={styles.arrowIcon} />
            )}
          </View>
        </TouchableOpacity>
        {cashInputBlock && (
          <View style={styles.inputBlockContainer}>
            <View style={styles.inputBlock}>
              <Text style={[styles.inputContent, { marginRight: 5 }]}>pay</Text>
              <FontAwesome name="inr" size={20} color="#fff" />
              <Text style={[styles.inputContent, { marginLeft: 5 }]}>245</Text>
              <Text style={[styles.inputContent, { marginLeft: 5 }]}>on delivery</Text>
            </View>
          </View>
        )}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#eaf7f9',
  },
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  additionalContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  upi: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subDescription: {
    fontSize: 13,
    color: 'grey',
    marginTop: 5,
    marginBottom: 10,
  },
  subDescription1: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  upiIcon: {
    width: 40,
    height: 40,
  },
  phonepeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  arrowarrow: {
    marginLeft: 'auto',
  },
  inputBlockContainer: {
    alignItems: "center",
    marginBottom:10
  },
  inputBlock: {
    flexDirection: 'row',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', 
    backgroundColor: '#189AB4',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    width:"90%"
  },
  inputContent: {
    color: '#fff',
    fontSize: 16,
  },
  addNewUPI: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  upiLogo:{
    width:25,height:25, marginLeft:10, marginRight:15
  },
  addUPI: {
    marginLeft: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 35
  },
  wallet: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  walletContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  walletText: {
    marginLeft: 10,
  },
  normalBlock: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#189AB4',
  },
  normalBlockText: {
    color: '#189AB4',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  closeButton: {
    fontSize: 30,
    color: 'grey',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: -35,
  },
  searchIcon: {
    marginLeft: 10,
  },
  walletBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
});

export default Payment;