import { TextInput } from 'grommet';
import styled from 'styled-components';

const Input = styled(TextInput)`
  border-color: ${({ theme }) => theme.global.colors.border};

  &:focus {
    border-color: ${({ theme }) => theme.global.colors['accent-1']};
  }
`;

export default Input;
