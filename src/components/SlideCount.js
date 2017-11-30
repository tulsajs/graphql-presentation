import React, { Component } from 'react';
import styled from 'styled-components';

const SlideCountWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  font-size: 32px;
  color: #EE748E;
  font-weight: 700;
  padding: 10px 20px;
  background-color: white;
  opacity: 0.7;
  span {
    color: #1D1F27;
  }
`;

class SlideCount extends Component {
  render() {
    return (
      <SlideCountWrapper {...this.props}>
        {this.props.slideNumber}<span> of </span>{this.props.count}
      </SlideCountWrapper>
    );
  }
}

export default SlideCount;
