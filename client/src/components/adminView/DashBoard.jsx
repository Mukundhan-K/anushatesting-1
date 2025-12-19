import React from 'react';

import ListProjects from "./ListProjects";
import Api from '../../utility';
import { useEffect } from 'react';

const DashBoard = () => {

  return (
    <div>

      <ListProjects />
    </div>
  );
};

export default DashBoard;