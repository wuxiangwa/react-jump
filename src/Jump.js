import React from 'react';
import jump from 'jump.js';
import PropTypes from 'prop-types';

const handler = (target, options) => {
  jump(target, options)
}

const Jump = ({
  target,
  options,
  children,
  ...props
}) => (<div {...props} className="jump" onClick={() => handler(target, options)}>
  {children}
</div>)

Jump.propTypes = {
  target: PropTypes.string.isRequired,
  children: PropTypes.any,
  options: PropTypes.object
}

Jump.defaultProps = {
  options: {}
}

export default Jump
