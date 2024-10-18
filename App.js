import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import LoginScreen from './Auth/Partnerlogin/LoginScreen';
import OtpVerification from './Auth/Partnerlogin/OtpVerification';
import ForgotPassword from './Auth/Partnerlogin/ForgotPassword';
import RegisterScreen from './Auth/Partnerlogin/RegisterScreen';
import EditAddress from './components/manageAddress/EditAddress';
import OtpVerificationScreen from './Auth/Partnerlogin/OtpVerificationScreen';
import NewPasswordScreen from './Auth/Partnerlogin/NewPasswordScreen ';
import UserForgotPasswordScreen from './Auth/UserLogin/UserForgotPasswordScreen';
import UserOtpVerificationScreen from './Auth/UserLogin/UserOtpVerificationScreen';
import Userloginscreen from './Auth/UserLogin/Userloginscreen';
import UserRegister from './Auth/UserLogin/UserRegister';
import UserOtpVerification from './Auth/UserLogin/UserOtpVerification';
import UserNewPasswordScreen from './Auth/UserLogin/UserNewPasswordScreen';
import MainComponent from './navigations/MainComponent';
import OnBoardScreen from './Onboard/OnBoardScreen';
// import ManageAddress from './Components/manageAddress/ManageAddress';
// import EditAddress from './Components/manageAddress/EditAddress';
import Productlist from './navigations/Screens/Store/Productlist';
import ProductDescription from './navigations/Screens/Store/ProductDescription';
import Knowmore from './navigations/Screens/Store/Knowmore';
import DisclaimerScreen from './navigations/Screens/Store/DisclaimerScreen';
import Cart from './navigations/Screens/Store/Cart';
import LabCart from './navigations/Screens/Labs/Cart';
import { Ionicons } from '@expo/vector-icons';
// import CouponsOffers from './navigations/Screens/Store/Coupons';
import Coupons from './navigations/Screens/Store/Coupons';
import { TouchableOpacity, View } from 'react-native';
import Payment from './navigations/Screens/Store/Payment';
import NewCard from './navigations/Screens/Store/NewCard';
import NewUpi from './navigations/Screens/Store/NewUpi';
import Labs from './navigations/Screens/OrdersbyPrescription/Labs';
import Medicines from './navigations/Screens/OrdersbyPrescription/Medicines';
import NotificationScreen from './navigations/Screens/Notifications/NotificationScreen';
import Profile from './navigations/Screens/Profile/Profile';
import AddAddress from './navigations/Screens/Profile/AddAddress';
import MapScreen from './navigations/Screens/Profile/Mapscreen';
import MedicineOrder from './navigations/Screens/Profile/MedicineOrder';
import MedicineOrderDetail from './navigations/Screens/Profile/MedicineOrderDetail';
import ManageProfiles from './navigations/Screens/Profile/ManageProfiles';
import AddProfile from './navigations/Screens/Profile/AddProfile';
import Packages from './navigations/Screens/Labs/Packages';
import Categories from './navigations/Screens/Labs/Categories';
import subCategories from './navigations/Screens/Labs/SubCategories';
import TestsViewAll from './navigations/Screens/Labs/TestsViewAll';
import Appointments from './navigations/Screens/Labs/Appointments';
import EditProfile from './navigations/Screens/Profile/EditProfile';
import SearchLocation from './navigations/Screens/Profile/SearchLocation';
import PillReminder from './navigations/Screens/Profile/Pill Reminder/PillReminder';
import SetReminder from './navigations/Screens/Profile/Pill Reminder/SetReminder';
import LabTests from './navigations/Screens/Profile/Lab Test/LabTests';
import AllHealthRecords from './navigations/Screens/Profile/DoctorConsultation/AllHealthRecords';
import Payments from './navigations/Screens/Profile/Payments';
import Filters from './navigations/Screens/Labs/Filters';
import SearchLabs from './navigations/Screens/Labs/SearchLabs';
import ManageAddress from './components/manageAddress/ManageAddress';
// import Tab from './components/Tab';
import HealthWallet from './navigations/Screens/Profile/HealthWallet/HealthWallet';
import Membership from './navigations/Screens/Profile/Membership';
import DoctorHomePage from './navigations/Screens/Doctorspage/DoctorHomePage';
import SymptomsPage from './navigations/Screens/Doctorspage/SymptomsPage';
import DoctorList from './navigations/Screens/Doctorspage/DoctorList';
import DoctorSearch from './navigations/Screens/Doctorspage/DoctorSearch';
import DentalPage from './navigations/Screens/Doctorspage/DentalPage';
import SymptomsViewAll from './navigations/Screens/Doctorspage/SymptomsViewAll';
import HealthPackages from './navigations/Screens/Doctorspage/HealthPackages';
import SearchSymptoms from './navigations/Screens/Doctorspage/SearchSymptoms';
import DoctorProfileScreen from './navigations/Screens/Doctorspage/DoctorProfileScreen';
import ViewAllSlots from './navigations/Screens/Doctorspage/ViewAllSlots';
import CheckoutPage from './navigations/Screens/Doctorspage/CheckoutPage';
import AddMember from './navigations/Screens/Doctorspage/AddMember';
import ConfirmPage from './navigations/Screens/Doctorspage/Confirmpage';
import Checkout from './navigations/Screens/Doctorspage/Checkout';
import Filterpage from './navigations/Screens/Doctorspage/Filterpage';
import DigitalConsult from './navigations/Screens/Doctorspage/DigitalConsult';
import BlogPage from './navigations/Screens/Blog/BlogPage';
import BlogContent from './navigations/Screens/Blog/BlogContent';
// import PregnancyCare from './navigations/Screens/Doctorspage/PregnancyCare';
import DonateBlood from './navigations/Screens/BloodDonation/DonateBlood';
import RequestBlood from './navigations/Screens/BloodDonation/RequestBlood';
import BMICalculator from './navigations/Screens/Diet/BMICalculator';
import TestDetails from './navigations/Screens/Labs/TestDetails';
import HealthInsurance from './navigations/Screens/Profile/HealthInsurance';
// import Help from './navigations/Screens/Profile/Help';
import AboutUs from './navigations/Screens/Profile/About';
import FAQs from './navigations/Screens/Profile/FAQs';
import ConsultDoctors from './navigations/Screens/Profile/DoctorConsultation/ConsultDoctor';


const handleShare = () => {
  setModalVisible(true);
};


const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Userloginscreen" headerMode="none">
    <Stack.Screen name="Userloginscreen" component={Userloginscreen} />
    <Stack.Screen name="UserForgotPasswordScreen" component={UserForgotPasswordScreen} />
    <Stack.Screen name="UserOtpVerificationScreen" component={UserOtpVerificationScreen} />
    <Stack.Screen name="UserRegister" component={UserRegister} />
    <Stack.Screen name="UserNewPasswordScreen" component={UserNewPasswordScreen} />
    <Stack.Screen name="UserOtpVerification" component={UserOtpVerification} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="OtpVerification" component={OtpVerification} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
    <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainComponent" >
        <Stack.Screen name="MainComponent" component={MainComponent} options={{ headerShown: false }} />
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="Manage Address" component={ManageAddress} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Manage Profiles" component={ManageProfiles} />
        <Stack.Screen name="OnBoard" component={OnBoardScreen}
          options={({ navigation }) => ({
            headerShown: false,
            OnBoardNavigation: navigation,
          })}
        />
        <Stack.Screen name="Medicine Orders" component={MedicineOrder} />
        <Stack.Screen name="All Health Records" component={AllHealthRecords} />
        <Stack.Screen name="Add Profile" component={AddProfile} />
        <Stack.Screen name="Medicine Orders Detail" component={MedicineOrderDetail} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="My Lab Tests" component={LabTests} />
        <Stack.Screen name="ConsultDoctors" component={ConsultDoctors} />
        <Stack.Screen name="Add Address" component={AddAddress} />
        <Stack.Screen name="Confirm Location" component={MapScreen} />
        <Stack.Screen name="Search Location" component={SearchLocation} options={{ headerShown: false }} />
        <Stack.Screen name="Pill Reminder" component={PillReminder} />
        <Stack.Screen name="Health Credit Wallet" component={HealthWallet} />
        <Stack.Screen name="Set Reminder" component={SetReminder} />
        <Stack.Screen name="Membership" component={Membership} />
        <Stack.Screen name="Manage Payments" component={Payments} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen name="HealthInsurance" component={HealthInsurance} />
        {/* <Stack.Screen name="Help" component={Help} /> */}
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="FAQs" component={FAQs} />

        <Stack.Screen
          name="ProductList"
          component={Productlist}
          options={{
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <TouchableOpacity
                  style={{ marginRight: 16 }}
                >
                  <Ionicons name="search" size={24} color="#189ab4" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="cart" size={24} color="#189ab4" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen name="ProductDescription" component={ProductDescription} options={{
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 16 }}>
              <TouchableOpacity >
                <Ionicons name="share" size={24} color="#189ab4" />
              </TouchableOpacity>
              <TouchableOpacity >
                <Ionicons name="cart" size={24} color="#189ab4" />
              </TouchableOpacity>
            </View>
          ),
        }} />
        <Stack.Screen name="ProductKnowmore" component={Knowmore} />
        <Stack.Screen name="New Card" component={NewCard} />

        <Stack.Screen name="New UPI" component={NewUpi} />
        <Stack.Screen name="Coupons" component={Coupons} />
        <Stack.Screen name="Lab Cart" component={LabCart} />
        <Stack.Screen name="Lab Appointments" component={Appointments} />
        <Stack.Screen name="Filter by" component={Filters} />
        <Stack.Screen name="Search Labs" component={SearchLabs} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Sub Categories" component={subCategories} />
        <Stack.Screen name="Health Checkups" component={TestsViewAll} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Doctors" component={DoctorHomePage} />
        <Stack.Screen name="Upload Lab Prescription" component={Labs} />
        <Stack.Screen name="Upload Medicines Prescription" component={Medicines} />
        <Stack.Screen name="SymptomsPage" component={SymptomsPage} />
        <Stack.Screen name="DonateBlood" component={DonateBlood} />
        <Stack.Screen name="BMICalculator" component={BMICalculator} />
        <Stack.Screen
          name="DoctorProfileScreen"
          component={DoctorProfileScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={handleShare} style={{marginRight:20}}>
                <Ionicons name="share-outline" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />  
        <Stack.Screen name="DoctorList" component={DoctorList} />
        <Stack.Screen name="DoctorSearch" component={DoctorSearch} />
        <Stack.Screen name="DentalPage" component={DentalPage} />
        <Stack.Screen name="SymptomsViewAll" component={SymptomsViewAll} />
        <Stack.Screen name="HealthPackages" component={HealthPackages} />
        <Stack.Screen name="SearchSymptoms" component={SearchSymptoms} />
        <Stack.Screen name="BlogPage" component={BlogPage} />
        <Stack.Screen name="BlogContent" component={BlogContent} />
        <Stack.Screen name="ViewAllSlots" component={ViewAllSlots} />
        <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
        <Stack.Screen name="AddMember" component={AddMember} />
        <Stack.Screen name="ConfirmPage" component={ConfirmPage} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Filterpage" component={Filterpage} />
        <Stack.Screen name="DigitalConsult" component={DigitalConsult} />
       
        <Stack.Screen name="TestDetails" component={TestDetails} />
        <Stack.Screen name="RequestBlood" component={RequestBlood} />
{/* 
        <Stack.Screen name="Edit Address" component={EditAddress} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="PregnancyCare" component={PregnancyCare} />
        */}
        <Stack.Screen name="Packages" component={Packages} />
        <Stack.Screen name="Disclaimer" component={DisclaimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


