import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default
class <%= componentName %> extends React.PureComponent {
  render() {
    const { children, className } = this.props;
    return (
      <div
        className={classnames(
          'b-<%= componentName %>',
          className
        )}
      >
        {children}
      </div>
    );
  }
}

<%= componentName %>.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
<%= componentName %>.defaultProps = {};
