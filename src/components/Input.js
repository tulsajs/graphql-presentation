import styled from 'styled-components';

export default styled.input.attrs({
  type: 'text'
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: ${props => props.padding};
`;
