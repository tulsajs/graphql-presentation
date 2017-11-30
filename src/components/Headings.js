import styled, { css } from 'styled-components';

const base = css`
  ${props => props.color && `
    color: ${props.color};
  `}
  ${props => props.left && `
    text-align: left;
  `}
  ${props => props.right && `
    text-align: right;
  `}
  ${props => props.p && `
    padding: ${props.p};
  `}
  ${props => props.m && `
    margin: ${props.m};
  `}
  margin: 0;
`;

export const H1 = styled.h1`
  ${base}
  font-size: 10vw;
`;

export const H2 = styled.h2`
  ${base}
  font-size: 8vw;
`;

export const H3 = styled.h3`
  ${base}
  font-size: 6vw;
`;

export const H4 = styled.h4`
  ${base}
  font-size: 4vw;
`;

export const H5 = styled.h5`
  ${base}
  font-size: 2vw;
`;
