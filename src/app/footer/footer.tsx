"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../images/IT-logo.png';
import s from './footer.module.scss';

const allowedRoutes = ['/', '/about', '/articles'];

const isAllowedRoute = (pathname: string) => {
  const result = allowedRoutes.some(route => 
    route === pathname || pathname.startsWith('/articles')
  );
  return result;
};

const Footer = () => {
  const pathname = usePathname();
  const showHeaderFooter = isAllowedRoute(pathname);

    return !showHeaderFooter ? null : (
      <div className={s.footer}>
        <div className="container">
            <div className={s.footer__content}>
                <Image src={logo} alt='Logo' width={70} height={70} />
            </div>
        </div>
      </div>
  );
};

export default Footer;