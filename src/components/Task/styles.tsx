import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme}) => theme['gray-500']};
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const Items = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 12px;
`;

export const Icon = styled(Feather)`
  font-size: 18px;
  padding: 8px;
`;

export const Description = styled.Text`
  flex: 1;
  padding: 0 10px;
  font-size: 14px;
  color: ${({ theme}) => theme.white};
`;

export const DescriptionCompleted = styled.Text`
  flex: 1;
  padding: 0 10px;
  font-size: 14px;
  color: ${({ theme}) => theme['gray-300']};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme['gray-300']};
`;
