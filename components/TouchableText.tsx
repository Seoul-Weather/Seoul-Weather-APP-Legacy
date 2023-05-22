import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Content = styled.Text`
    font-size: ${(props) => props.theme.fontSize.small};
`;

export const TouchableText = ({ text }: { text: string }) => {
    return (
        <TouchableOpacity>
            <Content>{text}</Content>
        </TouchableOpacity>
    );
};
