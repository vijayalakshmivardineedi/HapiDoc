import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const BlogContent = () => {
     const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
    const [isLiked, setIsLiked] = useState(false); 
    const [likes, setLikes] = useState(0);

  const handlePostComment = () => {
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Comment:", comment);
   
  };
  
  const handleLike = () => {
    setIsLiked(!isLiked); 
    setLikes(isLiked ? likes - 1 : likes + 1); 
  };
const handleHomePress = () => {
  navigation.navigate("BlogPage"); // Replace 'HomeScreen' with the name of your home screen component
};
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View> */}

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.main}>
            <Text style={styles.text}>General Health / </Text>
            <TouchableOpacity onPress={handleHomePress}>
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>
            10 Things To Include In Your Winter Skincare Routine
          </Text>
          <Text style={styles.text2}>
            By HapiDoc Published on- 24 April 2024
          </Text>
          <Image
            source={require("../../../assets/doctor Images/blog6.png")}
            style={styles.image}
          />
          <Text style={styles.paragraph}>
            In the chilly winter months, it's crucial to give your skin some
            extra care. The cold weather, low humidity levels, and indoor
            heating can take a toll on your skin, leading to dryness, flakiness,
            itching and even skin conditions like eczema. To combat these
            problems, it is essential to establish a winter skincare routine
            that addresses the specific needs of your skin during this season.
            In this blog, we will talk about ten important products for winter
            skincare that can help you maintain healthy and glowing skin
            throughout the colder months. So, let's dive in and discover the
            important products for your daily skin care routine at home during
            winter!
          </Text>
          <Text style={styles.heading2}>1. Hydrating Cleanser</Text>
          <Text style={styles.paragraph}>
            One crucial element for your winter skin care is a hydrating
            cleanser that gently cleanses your skin without drying it out.
            Unlike regular cleansers, which can strip away natural oils,
            hydrating cleansers are designed to remove dirt, excess oil and dust
            while maintaining their moisture balance. Ideally, it would be best
            if you used a hydrating cleanser twice daily, in the morning and
            evening. Moreover, use lukewarm water for rinsing the face instead
            of hot water to avoid further skin dryness.
          </Text>
          <Text style={styles.heading2}>2. Deep Hydration Moisturiser</Text>
          <Text style={styles.paragraph}>
            The role of a moisturiser in your winter skin care routine cannot be
            overstated. A moisturiser acts as a protective barrier for your
            skin. A deep hydration moisturiser is designed to nourish and
            replenish your skin's moisture, ensuring that it stays hydrated and
            radiant throughout the winter months. For proper moisturisation, you
            must apply your moisturiser twice a day, after cleansing and toning
            your skin.
          </Text>
          <Text style={styles.heading2}>3. Exfoliation Products</Text>
          <Text style={styles.paragraph}>
            Exfoliators work by removing dead skin cells, unclogging pores, and
            promoting cell turnover. Gentle exfoliators with natural ingredients
            like sugar or oatmeal can be a great addition to your daily skin
            care routine at home.
          </Text>
          <Text style={styles.heading}>4. Sunscreen</Text>
          <Text style={styles.paragraph}>
            Even though the sun might not feel as strong during the colder
            months, harmful UV rays can still damage your skin. Sunscreen helps
            protect your skin from these rays and prevents premature ageing,
            dark spots, and skin cancer. You can opt for a broad-spectrum
            sunscreen with at least SPF 30, which will shield you from both UVA
            and UVB rays.
          </Text>
          <Text style={styles.heading}>5. Hand Cream</Text>
          <Text style={styles.paragraph}>
            During winter, hands are often exposed to harsh conditions that can
            leave them dry and cracked. This is where a hand cream becomes
            essential for winter skin care . A good hand cream with shea butter
            or glycerin can act as a protective barrier, locking in moisture and
            preventing hand dryness. For maximum benefit, be sure to massage it
            into your skin thoroughly, paying attention to the areas between
            your fingers and on the back of your hands.
          </Text>
          <Text style={styles.heading}>6. Lip Balm</Text>
          <Text style={styles.paragraph}>
            Chapped and dry lips are a common problem during the winter season.
            Regularly applying a good quality lip balm containing natural
            ingredients like beeswax, shea butter, or coconut oil can help you
            keep your lips soft and supple throughout the cold weather.
          </Text>
          <Text style={styles.heading}>7. Eye Cream/Gel</Text>
          <Text style={styles.paragraph}>
            The delicate skin around your eyes requires special attention during
            the winter months. Dark circles and puffiness around the eyes are
            some common concerns during this season. Applying an eye cream or
            gel containing vitamin C and caffeine can help reduce inflammation
            and improve blood circulation, thus minimising the appearance of
            dark circles and puffiness.
          </Text>
          <Text style={styles.heading}>
            8. Serum with Hyaluronic Acid or Vitamin E
          </Text>
          <Text style={styles.paragraph}>
            Adding a serum with hyaluronic acid/vitamin E to your daily skincare
            routine at home can prevent extreme dryness and give you a healthy
            and glowing complexion throughout the winter season. Hyaluronic Acid
            acts as a humectant, attracting moisture to the skin and preventing
            dryness. Vitamin E, on the other hand, is a potent antioxidant that
            protects your skin from free radicals and reduces inflammation. The
            serum should be applied after cleansing and toning your face.
          </Text>
          <Text style={styles.heading2}>
            9. Night Cream or Overnight Hydrating Mask
          </Text>
          <Text style={styles.paragraph}>
            You can provide additional care and nourishment to your skin by
            incorporating a night cream or an overnight hydrating mask into your
            winter skin care routine. Night creams and hydrating masks are
            specifically formulated to restore moisture levels and repair the
            skin barrier. These products work wonders by providing intense
            moisture and hydration to your skin while you sleep.
          </Text>
          <Text style={styles.heading2}>10. Balanced Diet</Text>
          <Text style={styles.paragraph}>
            While all the above-listed products work on your skin from the
            outside, a balanced diet nourishes your skin from within. Hence,
            foods rich in antioxidants, such as fruits, vegetables, and nuts,
            which help combat free radicals, can be a great addition to your
            diet for winter skin care. Additionally, you can also include
            omega-3 fatty acids found in fish and flaxseeds as they have
            anti-inflammatory properties which are beneficial for the skin.
          </Text>
          <Text style={styles.heading2}>Takeaway</Text>
          <Text style={styles.paragraph}>
            Taking care of your skin during winter requires the use of some
            additional products to combat the cold and dry weather. Adding vital
            products such as a hydrating moisturiser, lip balm, hand cream,
            sunscreen, etc. to your winter skincare routine can keep dryness and
            other skin issues at bay. With consistent care and attention, you
            can have radiant skin even during the harsh winter season.
          </Text>
          <Text style={styles.servicesHeading}>SERVICES</Text>
          {/* Container 1 */}

          <View style={styles.serviceContainer}>
            <Image
              source={require("../../../assets/doctor Images/3d-isometric-lettering-artificial-intelligence-with-robot-and-hand-holding-the-brain-text.gif")}
              style={styles.serviceImage}
            />
            <Text style={styles.serviceText}>Check Your Symptoms Here</Text>
          </View>

          <View style={styles.serviceContainer}>
            <Image
              source={require("../../../assets/doctor Images/consultation.png")}
              style={styles.serviceImage}
            />
            <Text style={styles.serviceText}>Online Consulations</Text>
          </View>

          <View style={styles.serviceContainer}>
            <Image
              source={require("../../../assets/doctor Images/lab1.png")}
              style={styles.serviceImage}
            />
            <Text style={styles.serviceText}>Order Online Test</Text>
          </View>

          <Text style={styles.commentHeading}>Leave a Comment</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Write Comment here.........."
            value={comment}
            onChangeText={setComment}
            multiline={true}
          />
          <TouchableOpacity style={styles.button} onPress={handlePostComment}>
            <Text style={styles.buttonText}>Post Comment</Text>
          </TouchableOpacity>

          <View style={styles.cardContainer}>
            <Text style={styles.additionaltext}>Recommended for you</Text>
            <View style={styles.card}>
              <Image
                source={require("../../../assets/doctor Images/blog7.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardHeading}>
                DIY Tea Tree Oil Recipes For A Healthy Hair And Scalp
              </Text>
              <Text style={styles.cardText}>
                The hectic pace of modern life can often leave us neglecting our
                personal care routines, particularly those for our hair and
                scalp. This is evident when we consider that approximately 50%
                of the Indian population experience some form of hair or scalp
                concerns....
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                source={require("../../../assets/doctor Images/blog8.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardHeading}>
                Unlocking The 7 Essential Steps In Morning Skincare Ritual
              </Text>
              <Text style={styles.cardText}>
                Skincare isn't a luxury anymore, it's an absolute necessity. The
                onset of most skin-related issues can be significantly delayed
                by following a structured daily skin care routine at home...
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                source={require("../../../assets/doctor Images/blog9.png")}
                style={styles.cardImage}
              />
              <Text style={styles.cardHeading}>
                What Are The Benefits Of Using Zincovit Tablets?
              </Text>
              <Text style={styles.cardText}>
                For adults, maintaining good health can take a backseat. Most of
                us don't realise the importance of essential nutrients until the
                onset of deficiency-associated symptoms...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="logo-twitter"
            size={26}
            color="#1DA1F2"
            style={styles.icon}
          />
          <Ionicons
            name="logo-whatsapp"
            size={26}
            color="#25D366"
            style={styles.icon}
          />
          <Ionicons
            name="logo-facebook"
            size={26}
            color="#1877F2"
            style={styles.icon}
          />
          <Ionicons
            name="paper-plane"
            size={26}
            color="#0088cc"
            style={styles.icon}
          />
          <Ionicons
            name="logo-linkedin"
            size={26}
            color="#2867B2"
            style={styles.icon}
          />
          <Ionicons name="mail" size={26} color="#007bff" style={styles.icon} />
        </View>

        <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
          <Ionicons
            name="heart"
            size={26}
            color={isLiked ? "#FF0000" : "#000"}
          />
          <Text style={styles.likeText}>{likes}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: "#fff", 
    marginTop: 40,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
main:{
flexDirection:"row",
},
  text: {
    fontSize: 16,
    color: "#189ab4",
  },
  heading: {
    color: "#333",
    fontSize: 20,
    marginTop: 10,
    color: "#05445e",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 14,
    color: "#189ab4",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 150, 
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24, 
  },
  heading2: {
    color: "#333",
    fontSize: 20,
    marginTop: 20,
    color: "#05445e",
    fontWeight: "bold",
  },
  servicesHeading: {
    color: "#333",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    color: "#05445e",
    fontWeight: "bold",
  },
  serviceContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceImage: {
    width: 40,
    height: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
  serviceText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    marginTop: 10,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#189ab4",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  commentHeading: {
    color: "#333",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    color: "#05445e",
    fontWeight: "bold",
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
  additionaltext: {
    color: "#333",
    fontSize: 24,

    marginBottom: 10,

    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  likeText: {
    marginLeft: 5,
  },
  icon: {
    marginRight: 20,
    marginTop: 20,
  },
});

export default BlogContent;
