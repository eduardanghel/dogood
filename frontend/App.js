import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";

import COLORS from "./components/reusables/Colors";

import WelcomeToKarma from "./components/signup/WelcomeToKarma";
import Login from "./components/login/Login";
import ForgotPass from "./components/login/ForgotPass";
import UserRegistration from "./components/signup/UserRegistration";
import OpenEmail from "./components/login/OpenEmail";
import Feed from "./components/app/Feed";
import IDValidation from "./components/signup/IDValidation";
import AddPhoneNumber from "./components/signup/AddPhoneNumber";
import VerifyPhoneNumber from "./components/signup/VerifyPhoneNumber";
import ContactInfo from "./components/signup/ContactInfo";
import About from "./components/signup/About";
import OrgSignUp from "./components/signup/OrgSignUp";
import UserCauses from "./components/signup/UserCauses";
import EditProfile from "./components/app/profile/EditProfile";
import ActivityCreate from "./components/app/profile/CreateActivity";

function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={[COLORS.lightGreen, COLORS.darkGreen]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={styles.textHeader}>KARMA</Text>
        <Text style={styles.text}>Lorem ipsum dolo ecte </Text>
        <Text style={styles.text}>adipisicing elit sed do</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("WelcomeToKarma")}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
        </TouchableOpacity>
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate("Loginate")}
        >
          Already have an account? Login
        </Text>
      </LinearGradient>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: COLORS.classicGreen,
          textAlign: "left",
          fontSize: 22,
          headerTitleStyle: { color: "black" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={InitialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeToKarma"
          component={WelcomeToKarma}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserRegistration"
          component={UserRegistration}
          options={{ title: "Sign up" }}
        />
        <Stack.Screen
          name="OrgSignUp"
          component={OrgSignUp}
          options={{ title: "Sign up" }}
        />
        <Stack.Screen
          name="Loginate"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={{ title: "Forgot Password" }}
        />
        <Stack.Screen
          name="OpenEmail"
          component={OpenEmail}
          options={{ title: "Forgot Password" }}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IDValidation"
          component={IDValidation}
          options={{ title: "ID Validation" }}
        />
        <Stack.Screen
          name="AddPhoneNumber"
          component={AddPhoneNumber}
          options={{ title: "Add Phone Number" }}
        />
        <Stack.Screen
          name="VerifyPhoneNumber"
          component={VerifyPhoneNumber}
          options={{ title: "Verify Phone Number" }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About You" }}
        />
        <Stack.Screen
          name="ContactInfo"
          component={ContactInfo}
          options={{ title: "Contact Info" }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActivityCreate"
          component={ActivityCreate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserCauses"
          component={UserCauses}
          options={{ title: "Causes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  textHeader: {
    color: "white",
    fontSize: 80,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 44,
    width: 200,
    marginBottom: 20,
    marginTop: 10,
    position: "absolute",
    bottom: 60,
  },
  loginText: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
    bottom: 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
