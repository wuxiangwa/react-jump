import React, {Component} from 'react';
import jump from 'jump.js';
import PropTypes from 'prop-types';
import {getScroll} from './util';
import '../src/jump.css';

export default class BackToTop extends Component {
  contructor () {
    this.state({
      isShow: false
    })
  }

  componentWillMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll () {
    const {showHeight} = this.props
    this.setState({
      isShow: getScroll(window, true) > showHeight
    })
  }

  scrollToTop (options) {
    jump(document.body, options)
  }

  render() {
    const {
      className,
      children,
      options,
      showHeight,
      ...props
    } = this.props
    return this.state.isShow
      ? (<div {...props} className={`jump back-to-top ${className}`} onClick={() => this.scrollToTop(options)}>
        {children}
      </div>)
      : null
  }
}

BackToTop.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  options: PropTypes.object,
  showHeight: PropTypes.number
}

BackToTop.defaultProps = {
  options: {},
  showHeight: 400
}
