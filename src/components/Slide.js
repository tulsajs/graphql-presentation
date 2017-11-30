import styled from 'styled-components';

export default styled.div`
  ${props => props.bgColor && `
    background-color: ${props.bgColor};
  `}
  ${props => props.bgImage && `
    background: url("${props.bgImage}") no-repeat center center fixed;
    background-size: contain;
  `}
  ${props => props.p && `
    padding: ${props.p};
  `}
  ${props => props.m && `
    margin: ${props.m};
  `}
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
