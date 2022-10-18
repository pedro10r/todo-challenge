import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme}) => theme['gray-400']};
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
  color: ${({ theme}) => theme['gray-300']};
`;

export const Description = styled.Text`
  flex: 1;
  padding: 0 10px;
  font-size: 14px;
  color: ${({ theme}) => theme.white};
`;
