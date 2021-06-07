import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const ContentWrapper = ({
  children,
  containerClass,
  contentClass,
  contentWidth = 1024,
  ...rest
}) => {
  return (
    <div
      className={classNames('flex items-center justify-center relative', containerClass)}
      {...rest}>
      <div
        style={{ maxWidth: contentWidth }}
        className={classNames('flex flex-row justify-between flex-1 relative', contentClass)}>
        {children}
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  containerClass: PropTypes.string,
  contentClass: PropTypes.string,
  children: PropTypes.node,
  contentWidth: PropTypes.number,
};

export default memo(ContentWrapper);
