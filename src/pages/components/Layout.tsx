import React from 'react';
import { Link } from 'gatsby';
import Seo from './Seo';

interface IlayoutProps {
  children: any;
  title: string;
}

const Layout = ({ children, title }: IlayoutProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About us</Link>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
};
export const Head = () => <Seo title='Layout' />;

export default Layout;
