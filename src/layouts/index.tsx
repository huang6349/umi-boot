import React, { FC } from 'react';

interface PageProps {}

const BasicLayout: FC<PageProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default BasicLayout;
