import React from 'react';
import { Router } from '@reach/router' ;
import Actividad1 from './Actividad1';
import Actividad2 from './Actividad2';
import Actividad3 from './Actividad3';
import ActivitiesList from './index'

const Routers = () => (
    <Router>
      <Actividad1 path="/Actividad1" />
      <Actividad2 path="/Actividad2" />
      <Actividad3 path="/Actividad3" />
      <ActivitiesList path="/" />
    </Router>
);

export default Routers;


