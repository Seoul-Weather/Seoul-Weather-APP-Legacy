import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Home } from "./screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Location } from "./screens/Location";
import { Setting } from "./screens/Setting";

export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Location" component={Location} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
