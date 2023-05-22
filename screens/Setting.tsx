import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { TouchableText } from "../components/TouchableText";

export const Setting = () => {
    return (
        <Wrapper>
            <Header>설정</Header>
            <AppSection>
                <SectionTitle>앱 설정</SectionTitle>
                <TouchableText text="알림 시간 변경" />
                <TouchableText text="캐릭터 설정" />
                <TouchableText text="배경설정" />
            </AppSection>
            <AccountSection>
                <SectionTitle>계정</SectionTitle>
                <TouchableText text="닉네임 변경" />
                <TouchableText text="초기화" />
            </AccountSection>
            <InfoSection>
                <SectionTitle>이용안내</SectionTitle>
                <VersionWrapper>
                    <Text>버전 정보</Text>
                    <VersionInfo>v1.0.0</VersionInfo>
                </VersionWrapper>

                <TouchableText text="문의하기" />
                <TouchableText text="Instagram" />
                <TouchableText text="Github" />
                <TouchableText text="오픈소스 라이선스" />
            </InfoSection>
        </Wrapper>
    );
};

const Wrapper = styled(SafeAreaView)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    gap: 35px;
    background-color: #ffffff;
`;
const Header = styled.Text`
    flex: 1;
    font-size: ${(props) => props.theme.fontSize.h1};
    margin-top: 25px;
    text-align: left;
    width: 90%;
`;

const Section = styled.View`
    width: 90%;
    border: 1px solid ${(props) => props.theme.color.grey};
    border-radius: 6px;
    padding: 0px 15px;

    justify-content: space-evenly;
`;

const AppSection = styled(Section)`
    flex: 2;
    border: 1px solid ${(props) => props.theme.color.grey};
`;

const AccountSection = styled(Section)`
    flex: 1.5;
`;

const InfoSection = styled(Section)`
    flex: 3;
`;

const SectionTitle = styled.Text`
    font-size: ${(props) => props.theme.fontSize.regular};
    font-weight: 600;
    margin-bottom: 2px;
`;

const VersionWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const VersionInfo = styled.Text`
    color: ${(props) => props.theme.color.grey_light};
`;
