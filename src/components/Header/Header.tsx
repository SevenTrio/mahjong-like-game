import React from 'react';
import './Header.scss';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => (
  <header className="header">
    <h1 className="header__title">{title}</h1>
  </header>
);

export default Header;
