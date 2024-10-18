import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const PregnancyCare = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <YoutubePlayer height={220} play={true} videoId={"_dVuHFdUN0c"} />
        <Text style={styles.heading}>
          Pregnancy Guide: Asanas, Nutrition, Skincare, Mood Swings & Baby Care
          | Motherhood | Dr. Hansaji
        </Text>

        <View style={styles.container1}>
          <YoutubePlayer height={220} play={true} videoId={"0ohxOQPlzy4"} />
          <Text style={styles.heading}>
            11 Food To Eat During Pregnancy For an Intelligent Baby
          </Text>
        </View>
        <View style={styles.container1}>
          <YoutubePlayer height={220} play={true} videoId={"Z4VjfSWZJQs"} />
          <Text style={styles.heading}>
            7 Common Pregnancy Mistakes That Increase Risk of Postnatal
            Complications
          </Text>
        </View>
        <View style={styles.container1}>
          <YoutubePlayer height={220} play={true} videoId={"ZHPHH5WZtQk"} />
          <Text style={styles.heading}>
            Pregnancy Super Foods | Foods For Pregnancy | Best Foods For
            Pregnancy | Pregnancy Diet & Nutrition
          </Text>
        </View>

        <View style={styles.container1}>
          <YoutubePlayer height={220} play={true} videoId={"Ia6dNwVs1M8"} />
          <Text style={styles.heading}>
            First Trimester Pregnancy Exercises | 30 Minute Pregnancy Workout
            First Trimester
          </Text>
        </View>

        <View style={styles.container1}>
          <YoutubePlayer height={220} play={true} videoId={"CEgF4sQ9vQ4"} />
          <Text style={styles.heading}>
            5 Foods to Avoid in Pregnancy | foods strictly avoid in pregnancy |
            Pregnancy | Health Tips
          </Text>
        </View>
        <View style={styles.container1}>
          <YoutubePlayer height={220} play={true} videoId={"bEi1i6V7dxA"} />
          <Text style={styles.heading}>
            The First Trimester - Precautions, Do's and Don'ts | Dr Anjali Kumar
            | Maitri
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    marginTop:40,
  },
  container1:{
marginTop:30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default PregnancyCare;
