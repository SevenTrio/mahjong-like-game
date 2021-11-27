import React from 'react';
import Header from 'components/Header/Header';
import './MainLayout.scss';

const MainLayout: React.FC = ({ children }) => (
  <div className="main-layout">
    <Header title="Mahjong-like game" />
    <div className="main-layout__content">{children}</div>
  </div>
);

export default MainLayout;
