import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default
class <%= componentName %> extends React.PureComponent {
  render() {
    const { children, className, onClick } = this.props;
    return (
      <button
        onClick={onClick}
        className={classnames(
          'button',
          className
        )}
      >
        {children}
      </button>
    );
  }
}

<%= componentName %>.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
<%= componentName %>.defaultProps = {};
