import React from 'react';
import { UserIcon } from './Icons';

export const Header = () => (
  <div>
    <a href="./">Q and A</a>
    <input type="text" placeholder="Search..." />
    <a href="./signin">
      <UserIcon />
      <span>Sign In</span>
    </a>
  </div>
);
