import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const Help = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Hello! How can I help you?",
      createdAt: new Date(),
      user: { _id: 2, name: "Chatbot" },
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (newMessages = []) => {
    const userMessage = newMessages[0].text;
    const botResponse = generateChatbotResponse(userMessage);

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (botResponse.options) {
        const optionsMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: botResponse.text,
          createdAt: new Date(),
          user: { _id: 2, name: "Chatbot" },
          custom: "options",
          options: botResponse.options,
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [optionsMessage])
        );
      } else if (botResponse.questions) {
        const questionsMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: botResponse.text,
          createdAt: new Date(),
          user: { _id: 2, name: "Chatbot" },
          custom: "questions",
          questions: botResponse.questions,
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [questionsMessage])
        );
      } else {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [
            {
              _id: Math.round(Math.random() * 1000000),
              text: botResponse,
              createdAt: new Date(),
              user: { _id: 2, name: "Chatbot" },
            },
          ])
        );
      }
    }, 1000);
  };

  const generateChatbotResponse = (userMessage) => {
    switch (userMessage.toLowerCase()) {
      case "hello":
        return "Hi there! How can I assist you today?";

      case "i have a small doubt":
        return {
          text: "Okay cool! Please select one category!",
          options: [
            { title: "Medicine" },
            { title: "Lab Tests" },
            { title: "Appointments" },
            { title: "Health Records & Account" },
          ],
        };
      case "medicine":
        return {
          text: "Select Your Issue:",
          questions: [
            "1. Prescription related queries",
            "2. I am not able to place an order",
          ],
        };
      case "lab tests":
        return {
          text: "Select Your Issue:",
          questions: ["Not able to place order"],
        };
      case "appointments":
        return {
          text: "Select Your Issue:",
          questions: ["Facing problem while booking an Appointment"],
        };

      case "health records & account":
        return {
          text: "Sure! Here are some questions about health records:",
          questions: [
            "Account related queries",
            "Record related queries",
            "I want to delete my account",
          ],
        };
      default:
        return "We're sorry to hear that. Please contact support for further assistance";
    }
  };

  const handleQuestionPress = (question) => {
    const userQuestionMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: question,
      createdAt: new Date(),
      user: { _id: 1, name: "User" },
    };

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [userQuestionMessage])
    );

    if (question === "1. Prescription related queries") {
      // Generate the chatbot's response with related questions for prescription queries
      const chatbotResponse = {
        text: "Sure! Here are some questions about prescriptions:",
        questions: [
          "What is a valid prescription?",
          "How to get a valid prescription?",
          "I do not have a prescription, how do I get medicines?",
        ],
      };

      const relatedQuestionsMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: chatbotResponse.text,
        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "questions",
        questions: chatbotResponse.questions,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [relatedQuestionsMessage])
      );
    } else if (question === "What is a valid prescription?") {
      const chatbotResponse = {
        details: [
          "A valid prescription will have the following details in place:",
          "1. Date of Prescription",
          "2. Patient/s name",
          "3. Doctor's name & degree",
          "4. Duration / Dosage of medicines",
          "5. Doctor's Signature / Stamp",
          "6. Doctor's registration number",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "How to get a valid prescription?") {
      const chatbotResponse = {
        details: [
          "If you need a valid prescription, you can follow the following steps in HapiDoc website:",
          "1.Add the required items the cart",
          "2.Click on 'Go to Cart' to go to cart section",
          "3.Select delivery address and click on 'proceed'",
          "4.Duration / Dosage of medicines",
          "5.Select 'i don't have a prescription'",
          "6.Select the patient name and click 'proceed without prescription'",
          "7.Click on'proceed to pay' and complete payment",
        ],
      };
      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (
      question === "I do not have a prescription, how do I get medicines?"
    ) {
      const chatbotResponse = {
        details: [
          "Item(s)Marked 'RX' need a prescription.",
          " If you need a valid prescription, you can follow the mentioned steps in update HapiDoc app/ website",
          "1.Add the required items in ths cart",
          "2.Click on 'Go to Cart' to go to cart section",
          "3.Select delivery address and click on 'proceed'",
          "4.Select 'Get a Free prescription'",
          "5.Select the patient name and click 'proceed'",

          "You will receive a call within 30 min",
        ],
      };
      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "2. I am not able to place an order") {
      // Provide a response and wait for the user's input
      const chatbotResponse = {
        text: "Sure! Here are some questions about prescriptions:",
        questions: [
          "Technical error while making payment",
          "My money got deducted but order not placed",
        ],
      };

      const relatedQuestionsMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: chatbotResponse.text,
        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "questions",
        questions: chatbotResponse.questions,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [relatedQuestionsMessage])
      );
    } else if (question === "Technical error while making payment") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "Here are a few things that you can do to fix it",
          "1) Payment errors:",
          "a. You can check the latest payment status of all payments in  'My Account' --> 'My Payments'  section",
          "b. If any payment is in pending state, please wait for 5 minutes to check again till payment status shows as either Success or Failure",
          "b. If any payment is in pending state, please wait for 5 minutes to check again till payment status shows as either Success or Failure.",
          "c. If any payment has failed, please retry with an alternative payment method.If any money got deducted and your order failed, it would have already been credited to your source payment mode's account. Kindly check respective payment mode's account statement. If the refund is not reflecting there, kindly wait as it is generally processed by your bank/payment provider within 7 working days",
          "2) App crashes: Uninstall the app and install it again",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "My money got deducted but order not placed") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "If we receive the payment you will get the order confirmation or if it does not credited to us, you will automatically get the refund within 7 working days .",

          "For UPI refunds, please note that the refund amount gets directly credited in the bank account and does not reflect in the UPI app. We would request you to check the bank account statement for such payments.",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    }
    if (question === "Not able to place order") {
      // Generate the chatbot's response with related questions for prescription queries
      const chatbotResponse = {
        text: "Sure! Here are some questions about prescriptions:",
        questions: [
          "Not able to find slots/ Area is non-serviceable",
          "Test is not available",
          "Want More details about test/packages",
          "Payment Failed",
        ],
      };

      const relatedQuestionsMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: chatbotResponse.text,
        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "questions",
        questions: chatbotResponse.questions,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [relatedQuestionsMessage])
      );
    } else if (question === "Not able to find slots/ Area is non-serviceable") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "Kindly call our health advisors team on 18005721111 so that we can check for serviceability and arrange a slot for you on priority.",
          "If we are not able to resolve your issue on call, kindly raise a request here with your address and pin code, Our team will make every effort to help you place your diagnostic text order successful",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "Test is not available") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "You can search for the test/packages as per your requirements on our homepage. Click on button below to search for a test.",
          "Kindly call our health advisors team on 18005721111 so that we can check for serviceability and arrange a slot for you on priority.",
          "If we are not able to resolve your issue on call, kindly raise a request here with your address and pin code, Our team will make every effort to help you place your diagnostic text order successful",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "Want More details about test/packages") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "You can view all the details about a test/ package on our test details page",
          "Kindly call our health advisors team on 18005721111 for more help on our offerings",
          "If we are not able to resolve your issue on call, kindly raise a request here with your address and pin code and Test/Package name you want ro more details about. Our team will make every effort to help you place your diagnostic text order successful",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "Payment Failed") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "We are Sorry to know that your order has not been confirmed yet, despite the amount being debited from your account.",
          " You can check the status of your order on the app under -My order Section.",
          "In case of urgent queries, you can also reach out to us on 1800782678 to speak to our executives. We assure you that we will make every effort to have your order confirmed at the earliest.",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    }
    if (question === "Facing problem while booking an Appointment") {
      // Generate the chatbot's response with related questions for prescription queries
      const chatbotResponse = {
        text: "Sure! Here are some questions about prescriptions:",
        questions: [
          "Need help in booking appointment",
          "Can't find required slot with the Doctor",
          "My money got deducted but no confirmation on appointment.",
        ],
      };

      const relatedQuestionsMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: chatbotResponse.text,
        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "questions",
        questions: chatbotResponse.questions,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [relatedQuestionsMessage])
      );
    } else if (question === "Need help in booking appointment") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "You can follow these steps to book appointment.",
          "1.Login to HapiDoc mobile App",
          "2.Go to Book Doctor Appointment",
          "3.Type the name of the doctor or select the field in which you want to consult",
          "4.Select the doctor and choose an available slot as per your convenience",
          "5.To confirm the chosen slot,complete the payment ",
          "If you need further help in booking appointment, kindly contact us at 040-46257263263",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "Can't find required slot with the Doctor") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "Doctors have opened up maximum slots they can,while also covering for their hospitals duties. You can request a future slot by following these steps:",

          "1.Select the doctor",
          "2.Click on 'Schedule for Later'",
          "3.Select the required future date from calender",
          "4.Select a suitable slot & proceed to Booking",

          "You will be notified upon confirmation of your requested slot.",

          "If you need further help in booking appointment, kindly contact us at 040-478584545.",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (
      question === "My money got deducted but no confirmation on appointment."
    ) {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "You can check the status of your appointment in app by following below steps:",
          "1.Go to the 'Appointments' section in the app",
          "2.Click on'Active Appointments'",
          "3.Select your respective family member profile for which appointment was booked from 'Select Member' option & refresh the page",
          "4.Booked appointment should be visible & you can proceed to Consult Room",

          "If the appointment is in Cancelled or payment Failed state, a refund is automatically triggered and it generally reflects in your source payment mode within 7 working days from the date of cancellation. You can check the latest payment status of all payments in'My Account'-> 'My Payments' section",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    }
    if (question === "Account related queries") {
      // Generate the chatbot's response with related questions for prescription queries
      const chatbotResponse = {
        text: "Sure! Here are some questions about prescriptions:",
        questions: [
          "This is not my health record",
          "Personal details for my profile are wrong",
          "My record is not visible on app",
          "I need to remove a UHID linked to my account ",
          "I have multiple UHIDs for the same person",
        ],
      };

      const relatedQuestionsMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: chatbotResponse.text,
        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "questions",
        questions: chatbotResponse.questions,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [relatedQuestionsMessage])
      );
    } else if (question === "This is not my health record") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "Find Your Record via a Mobile Number Log-in Correction",
          "Here's quick fix: check if you're using a different mobile number than the one linked to your UHID. If thats the case, just log out and log back in with the correct number. Give it a go, and you shall be on track in no time!",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "Personal details for my profile are wrong") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "Update Family Info Effortlessly- Share Details for Prompt Result",
          "Need to edit a family member's details? Here's all you need to do:",
          "Patient's Full Name:",
          "Date Of Birth(dd/mm/yy):",
          "Gender:",
          "Relation to you:",
          "Email Address:",
          "Aadhar Card Soft Copy:",

          "Don't worry, WE'VE GOT THIS!Expert an update within 48 working hours after you submit the details by clicking the button below.",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "My record is not visible on app") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "Find Your Record via a Mobile Number Log-in Correction!",
          "1.Check if you're using a different mobile number than the one linked to your UHID. If that's the case, just log out and log back in with the correct number. Give it a go, and you shall be on track in no time!",
          "2.Certain test are not shown on the app due to sensitivity in nature. Please collect the same from your test center."

        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "I need to remove a UHID linked to my account ") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details:[

         "Quick Fix-Archive UHIDs!",
         "Go to your profile and click on 'Manage Family Members' and select desired UHID's to Archive."
     ]   };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "I have multiple UHIDs for the same person") {
      // Display the user's question and then render chatbot questions below
       const chatbotResponse = {
         details: [
           "Quick Fix-Archive UHIDs!",
           "Go to your profile and click on 'Manage Family Members' and select desired UHID's to Archive.",
         ],
       };

       const chatbotResponseMessage = {
         text: chatbotResponse.text,
         _id: Math.round(Math.random() * 1000000),

         createdAt: new Date(),
         user: { _id: 2, name: "Chatbot" },
         custom: "details",
         details: chatbotResponse.details,
       };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    }

    if (question === "Record related queries") {
      // Generate the chatbot's response with related questions for prescription queries
      const chatbotResponse = {
        text: "Sure! Here are some questions about prescriptions:",
        questions: [
          "I have not received my full reports",
          "I have an issue with my digitized report",
          "My record is not available on the app",
          "Issue is downloading records",
          "My self-uploaded record did not digitize",
        ],
      };

      const relatedQuestionsMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: chatbotResponse.text,
        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "questions",
        questions: chatbotResponse.questions,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [relatedQuestionsMessage])
      );
    } else if (question === "I have not received my full reports") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
       details:[
        "Submit Key Details for Swift Resolution!",
         "Incomplete Reports? Don't worry, we've got you covered! Simple provide us with:",

         "1.Order booking date",
         "2.Name of the test reports which are incomplete",
         "3. Patient name",
         "4.Location where the test was conducted",
         "5.Report received date",

         "We'll take care of the rest and ensure you receive your complete reports swiftly.Thank you for your cooperation."

       ]
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "I have an issue with my digitized report") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
       details:[
        "Submit Key Detail for Swift Resolution!",
        "Don't worry, we're here to assist you! please share us a screenshot of your report and our team will look into it.",

       ]
      };
      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "My record is not available on the app") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "Find Your Record via a Mobile Number Log-in Correction",
          "Here's quick fix: check if you're using a different mobile number than the one linked to your UHID. If thats the case, just log out and log back in with the correct number. Give it a go, and you shall be on track in no time!",
        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "Issue is downloading records") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
       details:[

        "Submit Key Details for Swift Resolution!",
        "Experiencing Download Issues? Don't worry, we're here to assist you! Just provide us with the following details:",
        "1.Order booking date",
        "2.Name of the test was incomplete",
        "3.Patient name",
        "4.Location where the test was conducted",
        "5.Report received date",
        "Please include a screenshot of the error while downloading records. We'll work swiftly to fix the issue. Thank you!",
       ]
      };
      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "My self-uploaded record did not digitize") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
       details:[
        "Quick Fix-Upload Clearer Images!",
        "Please try uploading images which are clear to resolve this.",
        "Note:-",
        "1.Images should not be blurry",
        "2.Images should not be of high resolution",
        "3.Currently, only Lab reports are digitized.",

       ]
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    } else if (question === "I want to delete my account") {
      // Display the user's question and then render chatbot questions below
      const chatbotResponse = {
        details: [
          "Deactivating Your Account: Procedure and Reactivation Options.",
          "We regret to see that you're considering Deactivating your account. However, we are here to assist you regardless.",
          "If you wish to proceed further, click the button below to initiate the account Deactivating process.We value your association and experience with us.",

        ],
      };

      const chatbotResponseMessage = {
        text: chatbotResponse.text,
        _id: Math.round(Math.random() * 1000000),

        createdAt: new Date(),
        user: { _id: 2, name: "Chatbot" },
        custom: "details",
        details: chatbotResponse.details,
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [chatbotResponseMessage])
      );
    }
  };

  const renderCustomView = ({ currentMessage }) => {
    if (currentMessage.custom === "options") {
      return (
        <View style={styles.optionsContainer}>
          {currentMessage.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={styles.optionText}>{option.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else if (currentMessage.custom === "questions") {
      return (
        <View style={styles.questionsContainer}>
        
          {currentMessage.questions.map((question, index) => (
            <TouchableOpacity
              key={index}
              style={styles.questionButton}
              onPress={() => handleQuestionPress(question)}
            >
              <Text style={styles.questionText}>{question}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else if (currentMessage.custom === "details") {
      return (
        <View style={styles.detailsContainer}>
          {currentMessage.details.map((detail, index) => (
            <Text key={index} style={styles.detailItem}>
              {detail}
            </Text>
          ))}
        </View>
      );
    }
    return null;
  };

  const handleOptionPress = (option) => {
    console.log("Selected option:", option);

    const userOptionMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: option.title,
      createdAt: new Date(),
      user: { _id: 1, name: "User" },
    };

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [userOptionMessage])
    );

    // Check if the option selected by the user requires additional questions from the chatbot
    if (option.title === "Medicine") {
      // Generate the chatbot's response with related questions for medicine
      const chatbotResponse = generateChatbotResponse(
        option.title.toLowerCase()
      );
      if (chatbotResponse.questions) {
        const relatedQuestionsMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.text,
          createdAt: new Date(),
          user: { _id: 2, name: "Chatbot" },

          custom: "questions",
          questions: chatbotResponse.questions,
        };

        // Append the chatbot's response with related questions to the chat
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [relatedQuestionsMessage])
        );
      }
    } else if (option.title === "I am not able to place an order") {
      // Generate the chatbot's response with related questions for placing an order
      const chatbotResponse = generateChatbotResponse(
        option.title.toLowerCase()
      );
      if (chatbotResponse.questions) {
        const relatedQuestionsMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.text,
          createdAt: new Date(),
          user: { _id: 2, name: "Chatbot" },
          custom: "questions",
          questions: chatbotResponse.questions,
        };

        // Append the chatbot's response with related questions to the chat
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [relatedQuestionsMessage])
        );
      }
    } else if (option.title === "Lab Tests") {
      // Generate the chatbot's response with related questions for lab tests
      const chatbotResponse = generateChatbotResponse(
        option.title.toLowerCase()
      );
      if (chatbotResponse.questions) {
        const relatedQuestionsMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.text,
          createdAt: new Date(),
          user: { _id: 2, name: "Chatbot" },
          custom: "questions",
          questions: chatbotResponse.questions,
        };

        // Append the chatbot's response with related questions to the chat
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [relatedQuestionsMessage])
        );
      }
    }
    if (option.title.toLowerCase() === "appointments") {
      // Generate the chatbot's response with related questions for appointments
      const chatbotResponse = generateChatbotResponse(
        option.title.toLowerCase()
      );
      if (chatbotResponse.questions) {
        const relatedQuestionsMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.text,
          createdAt: new Date(),
          user: { _id: 2, name: "Chatbot" },
          custom: "questions",
          questions: chatbotResponse.questions,
        };

        // Append the chatbot's response with related questions to the chat
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [relatedQuestionsMessage])
        );
      }
    }
    if (option.title.toLowerCase() === "health records & account") {
      // Generate the chatbot's response with related questions for Health Records
      const chatbotResponse = generateChatbotResponse(
        option.title.toLowerCase()
      );
      if (chatbotResponse.questions) {
        const relatedQuestionsMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.text,
          createdAt: new Date(),
          user: { _id: 2, name: "Chatbot" },
          custom: "questions",
          questions: chatbotResponse.questions,
        };

        // Append the chatbot's response with related questions to the chat
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [relatedQuestionsMessage])
        );
      }
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => handleSend(newMessages)}
      user={{ _id: 1, name: "User" }}
      renderCustomView={renderCustomView}
      renderTypingIndicator={() => {
        {
          isTyping ? (
            <ActivityIndicator size="small" color="#189ab4" />
          ) : (
            <Text style={{ color: "#189ab4" }}>Send</Text>
          );
        }

        return null;
      }}
    />
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#189ab4",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  questionsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    fontWeight: "bold",
  },

  questionButton: {
    backgroundColor: "#189ab4",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Help;