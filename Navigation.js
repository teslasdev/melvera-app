import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Board1 from "./screens/onboarding/Board1";
import Board2 from "./screens/onboarding/Board2";
import Board3 from "./screens/onboarding/Board3";
import Board from "./screens/Auth/Board";
import Locator from "./screens/Auth/Locator";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import Verification from "./screens/Auth/Verification";
import Terms from "./screens/Auth/Terms";
import BottomTabNavigator from "./screens/Main/Index";
import Reservation from "./screens/Main/Reservation";
import Trip from "./screens/Main/Trip";
import Arrive from "./screens/Main/Arrive";
import Book from "./screens/Main/Book";
import SelectRide from "./screens/Main/SelectRide";
import Wallet from "./screens/Main/Wallet";
import Address from "./screens/Main/Address";
import ContactUs from "./screens/Main/Contact";
import Message from "./screens/Main/Message";
import PaymentMethod from "./screens/Main/PaymentMethod";
import AddCard from "./screens/Main/AddCard";
import AddMoney from "./screens/Main/AddMoney";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Board1"
          component={Board1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Board2"
          component={Board2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Board3"
          component={Board3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Board"
          component={Board}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Locator"
          component={Locator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reservation"
          component={Reservation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trip"
          component={Trip}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Arrive"
          component={Arrive}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Book"
          component={Book}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectRide"
          component={SelectRide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Address"
          component={Address}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddMoney"
          component={AddMoney}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Message"
          component={Message}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
