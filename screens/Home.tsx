import { View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#ff4081" }} />;
const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />;
const ThirdRoute = () => <View style={{ flex: 1, backgroundColor: "#3ab74d" }} />;
const ForthRoute = () => <View style={{ flex: 1, backgroundColor: "#b7ad3a" }} />;
const FifthRoute = () => <View style={{ flex: 1, backgroundColor: "#333abe" }} />;

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    forth: ForthRoute,
    fifth: FifthRoute,
});

export const Home = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "First" },
        { key: "second", title: "Second" },
        { key: "third", title: "Third" },
        { key: "forth", title: "Forth" },
        { key: "fifth", title: "Fifth" },
    ]);
    const layout = useWindowDimensions();
    return <TabView navigationState={{ index, routes }} renderScene={renderScene} onIndexChange={setIndex} initialLayout={{ width: layout.width }} />;
};
