"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import AuthInfo from './auth-info/auth-info';
import logo from '../../images/IT-logo.png';
import Navigation from './navigation/navigation';
import s from './header.module.scss';

const allowedRoutes = ['/', '/about', '/articles'];

const isAllowedRoute = (pathname: string) => {
  const result = allowedRoutes.some(route => 
    route === pathname || pathname.startsWith('/articles')
  );
  return result;
};

const Header = () => {
  const pathname = usePathname();
  const showHeaderFooter = isAllowedRoute(pathname);

  return !showHeaderFooter ? null : (
    <div className={s.header}>
      <div className="container">
        <div className={s.header__content}>
          <Image src={logo} alt='Logo' width={70} height={70} />
          <AuthInfo />
        </div>
        <div className={s.header__navigation}>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;