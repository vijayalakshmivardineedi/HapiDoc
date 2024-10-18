import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const DisclaimerScreen = () => {
  const handleAgree = () => {
    navigation.navigate('NextScreen');
  };
  const handleDisagree = () => {
    console.log('User disagreed to the disclaimer');
  };
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
      <View style={styles.header}>
          <View style={ styles.termsContainer}>
            <Text style={styles.termsTitle}> Terms and Conditions</Text>
          </View>
      </View>
      
      <Text style={styles.disclaimerText}>
        The Terms contained herein, form an integral part of the
        Medicine Terms and should be read with the Medicine Terms. In
        case of inconsistencies between the Medicine Terms and the
        Terms contained herein, Medicine Terms shall prevail.
      </Text>
      <View >
        <Text style={styles.howTitle}>How it Works:</Text>
      </View>
      <Text style={styles.disclaimerText}>
        Customer adds medicine he/she is interested in ordering,
        through the Medicine app, by logging in through the Medicine user
        id, uploads prescription for ordering the medicine, specifies
        the delivery location and places the order. The pharmacy
        receives the request and prescription on their software. The
        pharmacy then verifies the order placed and the prescription
        uploaded, upon there being a stock starts processing the
        order once indicated to Medicine by pharmacy, Medicine may
        inform the customer about the availability of the medicine or
        whether the medicine can be delivered to the particular
        location at the time slot requested for.
      </Text>
      <Text style={styles.disclaimerText}>
        We understand that you are over eighteen (18) years of age
        and are accessing this feature on the app, after having read
        Section 2 of these Terms. We are not liable in case, you have
        shared your login id and password and a third party is placing
        order on behalf of you. You shall be solely liable for all the
        mishaps caused from the usage of your account with Medicine.com.
      </Text>
      <Text style={styles.disclaimerText}>
        If you are the parent/legal guardian/authorised person for The
        patient disclosed herein, you affirm that you are over the age
        of majority, and have full authority to sign for and provide the
        above representations to the pharmacy/ Medicine and/or its
        affiliates on the Patient's behalf.
      </Text>
      <Text style={styles.disclaimerText}>

        On our app a Caregiver can order prescription medicines on
        your behalf. Medicine requires either you or your
        nurse/caretaker (“Caregiver”) to confirm he/she is completely
        aware of the indications, side effects, drug interactions,
        effects of missed dose or overdose of the medicines he/she
        orders from us. It is imperative to seek professional advice
        from your physician before purchasing or consuming any
        medicine from Medicine.
      </Text>
      <View >
        <Text style={styles.howTitle}>Medication available only upon providing prescription</Text>
      </View>
      <Text style={styles.disclaimerText}>
        Medicine, takes all precautions to strictly abide by the laws and
        regulations set forth in the dispensing of prescription
        medications. By placing the order for your prescription
        medicines, you acknowledge and accept the following terms
        regarding the purchase of any prescription medicines.
      </Text>
      <Text style={styles.disclaimerText}>
        Medicine will not dispense any prescription medication without
        a valid prescription from a licensed physician. Also, before
        you can choose the low-cost generic option in the app, please
        ask your doctor to add the generic drug to your prescription.
      </Text>
      <Text style={styles.disclaimerText}>
        Medicine may, at its discretion, share your prescription and
        other pertinent information with a third-party network of
        certified medical doctors.
      </Text>
      <Text style={styles.disclaimerText}>
        If you are ordering prescription medication(s), you hereby
        confirm that you will send us a scanned copy of your valid
        prescription(s) and this prescription shall then be subject to
        the scrutiny of and approval by our qualified pharmacists. In
        case the prescription(s) provided by you is rejected for any
        reason after screening, you will have the option of
        consultation via telemedicine with a qualified doctor
        arranged by us. You are aware of the potential risks,
        consequences, and benefits of teleconsultation.
      </Text>
      <Text style={styles.disclaimerText}>
        If you do not understand any of the information provided in
        the prescription, please verify it with the doctor or the
        pharmacist. Please stop the prescribed medicines in case of
        any adverse reaction / side effects and go to the nearest
        registered medical practitioner for an in-person consultation.
      </Text>
      <Text style={styles.disclaimerText}>
        The drug information provided is for informative purposes
        only and this app is not intended to provide diagnosis,
        treatment or medical advice. We are not liable for any
        adverse effects or harm to you as a result of your reliance on
        the information in the Website.

      </Text>
      <Text style={styles.disclaimerText}>
        By your use of the services, you acknowledge that such use is
        at your sole risk, including responsibility for all costs
        associated with all necessary servicing or repairs of any
        equipment you use in connection with these services.
      </Text>
      <Text style={styles.disclaimerText}>

        As partial consideration for your access to our services and
        use of the content, you agree that Medicine is not liable to you in
        any manner whatsoever for decisions you may make or your
        actions or non actions in reliance upon the content.
      </Text>
      <View >
        <Text style={styles.howTitle}>Price and Payment</Text>
      </View>
      <Text style={styles.disclaimerText}>
        There are options of ‘cash on delivery’ and ‘payment by card’
        on delivery. Sometimes we could add discounts, but this could
        change from time to time.

      </Text>
      <Text style={styles.disclaimerText}>
        All our product prices include all applicable statutory taxes,
        fees and subject to availability.

      </Text>
      <Text style={styles.disclaimerText}>
        We make every effort to make sure that the pricing and
        availability of products on the app is accurate and up to date.
        However, rarely, there may be an error on the pricing of a
        product or an error related to product availability. In such
        cases, we are not responsible for any typographical errors
        and we reserve the right to cancel the sale.

      </Text>
      <Text style={styles.disclaimerText}>
        We reserve the right to correct any inaccuracies or omissions
        related to pricing and product availability/descriptions, even
        after you have submitted your order, and to change or update
        any other information at any time without prior notice.

      </Text>
      <Text style={styles.disclaimerText}>
        We are not charging for delivery, however, watch out for the
        space because the Terms and Conditions are subject to
        change. Delivery times may vary depending on the shipping
        destination.

      </Text>
      <Text style={styles.disclaimerText}>
        Please note that delivery times are estimates only and are not
        guaranteed, due to circumstances out of our control. You can
        make the payment via any one of the following methods of
        payment: Credit/Debit Card, Net Banking or Cash on Delivery

      </Text>
      <Text style={styles.disclaimerText}>
        Credit/Debit Card and Net Banking Payments are processed
        via our online payment service partners.

      </Text>
      <View >
        <Text style={styles.howTitle}>Terms of Sale</Text>
      </View>
      <Text style={styles.disclaimerText}>
        Medicine may accept or decline any order placed by a Customer
        in its absolute discretion without liability to you. We reserve,
        the right to discontinue any programme or offer on the
        app/website.

      </Text>
      <Text style={styles.disclaimerText}>
        We reserve the right, without prior notice, to limit the order
        quantity of any medicine /such other products.
      </Text>
      <Text style={styles.disclaimerText}>

        We acknowledge and you agree that you have fully and
        accurately disclosed your personal information and personal
        health information and consent to its use by the pharmacy,
        Medicine and/or its affiliates. You confirm that you have had a
        physical examination by a physician and do not require a
        physical examination.

      </Text>
      <Text style={styles.disclaimerText}>
        You understand that all products shall be sold & dispensed by
        a registered pharmacist.
      </Text>
      <Text style={styles.disclaimerText}>

        If you are the patient/parent/authorised person on behalf of
        the patient, you authorise and appoint the pharmacy/ Medicine
        and/or its affiliates, as your attorney and agent, to take all
        steps, sign all documents and to act on your behalf as if you
        were personally present and acting for yourself for the
        limited purposes of (a) obtaining a valid prescription for any
        prescription which you have sent the pharmacy; and (b)
        packaging your prescriptions and delivering them to you.
      </Text>
      <Text style={styles.disclaimerText}>

        By making purchase through our app, you hereby authorise
        Medicine and/or its affiliates to ship the order by post/courier to
        your designated location. This authorisation shall include, but
        not be limited to: collecting and using your personal and
        personal health information as reasonably necessary for the
        fulfillment of your order.

      </Text>
      <Text style={styles.disclaimerText}>
        We do not provide, Schedule X drugs and Schedule H are
        provided only on prescription. However, the same shall be
        provided to you solely at our discretion and we have the right
        to cancel orders should there be any unsuspected activity in
        the volume/quantity of medicine placed and the frequency as
        well.
      </Text>
      <Text style={styles.disclaimerText}>

        Your information, i.e. prescription when uploaded while
        placing an order for medicines, shall be made available to our
        pharmacies and our delivery guys for the purpose of sourcing
        the medicine and having it delivered to you.
      </Text>
      <Text style={styles.disclaimerText}>

        Medicine reserves the right to set quantity-per-order limits on
        any and all items sold on these the app. Medicine may also limit
        the item quantity available to any single person or household
        over a given period of time. These restrictions may be applied
        to orders using the same credit card or billing or shipping
        address.

      </Text>
      <Text style={styles.disclaimerText}>
        Medicine is an e Commerce platform, we only provide
        technology to ensure users can order medicines and deliver
        them to you. Should there be any issues with regard to the
        same then Medicine shall not be liable because Medicine is neither
        the manufacturer nor the pharmacist selling the same. We
        are not the manufacturers of the medicines and all the orders
        are merely routed for delivery by us through our
        representatives or agents and shall not be liable for any
        mishaps.

      </Text>
      <Text style={styles.disclaimerText}>
        A substitute will only be made in the event an item is out of
        stock and the identical brand and product is available in a
        form that is of equal or greater value, e.g. larger quantity,
        packaged with a trial sample, updated product packaging, etc.
        A product substitution will occur at no extra cost and, if the
        substituted item is less expensive than the original item, the
        lower price will be charged.
      </Text>
      <View >
        <Text style={styles.howTitle}>Use of Information on the app/website</Text>
      </View>
      <Text style={styles.disclaimerText}>
        The information provided on the app/website or through our
        services is intended for informational purposes only, and is
        not intended to diagnose, treat, cure or prevent any disease.
      </Text>
      <Text style={styles.disclaimerText}>

        We do not endorse any views or opinions that may be
        included in the app/website content, or other information
        provided through our app/website. Your submission of
        questions or reviews on our Products does not constitute a
        professional relationship between you and Medicine.
      </Text>
      <Text style={styles.disclaimerText}>

        We provide link to third-party websites, our online payment
        service partners, which process your Net Banking and
        Credit/Debit Card payments, respectively.
      </Text>
      <View >
        <Text style={styles.howTitle}>Referral Credits</Text>
      </View>
      <Text style={styles.disclaimerText}>
        If you share your code with a friend, and when the order is
        placed and successfully delivered, then you shall be provided
        with referral credit, as per our marketing campaigns/referral
        credits we are offering online. Credit points are provided at
        our discretion and not yours and we could remove anytime.
        One (1) credit point is equivalent to One (1) rupee, and can be
        used only on Medicine order.
      </Text>
      <View >
        <Text style={styles.howTitle}>Disclaimer</Text>
      </View>
      <Text style={styles.disclaimerText}>
        We provide content on our app, but they do not, contain
        nformation about all medical conditions and not all
        nformation could be applicable to your personal
        circumstances. The content is not intended for diagnosis and
        should not be used as a substitute for consultation with your
        physician. We do not warrant content to be accurate,
        complete or current. Medicine is a distributor of such content
        and not its publisher. Our third party suppliers may express
        certain opinions or provide certain information and offers.
        The content we make available, whether it is about the
        products services, have been provided on an “as is” and “as
        available” basis without warranty of any kind, whether
        express, implied or statutory. Medicine makes no warranties as
        to the completeness, accuracy, timeliness, or reliability of
        information or offers supplied by third parties and published
        by Medicine. Medicine does not guarantee or warrant the
        performance of any third party, including any such third
        party's conformance to any law, rule, regulation or policy. To
        the full extent not precluded by applicable law, we disclaim
        and exclude all warranties with respect to all services,
        information and/or products contained on these services, or
        linked hereto (collectively throughout, “content”), express,
        implied or statutory.
      </Text>
      <Text style={styles.disclaimerText}>

        This disclaimer includes, but is not limited to, any and all
        warranties of merchantability, fitness for a particular purpose
        and non-infringement.
      </Text>
      <Text style={styles.disclaimerText}>

        We expressly disclaim liability for technical failures,
        incomplete, scrambled or delayed transmissions and/or
        technical inaccuracies, as well as unauthorized access of user
        transmissions by third parties.

      </Text>
      <Text style={styles.disclaimerText}>
        Medicine reserves the right to limit quantities on all items. Each
        advertised item must be readily available for sale, unless
        specifically noted on these services will not issue a rain check
        or place a backorder for items that are out of stock.
      </Text>
      <Text style={styles.disclaimerText}>

        We take all reasonable care to ensure the availability of the A
        substitute will only be made in the event an item is out of
        stock and the identical brand and product is available in a
        form that is of equal or greater value, e.g. larger quantity,
        packaged with a trial sample, updated product packaging, etc.
        A product substitution will occur at no extra cost and, if the
        substituted item is less expensive than the original item, the
        lower price will be charged.
      </Text>
      <Text style={styles.disclaimerText}>

        We function 24 hours every day, 365 days per year. However,
        the app/website may become temporarily unavailable due to
        maintenance, server or other technical issues, or for reasons
        beyond our control. We do not warrant uninterrupted access
        to this app/website or any linked website. However, we may,
        but shall not be obliged to, issue a notice when we know of
        scheduled maintenance of our app/website.
      </Text>
      <View >
        <Text style={styles.howTitle}>Cancellation</Text>
      </View>
      <Text style={styles.disclaimerText}>

        Orders can be placed from anywhere, however we do
        deliveries inside Bengaluru and that too in selected locations
        and not necessarily all locations, , Very soon, we would be
        available at other locations too.

      </Text>
      <Text style={styles.disclaimerText}>
        Orders are taken with prescription, without which all orders
        shall be cancelled.

      </Text>
      <Text style={styles.disclaimerText}>
        If, order delivery fails multiple times then it is failure of order.

      </Text>
      <Text style={styles.disclaimerText}>
        We have the right to cancel the order if we have not received
        the prescription for the order.
      </Text>
      <View >
        <Text style={styles.howTitle}>Returns and Refund Policy</Text>
      </View>
      <Text style={styles.disclaimerText}>
        No return policy

      </Text>
      <View >
        <Text style={styles.howTitle}>Eligibility of Refunds:</Text>
      </View>
      <Text style={styles.disclaimerText}>
        The product will quality for refund if it meets the following
        one or more criteria:

      </Text>
      <Text style={styles.disclaimerText}>
        a. The ordered item(s) is/are lost or damaged during transit or
        is delivered in a tampered state (subject to photographic /
        ther proofs establishing the said tampering);
      </Text>
      <Text style={styles.disclaimerText}>

        b. The ordered item(s) is/are past its expiry date at the receipt
        period.

      </Text>
      <Text style={styles.disclaimerText}>
        c. The ordered item(s) is/are returned by the customer in
        acceptable physical condition.

      </Text>
      <View >
        <Text style={styles.howTitle}>Please note:</Text>
      </View>
      <Text style={styles.disclaimerText}>
        Refund will be completed within 7 to 10 working days to the
        original mode of transfer or to your account in case Cash-on-
        Delivery was selected as payment method. Medicine has no
        control over the bank’s refund processing time.

      </Text>
      <View >
        <Text style={styles.howTitle}>Request a Refund:</Text>
      </View>
      <Text style={styles.disclaimerText}>
        To request a refund, simply email us your order details,
        including the reason why you’re requesting a refund. You
        could also reach out to the Customer Support team at
        https://help.Medicine.com/. We take customer feedback very
        seriously and use it to constantly improve our quality of
        service.
      </Text>
      <View >
        <Text style={styles.howTitle}>Limited period offer: Guaranteed availability promise (“Offer”)</Text>
      </View>
      <Text style={styles.disclaimerText}>
        How does it work? User places an order with Medicine for the
        medicine with prescription (“Medicines”), on the platforms
        owned by Medicine, such as website, android application, iOS
        application (“Medicine Platform”). If Medicine is unable to find the
        Medicines and the user is able to procure the same
        Medicines elsewhere in the market instead, user shall be
        entitled to a reward in terms of Medicine credits* subject to the
        terms and conditions set out herein.
      </Text>
      <Text style={styles.disclaimerText}>
        1. Offer is valid only on the set Medicines which require a
        prescription
      </Text>
      <Text style={styles.disclaimerText}>
        2. Offer is not available on repeat order for the same
        Medicines, especially after Medicine having communicated the
        unavailability of the same.
      </Text>
      <Text style={styles.disclaimerText}>

        3. User should have tried ordering the Medicines on Medicine
        Platforms and Medicine should have explicitly communicated to
        the user their inability to source the Medicines.
      </Text>
      <Text style={styles.disclaimerText}>

        4. Offer is strictly applicable to users whose delivery address
        is in JP Nagar, Bengaluru with the following pin codes only:
        560078, 560108.
      </Text>
      <Text style={styles.disclaimerText}>

        5. Offer is applicable only if the Medicines is legally available
        for sale in the market.

      </Text>
      <Text style={styles.disclaimerText}>
        6. Offer will not be available where Medicine has communicated
        to the user that Medicine is able to source the Medicines, but in
        a time frame greater than 24 hours.
      </Text>
      <Text style={styles.disclaimerText}>

        7. The user should be able to show proof that the medicine
        that was not available on Medicine instead was available in the
        market, by producing valid invoice for the Medicines
        purchased, after the date of Medicine mentioning that the
        Medicines were not available on their platform, from the
        source the user purchased the Medicines.

      </Text>
      <Text style={styles.disclaimerText}>
        8. In the event that Medicine is unable to source the Medicines
        for the user, the amount compensated to user by Medicine will
        ONLY be in terms of Medicine credits, that the user can utilize to
        order other medicines/medicinal products on Medicine. The
        number of Medicine credits, added to the user’s account will be
        equivalent to the lesser of either: (i) complete value of the
        Medicines that the user ordered on Medicine or (ii) value
        equivalent to the prescribed quantity of the Medicine on the
        prescription or a month’s worth of the Medicine (whichever is
        lower).
      </Text>
      <Text style={styles.disclaimerText}>
        Please note, in the event of any conflict, Medicine shall be the
        sole judge in awarding the refund in terms of Medicine credit
        points to a user. Medicine shall at its sole discretion decide
        whether or not to award the credit points to a user, if the user
        has misused the Offer or has not followed the terms and
        conditions of the Offer set out herein or has misused the
        Offer.
      </Text>
      </View>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  howTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop:15
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor:"#eaf7f9"
  },
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#189ab4',
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  termsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,

  },
  termsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  disclaimerText: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default DisclaimerScreen;