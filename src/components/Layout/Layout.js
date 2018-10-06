import React, { Fragment } from 'react';
import styled from 'styled-components';

const Content = styled.main`
  margin-top: 16px;
`;

const Layout = props => {
  const { children } = props;
  return (
    <Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Layout;
