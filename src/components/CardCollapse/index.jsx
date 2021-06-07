import { Card } from 'antd';
import PropTypes from 'prop-types';
import { memo, useState } from 'react';

const CardCollapse = (props) => {
  const { children, defaultCollapse, ...rest } = props;
  const [isCollapse, setCollapse] = useState(false);

  return <Card {...rest}>{children({ isCollapse, setCollapse })}</Card>;
};

CardCollapse.propTypes = {
  exProps: PropTypes.bool,
};

export default memo(CardCollapse);
