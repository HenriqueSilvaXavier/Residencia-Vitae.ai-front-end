// components/CustomOutlet.js

import React from 'react';
import { useRoutes } from 'react-router-dom';

const Outlet = ({ routes }) => {
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default Outlet;
