import styled from 'styled-components';
// Define our button, but with the use of props.theme this time
export const ThemedButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: .2em 1em;
  font-size: 40px;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  background-color: white;
  border: 2px solid ${props => props.theme.main};
`;

// We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
ThemedButton.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
};

// Define what props.theme will look like
export const theme = {
  main: 'mediumseagreen'
};
