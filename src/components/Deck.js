import React, { Component } from 'react';
import styled from 'styled-components';
import { Navigation, SlideCount } from './';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const DeckWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.color || '#ffffff'};
`;

class Deck extends Component {
  constructor(props) {
    super(props);
    let slideIndex;
    let slideCount = props.children.length;
    if (props.routing) {
      let urlParam = parseInt(history.location.pathname.split('/')[1], 10);
      slideIndex = urlParam < slideCount ? urlParam : 0;
    } else {
      slideIndex = 0;
    }

    this.state = {
      slideIndex: slideIndex,
      count: slideCount,
      fullscreen: false
    };

    document.onkeydown = e => {
      console.log(e);
      switch (e.keyCode) {
        case 37:
          //left
          this.prevSlide();
          break;
        case 33:
          //pageUp
          this.prevSlide();
          break;
        case 38:
          //up
          break;
        case 39:
          //right
          this.nextSlide();
          break;
        case 34:
          //pageDown
          this.nextSlide();
          break;
        case 40:
          //down
          break;
        case 70:
          //f = fullscreen
          this.toggleFullScreen();
          break;
        default:
          break;
      }
    };
    if (props.routing) {
      setTimeout(() => history.push(`/${slideIndex}`), 0);
    }
  }

  toggleFullScreen() {
    if (this.state.fullscreen) {
      this.exitFullscreen();
    } else {
      this.launchIntoFullscreen();
    }
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  launchIntoFullscreen(element = document.getElementById('deck')) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  prevSlide() {
    const { slideIndex } = this.state;
    const newSlideIndex = slideIndex === 0 ? 0 : slideIndex - 1;
    this._setSlide(newSlideIndex);
  }

  nextSlide() {
    const { count, slideIndex } = this.state;
    const newSlideIndex = slideIndex + 1 < count ? slideIndex + 1 : slideIndex;
    this._setSlide(newSlideIndex);
  }

  setNavigation(slideIndex) {
    this._setSlide(slideIndex);
  }

  _setSlide(slideIndex) {
    this.setState({
      slideIndex: slideIndex
    });
    if (this.props.routing) {
      history.push(`/${slideIndex}`);
    }
  }

  render() {
    const { children, navigation, slideCount } = this.props;
    const { slideIndex, count } = this.state;
    return (
      <DeckWrapper {...this.props} id="deck">
        <ReactCSSTransitionReplace
          transitionName={children[slideIndex].props.transition || 'fade-wait'}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={250}>
          {React.cloneElement(children[slideIndex], {
            key: slideIndex
          })}
        </ReactCSSTransitionReplace>
        {slideCount &&
          <SlideCount count={count} slideNumber={slideIndex + 1} />}
        {navigation &&
          <Navigation {...this.state} setNavigation={::this.setNavigation} />}
      </DeckWrapper>
    );
  }
}

export default Deck;
