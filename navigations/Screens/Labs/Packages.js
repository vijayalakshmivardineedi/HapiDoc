import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';





const Packages = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);
  const [showDetails, setShowDetails] = useState(false); const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const data = [
    {
      id: '1',
      text: '"Everything went very well and smoothly. Technician was right on time. Really happy with the service."',
      subText: 'Ashish Garnaik',
    },
    {
      id: '2',
      text: '"Very professional phlebo. Excellent job in collecting the sample. No pain at all. Got my report also within 24 hours."',
      subText: 'Malathi Ganapathy',
    },
    {
      id: '3',
      text: '"Good service, Practo is avoiding to stand in que for health checkup."',
      subText: 'Lalita Hegde',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      scrollViewRef.current?.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }, 3000); // Change the time interval as needed

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.cardContentContent}>
      <Text style={styles.textText}>{item.text}</Text>
      <Text style={styles.subTextText}>{item.subText}</Text>
    </View>
  );



  const toggleText1 = () => {
    setShowText1(!showText1);
  };

  const toggleText2 = () => {
    setShowText2(!showText2);
  };
  const toggleText3 = () => {
    setShowText3(!showText3);
  };
  const toggleText4 = () => {
    setShowText4(!showText4);
  };
  const toggleText5 = () => {
    setShowText5(!showText5);
  };
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleBookNow = () => {

    console.log('Book now button pressed');






  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* First Card */}
        <View style={styles.card}>
          <Image
            source={require("../../../assets/Package Icons/labs.webp")}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.heading}>Basic Women's Health Checkup</Text>
            <Text style={styles.subHeading}>
              Ideal for women aged{" "}
              <Text style={styles.subHeadingSpan}>15-40 years</Text>
            </Text>
            <Text style={styles.subHeading}>
              Includes <Text style={styles.subHeadingSpan}>85 tests</Text>
            </Text>
          </View>
        </View>

        {/* Second Card */}
        <View style={[styles.card, styles.secondCard]}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              ₹<Text style={styles.bold}>1099</Text>
              <Text style={styles.cross}> ₹1400</Text>
              <Text style={styles.discount}> 21% Off</Text>
            </Text>
            <TouchableOpacity onPress={handleBookNow}>
              <View style={styles.bookNowButton}>
                <Text style={styles.bookNowText}>Book Now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Third Card */}
        <View style={[styles.card, styles.thirdCard]}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <View style={styles.iconContainer1}>
                <Image
                  source={require("../../../assets/Package Icons/labs.webp")}
                  style={styles.icon3}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.heading1}>
                  Talk to Practo expert to book tests
                </Text>
                <Text style={styles.subHeading1}>
                  You will be connected with Practo expert on call to book
                  tests.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleBookNow}
              style={styles.bookNowContainer}
            >
              <View style={styles.bookNowButton1}>
                <Text style={styles.bookNowText1}>
                  <Icon name="phone" size={18} color="white" /> Call Us to
                  book tests
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.subHeading2}>
                On clicking, you agree to Practo to message you over Whatsapp
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.fourthcard}>
          <Image
            source={require("../../../assets/Package Icons/horlicks.webp")}
            style={styles.image4}
          />
          <View style={styles.cardContent4}>
            <Text style={styles.heading4}>Who should book this checkup?</Text>
            <Text style={styles.subHeading4}>
              You can now save tax by investing in your health with our Tax
              Sacer Package.As per Section 80D of the Income Tax Act,
              investing up to Rs.5000 in Preventive Health Checkups will help
              you save tax. This includes health checkup for all dependents in
              your family, including self.{" "}
            </Text>
            <Text style={styles.subHeading41}>
              It is recommended that you get this checkup done annually to
              take a closer look at your health. This full body health checkup
              includes cancer markers along with over 100 other tests for
              comprehensive dull body checkup.{" "}
            </Text>
          </View>
        </View>

        <View style={styles.fifthcard}>
          <View style={styles.cardContent5}>
            <Text style={styles.heading5}>Provide By</Text>
            <View style={styles.grayMargin}></View>
            <Text style={styles.subHeading5}>
              Your tests will be conducted in one of our partner labs to
              ensure the highest accuracy of your reports.{" "}
            </Text>
            {/* Gray margin */}
          </View>
        </View>
        <View style={[styles.card, styles.sixthCard]}>
          <View style={styles.cardContent6}>
            <Text style={styles.heading6}>Why book with us?</Text>
            <View style={styles.leftContent6}>
              <View style={styles.iconContainer6}>
                <Image
                  source={require("../../../assets/Package Icons/nextday.webp")}
                  style={styles.icon6}
                />
              </View>
              <View style={styles.textContainer6}>
                <Text style={styles.heading61}>
                  Get digital report within 2 days
                </Text>
                <Text style={styles.subHeading6}>
                  Our labs ensure turn-around-time of 48 hours from specimen
                  pickup
                </Text>
              </View>
            </View>

            <View style={styles.leftContent61}>
              <View style={styles.iconContainer6}>
                <Image
                  source={require("../../../assets/Package Icons/doctor.webp")}
                  style={styles.icon6}
                />
              </View>
              <View style={styles.textContainer6}>
                <Text style={styles.heading61}>
                  Expert Doctor's Consultation
                </Text>
                <Text style={styles.subHeading6}>
                  Book an online consultation with our wxpert doctors to
                  understand your report better and receive medical advice.
                  Plus,enjoy free follow-up upto 7 days post your
                  consultation.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.card, styles.seventhCard]}>
          <Text style={styles.heading71}>Includes 110 Tests</Text>
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={toggleText1}
          >
            <View style={styles.leftContent7}>
              <View style={styles.iconContainer7}>
                <Image
                  source={require("../../../assets/Package Icons/iron.webp")}
                  style={styles.icon7}
                />
              </View>
              <View style={styles.textContainer7}>
                <Text style={styles.heading7}>Iron Deficiency Profile</Text>
                <Text style={styles.subHeading7}>5 tests</Text>
              </View>
            </View>
            <View style={styles.arrowContainer7}>
              <Icon
                name={showText1 ? "angle-up" : "angle-down"}
                size={30}
                color="#666"
              />
            </View>
          </TouchableOpacity>
          {showText1 && (
            <View style={styles.textContentContainer7}>
              <Text style={styles.textContent7}>Transferrin Blood</Text>
              <Text style={styles.textContent71}>
                Total Iron Binding Capacity Blood
              </Text>
              <Text style={styles.textContent71}>Iron Blood</Text>
              <Text style={styles.textContent71}>
                Transferrin Saturation% Immunoturbidimetric Assay
              </Text>
              <Text style={styles.textContent71}>
                Photometric Blood Serum
              </Text>
              <Text style={styles.textContent71}>
                Unsaturated Iron Binding Capacity
              </Text>
              <Text style={styles.textContent71}>
                Spectrophotometry , Nitroso-Psap Blood Serum
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.itemContainer}
            onPress={toggleText2}
          >
            <View style={styles.leftContent71}>
              <View style={styles.iconContainer7}>
                <Image
                  source={require("../../../assets/Package Icons/cardiac.webp")}
                  style={styles.icon7}
                />
              </View>
              <View style={styles.textContainer7}>
                <Text style={styles.heading7}>Cardiac Risk Markers</Text>
                <Text style={styles.subHeading7}>5 tests</Text>
              </View>
            </View>
            <View style={styles.arrowContainer7}>
              <Icon
                name={showText2 ? "angle-up" : "angle-down"}
                size={30}
                color="#666"
              />
            </View>
          </TouchableOpacity>
          {showText2 && (
            <View style={styles.textContentContainer7}>
              <Text style={styles.textContent7}>Apolipoprotien A1 Blood</Text>
              <Text style={styles.textContent71}>Apolipoprotien B Blood</Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.itemContainer}
            onPress={toggleText3}
          >
            <View style={styles.leftContent71}>
              <View style={styles.iconContainer7}>
                <Image
                  source={require("../../../assets/Package Icons/hand.webp")}
                  style={styles.icon7}
                />
              </View>
              <View style={styles.textContainer7}>
                <Text style={styles.heading7}>HbA1c</Text>
                <Text style={styles.subHeading7}>2 tests</Text>
              </View>
            </View>
            <View style={styles.arrowContainer7}>
              <Icon
                name={showText3 ? "angle-up" : "angle-down"}
                size={30}
                color="#666"
              />
            </View>
          </TouchableOpacity>
          {showText3 && (
            <View style={styles.textContentContainer7}>
              <Text style={styles.textContent7}>
                Glycosylated Haemoglobin Blood
              </Text>
              <Text style={styles.textContent71}>
                Average Blood Glucose (Abg) Calculated Blood
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.itemContainer}
            onPress={toggleText4}
          >
            <View style={styles.leftContent71}>
              <View style={styles.iconContainer7}>
                <Image
                  source={require("../../../assets/Package Icons/throth.webp")}
                  style={styles.icon7}
                />
              </View>
              <View style={styles.textContainer7}>
                <Text style={styles.heading7}>T3-T4-TSH</Text>
                <Text style={styles.subHeading7}>3 tests</Text>
              </View>
            </View>
            <View style={styles.arrowContainer7}>
              <Icon
                name={showText4 ? "angle-up" : "angle-down"}
                size={30}
                color="#666"
              />
            </View>
          </TouchableOpacity>
          {showText4 && (
            <View style={styles.textContentContainer7}>
              <Text style={styles.textContent7}>
                Thyroid Stimulating Hrmone Blood
              </Text>
              <Text style={styles.textContent71}>Total Thyroxine Blood</Text>
              <Text style={styles.textContent71}>
                Total Triiodothyronine Blood
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.itemContainer}
            onPress={toggleText5}
          >
            <View style={styles.leftContent71}>
              <View style={styles.iconContainer7}>
                <Image
                  source={require("../../../assets/Package Icons/lipid.webp")}
                  style={styles.icon7}
                />
              </View>
              <View style={styles.textContainer7}>
                <Text style={styles.heading7}>Lipid Profile</Text>
                <Text style={styles.subHeading7}>9 tests</Text>
              </View>
            </View>
            <View style={styles.arrowContainer7}>
              <Icon
                name={showText5 ? "angle-up" : "angle-down"}
                size={30}
                color="#666"
              />
            </View>
          </TouchableOpacity>
          {showText5 && (
            <View style={styles.textContentContainer7}>
              <Text style={styles.textContent7}>
                Cholesterol Hdl Enzymatic Colorimetric Method Blood
              </Text>
              <Text style={styles.textContent71}>
                Cholesterol Total Enzymatic Colorimetric Method Blood
              </Text>
            </View>
          )}

          <View style={styles.leftContent71}>
            <View style={styles.iconContainer7}>
              <Image
                source={require("../../../assets/Package Icons/urine.webp")}
                style={styles.icon7}
              />
            </View>
            <View style={styles.textContainer7}>
              <Text style={styles.heading7}>
                Kidney/Renal Profile - Advanced
              </Text>
              <Text style={styles.subHeading7}>12 tests</Text>
            </View>
          </View>

          <View style={styles.leftContent71}>
            <View style={styles.iconContainer7}>
              <Image
                source={require("../../../assets/Package Icons/count.webp")}
                style={styles.icon7}
              />
            </View>
            <View style={styles.textContainer7}>
              <Text style={styles.heading7}>Complete Blood Count</Text>
            </View>
          </View>
          <View>
            {!showDetails && (
              <TouchableOpacity onPress={toggleDetails}>
                <Text style={styles.view}>View All</Text>
              </TouchableOpacity>
            )}
            {showDetails && (
              <View>
                <View style={styles.leftContent71}>
                  <View style={styles.iconContainer7}>
                    <Image
                      source={require("../../../assets/Package Icons/urine.webp")}
                      style={styles.icon7}
                    />
                  </View>
                  <View style={styles.textContainer7}>
                    <Text style={styles.heading7}>Glucose Fasting Blood</Text>
                  </View>
                </View>

                <View style={styles.leftContent71}>
                  <View style={styles.iconContainer7}>
                    <Image
                      source={require("../../../assets/Package Icons/urine.webp")}
                      style={styles.icon7}
                    />
                  </View>
                  <View style={styles.textContainer7}>
                    <Text style={styles.heading7}>
                      Vitamine B12 Conventional Blood
                    </Text>
                  </View>
                </View>

                <View style={styles.leftContent71}>
                  <View style={styles.iconContainer7}>
                    <Image
                      source={require("../../../assets/Package Icons/urine.webp")}
                      style={styles.icon7}
                    />
                  </View>
                  <View style={styles.textContainer7}>
                    <Text style={styles.heading7}>Amylase Blood</Text>
                  </View>
                </View>

                {/* Add more views as needed */}

                <TouchableOpacity onPress={toggleDetails}>
                  <Text style={styles.view7}>Hide</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <View style={styles.eighthcard}>
          <View style={styles.cardContent8}>
            <Text style={styles.heading8}>
              What preparation is needed for this Checkup?
            </Text>

            <Text style={styles.subHeading8}>
              Fasting is required for about 10-12 hours before the
            </Text>
            <Text style={styles.subHeading81}>
              sample collection.Consumption of water is permitted.{" "}
            </Text>
          </View>
        </View>

        <View style={[styles.card, styles.ninthCard]}>
          <View style={styles.cardContent9}>
            <Text style={styles.heading9}>How it works?</Text>
            <View style={styles.leftContent9}>
              <View style={styles.iconContainer9}>
                <Image
                  source={require("../../../assets/Package Icons/nextday.webp")}
                  style={styles.icon9}
                />
              </View>
              <View style={styles.textContainer9}>
                <Text style={styles.subHeading9}>
                  Pick a package that suits your healthcare needs and
                  seamlessly book a home sample collection
                </Text>
              </View>
            </View>

            <View style={styles.leftContent91}>
              <View style={styles.iconContainer9}>
                <Image
                  source={require("../../../assets/Package Icons/doctor.webp")}
                  style={styles.icon9}
                />
              </View>
              <View style={styles.textContainer9}>
                <Text style={styles.subHeading9}>
                  We will send a certified professional to your place to
                  assist you with the sample collection
                </Text>
              </View>
            </View>
            <View style={styles.leftContent91}>
              <View style={styles.iconContainer9}>
                <Image
                  source={require("../../../assets/Package Icons/doctor.webp")}
                  style={styles.icon9}
                />
              </View>
              <View style={styles.textContainer9}>
                <Text style={styles.subHeading9}>
                  After your sample collection, you can access your reports
                  within your account on our mobile application. We will also
                  email you the reports
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.tenthcard}>
          <Text style={styles.heading10}>Similar packages</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.cardContainer101}>
              <View style={styles.card101}>
                <Image
                  source={require("../../../assets/Package Icons/girl.webp")}
                  style={styles.image10}
                />
                <View style={styles.cardContent10}>
                  <Text style={styles.heading101}>
                    Basic Women's Health Checkup
                  </Text>
                  <Text style={styles.subHeading10}>
                    Ideal for women aged{" "}
                    <Text style={styles.subHeadingSpan10}>15-40 years</Text>
                  </Text>
                  <Text style={styles.subHeading10}>
                    Includes{" "}
                    <Text style={styles.subHeadingSpan10}>85 tests</Text>
                  </Text>
                </View>

                <View style={styles.priceContainer10}>
                  <Text style={styles.price10}>
                    ₹<Text style={styles.bold10}>899</Text>
                    <Text style={styles.cross10}> ₹1200</Text>
                    <Text style={styles.discount10}> 25% Off</Text>
                  </Text>
                  <TouchableOpacity onPress={handleBookNow}>
                    <View style={styles.bookNowButton10}>
                      <Text style={styles.bookNowText10}>Book Now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.cardContainer101}>
              <View style={styles.card101}>
                <Image
                  source={require("../../../assets/Package Icons/young.webp")}
                  style={styles.image10}
                />
                <View style={styles.cardContent10}>
                  <Text style={styles.heading101}>
                    Basic Women's Health Checkup
                  </Text>
                  <Text style={styles.subHeading10}>
                    Ideal for women aged{" "}
                    <Text style={styles.subHeadingSpan10}>15-40 years</Text>
                  </Text>
                  <Text style={styles.subHeading10}>
                    Includes{" "}
                    <Text style={styles.subHeadingSpan10}>85 tests</Text>
                  </Text>
                </View>

                <View style={styles.priceContainer10}>
                  <Text style={styles.price10}>
                    ₹<Text style={styles.bold10}>899</Text>
                    <Text style={styles.cross10}> ₹1500</Text>
                    <Text style={styles.discount10}> 40% Off</Text>
                  </Text>
                  <TouchableOpacity onPress={handleBookNow}>
                    <View style={styles.bookNowButton10}>
                      <Text style={styles.bookNowText10}>Book Now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.cardContainer101}>
              <View style={styles.card101}>
                <Image
                  source={require("../../../assets/Package Icons/family.webp")}
                  style={styles.image10}
                />
                <View style={styles.cardContent10}>
                  <Text style={styles.heading101}>
                    Basic Women's Health Checkup
                  </Text>
                  <Text style={styles.subHeading10}>
                    Ideal for women aged{" "}
                    <Text style={styles.subHeadingSpan10}>15-40 years</Text>
                  </Text>
                  <Text style={styles.subHeading10}>
                    Includes{" "}
                    <Text style={styles.subHeadingSpan10}>85 tests</Text>
                  </Text>
                </View>

                <View style={styles.priceContainer10}>
                  <Text style={styles.price10}>
                    ₹<Text style={styles.bold10}>999</Text>
                    <Text style={styles.cross10}> ₹1149</Text>
                    <Text style={styles.discount10}> 13% Off</Text>
                  </Text>
                  <TouchableOpacity onPress={handleBookNow}>
                    <View style={styles.bookNowButton10}>
                      <Text style={styles.bookNowText10}>Book Now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.eleventhcard}>
          <Text style={styles.heading11}>Thousands of Happy Customers</Text>
          <FlatList
            ref={scrollViewRef}
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.eighthcard1}>
          <View style={styles.cardContent8}>
            <Text style={styles.heading8}>Reliable and Trustworthy</Text>
            <Text style={styles.subHeading8}>
              All packages are fulfilled by Certified diagnostic laboratories.
              These labs have 1000's of outlets across India, Middle East and
              Bangaladesh.
            </Text>
          </View>
          <View style={styles.cardContent8}>
            <Text style={styles.heading8}>Extensive test coverage</Text>
            <Text style={styles.subHeading8}>
              With over 60 tests ranging from Iron Deficiency to Cardiac
              Risks, our Health Checkups are ideal for identifying health risk
              well in advance and taking preventive steps towards them.
            </Text>
          </View>
          <View style={styles.cardContent8}>
            <Text style={styles.heading8}>Simple and Convenient</Text>
            <Text style={styles.subHeading8}>
              A qualified and certified phalebotomist will visit your home to
              collect the samples at the time specified by you. They carry Ice
              Boxes and Gel Packs to ensure that the samples are transported
              to the labs in a hygenic and secure manner.
            </Text>
          </View>
          <View style={styles.cardContent8}>
            <Text style={styles.heading8}>Digital Reports</Text>
            <Text style={styles.subHeading8}>
              A detailed report will be shared with you over mail with in 24
              to 72 hours of sample collection.
            </Text>
          </View>
        </View>
        <View style={styles.cardContent12}>
          {/* <Text style={styles.heading12}>We serve in</Text>
                <Text style={styles.subHeading12}>Bangalore, Hyderabad, Chennai, Mumbai, Delhi, Pune, Navi Mumbai, Thane,  Gurgaon.</Text> */}
        </View>
      </ScrollView>

      <View style={styles.fixedBottomContainer}>
        <View style={[styles.cardCard, styles.secondCardCard]}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {" "}
              ₹<Text style={styles.bold}>1099</Text>
              <Text style={styles.cross}>₹1400</Text>
              <Text style={styles.discount}> 21% Off</Text>
            </Text>
            <TouchableOpacity onPress={handleBookNow}>
              <View style={styles.bookNowButton}>
                <Text style={styles.bookNowText}>Book Now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaf7f4',
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
  },
  fourthcard: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
  },
  secondCard: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  thirdCard: {

    paddingVertical: 10,
    marginTop: 5,


  },
  image: {
    width: '100%',
    height: 300,
  },
  image4: {
    alignSelf: 'center',
    width: '80%',
    height: 300,
  },
  cardContent: {

    padding: 20,
  },
  cardContent4: {
    padding: 20,
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  heading4: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 14,
    color: '#666',
  },
  subHeading4: {
    fontSize: 14,
    color: '#666',
  },
  subHeading41: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
  },
  subHeadingSpan: {
    fontWeight: 'bold',
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  cross: {
    textDecorationLine: 'line-through',
    color: 'grey',
    fontSize: 14,
  },
  discount: {
    color: 'green',
  },
  bookNowButton: {
    backgroundColor: '#189AB4',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  bookNowButton1: {
    backgroundColor: '#189AB4',
    paddingVertical: 15,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  bookNowText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bookNowText1: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },

  iconContainer1: {
    width: 50,
    height: 50,
    justifyContent: 'center',

    marginRight: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  icon3: {
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading1: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subHeading1: {
    fontSize: 12,
    color: '#666',
  },
  subHeading2: {
    fontSize: 10,
    color: '#666',
  },
  bookNowContainer: {
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
  },


  fifthcard: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
  },
  cardContent5: {
    padding: 20,
  },
  heading5: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subHeading5: {
    marginTop: 30,
    fontSize: 14,
    color: '#666',
  },
  grayMargin: {
    backgroundColor: '#ccc',
    height: 1,
    marginTop: 10,
  },
  sixthCard: {

    paddingVertical: 10,
    marginTop: 5,
  },
  cardContent6: {
    padding: 20,
  },
  leftContent6: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent61: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer6: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  icon6: {
    width: '100%',
    height: '100%',
  },
  textContainer6: {
    flex: 1,
    justifyContent: 'center',
  },
  heading61: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subHeading6: {
    fontSize: 12,
    color: '#666',
  },
  heading6: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',

  },

  seventhCard: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: 5,
  },
  heading71: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent7: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent71: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer7: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  icon7: {
    width: '100%',
    height: '100%',
  },
  textContainer7: {
    flex: 1,
  },
  heading7: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeading7: {
    fontSize: 12,
    color: '#666',
  },
  arrowContainer7: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },

  textContentContainer: {

  },
  textContent7: {
    marginTop: 30,
    marginLeft: 10,
  },
  textContent71: {
    marginTop: 10,
    marginLeft: 10,
  },
  view: {
    alignSelf: 'flex-end',
    color: '#189AB4',
    fontSize: 18,
  },
  view7: {
    alignSelf: 'flex-end',
    color: '#189AB4',
    fontSize: 18,
  },

  eighthcard: {

    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
  },
  eighthcard1:{
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
    marginBottom:40,
  },
  cardContent8: {
    paddingHorizontal:20,
    paddingVertical:10,
  },
  heading8: {
    fontSize: 18,


    fontWeight: 'bold',
  },
  subHeading8: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  subHeading81: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },

  ninthCard: {

    paddingVertical: 10,
    marginTop: 5,

  },
  cardContent9: {
    padding: 20,
  },
  heading9: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 18,
  },
  leftContent9: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent91: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer9: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  icon9: {
    width: '100%',
    height: '100%',
  },
  textContainer9: {
    flex: 1,
    justifyContent: 'center',
  },

  subHeading9: {
    fontSize: 12,
    color: '#666',
  },
  tenthcard: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
  },
  cardContent10: {
    padding: 20,
  },
  image10: {
    width: '100%',
    height: 300,
  },
  heading10: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  heading101: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subHeading10: {
    fontSize: 14,
    color: '#666',
  },
  subHeadingSpan10: {
    fontWeight: 'bold',
    color: 'black',
  },
  priceContainer10: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price10: {
    fontSize: 20,
  },
  bold10: {
    fontWeight: 'bold',
  },
  cross10: {
    textDecorationLine: 'line-through',
    color: 'grey',
    fontSize: 14,
  },
  discount10: {
    color: 'green',
  },
  bookNowButton10: {
    backgroundColor: '#189AB4',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,


  },
  bookNowText10: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardContainer101: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  card101: {
    marginRight: 10,
  },

  eleventhcard: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
    padding: 40,
  },
  heading11: {
    fontSize: 20,
    marginBottom: 20,

    fontWeight: 'bold',
    textAlign: 'center',
  },

  cardContentContent: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  textText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  subTextText: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardContent12: {
    padding: 20,
  },
  heading12: {
    fontSize: 16,
    color: '#666',

    fontWeight: 'bold',
  },
  subHeading12: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },


  cardCard: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#fff',
  },
  secondCardCard: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  fixedBottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default Packages;