import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Icon = styled(Feather)`
  font-size: 18px;
  color: ${({ theme}) => theme['gray-300']};
`;
