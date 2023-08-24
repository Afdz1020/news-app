import React from 'react';
import './styles.css';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className="main-header">
      <img src="../assets/logo.jpg" alt="logo" />
      <nav>
        <ul>
          <li>{title}</li>
          <li>Notices</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};
