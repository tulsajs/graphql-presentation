import styled from 'styled-components';

export const Button = styled.button`
  color: #FFFFFF;
  margin: 0 5px;
  background-color: #008DF2;
  display: inline-block;
  font-size: 40px;
  border: 1px solid #0172C3;
  ${props => props.peach && `
    background-color: #DA9962;
  `}
  &:hover {
    background-color: #007ed9;
    ${props => props.peach && `
      background-color: #DA9962;
    `}
  }
  span {
    color: yellow;
  }
  ${props => props.p && `
    padding: ${props.p};
  `}
  ${props => props.color && `
    color: ${props.color};
  `}
`;

export const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;

const borderRaidus = radius => {
  return `border-radius: ${radius}px;`;
};

export const AlertButton = styled.button`
  color: #FFFFFF;
  font-size: 40px;
  background-color: tomato;
  border-color: tomato;
  ${borderRaidus(5)};
`;

export const Link = Button.withComponent('a');
