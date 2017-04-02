import React, { PropTypes } from 'react';

const Main = ({ children }) => (
  <main>{children}</main>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
