import React, { Component } from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  margin: 0 auto;
  text-align: center;
  ${props => props.topNavigation && `
    top: 0;
  `}
`;

const Svg = styled.svg`
  padding: 5px 2px;
  cursor: pointer;
  ${props => props.active && `
    fill: #EE748E;
    stroke: #EE748E;
  `}
`;

const Dot = props => {
  return (
    <Svg
      active={props.active}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 24 24"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
    </Svg>
  );
};

class Navigation extends Component {
  render() {
    return (
      <NavigationWrapper {...this.props}>
        {[...Array(this.props.count)].map((count, index) => (
          <Dot
            active={this.props.slideIndex === index}
            key={index}
            onClick={() => this.props.setNavigation(index)}
          />
        ))}
      </NavigationWrapper>
    );
  }
}

export default Navigation;
