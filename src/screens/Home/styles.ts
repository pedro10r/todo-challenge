import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme["gray-600"]};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 173px;
  background-color: ${({ theme }) => theme["gray-700"]};
`;

export const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme["gray-600"]};
  padding: 0px 24px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: -31px;
  margin-bottom: 33px;
`;

export const Input = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme["gray-500"]};
  color: ${({ theme }) => theme.white};
  padding: 16px;
  font-size: 16px;
  margin-right: 12px;
  border-radius: 6px;
`;

export const Button = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 6px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.white}; 
  font-size: 16px;
`;

export const MarkArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CounterAction = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Created = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.blue};
`;

export const Completed = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.purple};
`;

export const NumberArea = styled.View`
  background-color: ${({ theme }) => theme["gray-400"]};
  border-radius: 999px;
  margin-left: 8px;
  padding: 2px 8px;
`;

export const Number = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme["gray-400"]};
  margin-bottom: 20px;
`;

export const EmptyList = styled.View`
  align-items: center;
  margin-top: 60px;
`;

export const EmptyListDescriptionText = styled.Text`
  line-height: 18px;
  font-size: 14px;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const EmptyListDescriptionTitleText = styled(EmptyListDescriptionText)`
  margin-top: 20px;
  font-weight: bold;
`;