import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'; // Import FontAwesome and AntDesign icons
import delivery from '../../../assets/delivery-truck.png';
import apple from "../../../assets/apple_cider.jpg";
import home from "../../../assets/icons/home-button.png";
import Modal from 'react-native-modal';
import Icon from "react-native-vector-icons/FontAwesome";
const Cart = ({ cartItems = [], removeFromCart, navigation }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1); // State to manage quantity, initial value is 1

  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Increment quantity by 1
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrease quantity by 1, but ensure it doesn't go below 1
    }
  };
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleApplyCouponPress = () => {
    // Navigate to the coupon screen when the "Apply Coupon" button is pressed
    navigation.navigate('Coupons');
  };
  const handleConfirm = () => {
    navigation.navigate("Payment")
  }
  const handleAddAddress=()=>{
    navigation.navigate("Add Address")
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.locationInfo}>
            <View style={styles.deliveryInfo}>
              <TouchableOpacity style={styles.icon}>
                <Ionicons name="location" size={22} color="#189ab4" />
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <Text style={styles.deliveryText}>Deliver to-Madhurawada</Text>
              </View>
              <TouchableOpacity style={styles.changeTextplace} onPress={handleAddAddress}>
                <Text style={styles.changeText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.productContainer}>
            <View style={styles.header}>
              <Image source={delivery} style={styles.delivery} />
              <View>
                <Text style={{ fontSize: 14 }}>Delivery by</Text>
                <Text style={styles.deliveryheader}>11 - 13 March</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.productCard}>
              <View style={styles.productInfoContainer}>
                <Image source={apple} style={styles.productImage} />
                <View style={styles.productTextContainer}>
                  <Text style={styles.productDescription}>
                    Tata 1mg Apple Cider Vinegar
                  </Text>
                  <Text style={styles.productSubDescription}>Bottle Of 500 ml liquid</Text>
                  <Text style={styles.cost}>
                    <FontAwesome name="rupee" size={16} color="black" /> 245
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.remove}>Remove</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity style={styles.quantityButton} onPress={quantity > 1 ? decreaseQuantity : null}>
                    {quantity > 1 ? (
                      <AntDesign name="minus" size={18} color="#189ab4" />
                    ) : (
                      <FontAwesome name="trash" size={18} color="#189ab4" />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                    <AntDesign name="plus" size={18} color="#189ab4" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
          <TouchableOpacity onPress={handleApplyCouponPress}>
            <View style={styles.bottomContainer} >
              <View style={styles.applyCouponContainer}>
                <AntDesign name="tag" size={18} color="#189ab4" />
                <TouchableOpacity onPress={handleApplyCouponPress}>
                  <Text style={styles.applyCouponText}> Apply Coupon</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleApplyCouponPress}>
                <Icon name="chevron-right" size={16} color="#189ab4" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <View style={styles.BillContainer}>
            <Text style={styles.BillheaderText}>Bill Summary</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.summaryText}>Item total (MRP)</Text>
              <Text style={styles.RupeesIcon} ><FontAwesome style={styles.RupeesIcon} name="rupee" size={12} color="black" /> 245</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.summaryText}>Total discount </Text>
              <Text style={styles.RupeesIcon}><FontAwesome style={styles.RupeesIcon} name="rupee" size={12} color="black" /> 245</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.summaryText}>Shipping fee</Text>
              <Text style={styles.RupeesIcon}><FontAwesome style={styles.RupeesIcon} name="rupee" size={12} color="black" /> 245</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceContainer}>
              <Text style={styles.finalprice}>To be Paid</Text>
              <Text style={styles.finalprice}><FontAwesome style={styles.finalprice} name="rupee" size={12} color="black" /> 245</Text>
            </View>
            <View style={styles.boxContainer}>
              <View >
                <Text style={styles.boxtext}><AntDesign name="tag" size={16} color="#189ab4" /> You have saved 100 on this order</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.CheckoutPrice}><FontAwesome name="rupee" size={18} color="black" /> 245</Text>
          <Text style={styles.CheckoutText} >See bill summary</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.checkoutbutton} onPress={toggleModal}>
            <Text style={{ color: "#fff", fontSize: 18 }}> Continue </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalclose} onPress={toggleModal} >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text style={styles.ConfirmHeader}> Confirm delivery</Text>
            <View style={styles.dashedDivider} />
            <TouchableOpacity onPress={handleAddAddress}>
            <View style={styles.addressContainer}>
              <Image
                style={styles.deliveryimage}
                source={home} // Replace 'delivery' with the path to your small image
              />
              <View style={styles.addressTextContainer} >
                <Text style={styles.addressheaderText}>Delivery to:</Text>
                <Text style={styles.addressText}>Home ( 303, Satya Kalyan Apartments, Madhurawada, Visakhapatnam -530041)</Text>
              </View>
              <AntDesign name="rightcircle" size={18} style={styles.arrowIcon} />
            </View>
            </TouchableOpacity>
            <View style={styles.dashedDivider} />
            <View style={styles.addressContainer}>
              <Image
                style={styles.deliveryimage}
                source={delivery} // Replace 'delivery' with the path to your small image
              />
              <View style={styles.addressTextContainer}>
                <Text style={styles.addressheaderText}>Delivery by:</Text>
                <Text style={styles.addressText}>Shipment 1  <Text style={{ color: "#189ab4", fontSize: 15 }}> 13 -14 March </Text>  </Text>

                <View style={{ alignItems: "center", justifyContent: "flex-start", flexDirection: "row" }}><Image
                  style={styles.additionalImage}
                  source={apple} // Replace 'additionalImage' with the path to your additional image
                />
                  <Image
                    style={styles.additionalImage}
                    source={apple} // Replace 'additionalImage' with the path to your additional image
                  />
                </View>
              </View>
              <AntDesign name="rightcircle" size={18} style={styles.arrowIcon} />
            </View>
          </View>
          <View style={styles.confirmContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    backgroundColor: "#eaf7f9"
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginVertical: 10
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  deliveryText: {
    color: '#333',
    fontSize: 16,
    marginRight: 30,
    marginLeft: 5,
  },
  changeTextplace: {
    justifyContent: "center",

  },
  changeText: {
    color: '#189AB4',
    fontSize: 16,
    marginRight: 20,
  },
  productContainer: {
    marginBottom: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
  },
  delivery: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  deliveryheader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#05445e"
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },
  productCard: {
    marginBottom: 10,
  },
  productInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  productTextContainer: {
    margin: 5,
  },
  productDescription: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubDescription: {
    fontSize: 12,
  },
  cost: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
  },
  remove: {
    fontSize: 12,
    marginTop: 4,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'gray',
    textDecorationThickness: 1,
    textDecorationSkipInk: 'none',
    textDecorationSkipOverline: 'none',
    color: "gray"
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#189ab4",
    borderRadius: 5,
    marginTop: 40,
    marginLeft: -50, padding: 5,
  },
  quantityButton: {
    fontSize: 14,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  applyCouponContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  applyCouponText: {
    fontSize: 16,
  },
  BillContainer: {
    marginBottom: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  BillheaderText: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,

  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  RupeesIcon: {
    fontSize: 14,
    color: "#000"
  },
  summaryText: {
    fontSize: 14,
    color: "#000"
  },
  finalprice: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
    color: "#000"
  },
  boxContainer: {
    backgroundColor: '#d4f1f4',
    borderWidth: 0.5,
    borderColor: "#189ab4",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 1,
  },
  boxtext: {
    fontSize: 14,
    padding: 8,
  },
  footer: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'sticky', // Make the footer sticky
    bottom: 0, // Position it at the bottom
    zIndex: 1, // Add zIndex to make sure it's above other elements
  },
  CheckoutPrice: {
    fontSize: 20,
    fontWeight: "400",
    marginRight: 10,
    marginBottom: 5,
    textAlign: "left"
  },
  CheckoutText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#189AB4"
  },
  checkoutbutton: {
    backgroundColor: "#189ab4",
    paddingVertical: 12,
    paddingHorizontal: 24, // Increase this value to adjust the button width
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 22,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalclose: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ConfirmHeader: {
    fontSize: 25,
    fontWeight: "500",
  },
  dashedDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'dashed',
    marginTop: 15,
    marginBottom: 10,
    width: '100%',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  deliveryimage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  addressTextContainer: {
    flex: 1,
    marginLeft: 10,
  }, addressheaderText: {
    fontSize: 13,
    marginBottom: 4,
  },
  addressText: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "500"
  },
  additionalImage: {
    width: 40,
    height: 40,
    marginLeft: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 5,
  },
  arrowIcon: {
    marginLeft: 10,
    color: "#189ab4",
  },
   confirmContainer: {
    elevation: 5,
  },
  confirmButton: {
    backgroundColor: '#189ab4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },
});

export default Cart;