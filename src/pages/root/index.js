import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Root = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Root;
