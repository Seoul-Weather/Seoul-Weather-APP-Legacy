import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Home } from "./screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Location } from "./screens/Location";
import { Setting } from "./screens/Setting";
import { Spot } from "./screens/Spot";
import { theme } from "./screens/style/Theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="위치" component={Location} />
                    <Tab.Screen name="날씨" component={Home} />
                    <Tab.Screen name="추천" component={Spot} />
                    <Tab.Screen name="설정" component={Setting} />
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
