"use client"
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import AuthInputForm from "../shared/components/auth-input-form/auth-input-form";
import { getLogin } from "../redux/auth/auth-selectors";
import BackLink from '../shared/components/back-link/back-link';
import { FcGoogle } from "react-icons/fc";

import s from "./login.module.scss";

const Login = () => {
  const isLogin = useSelector(getLogin);
  const pathname = usePathname();
  const router = useRouter();
  const [currentOrigin, setCurrentOrigin] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentOrigin(encodeURIComponent(window.location.origin));
    }
  }, []);

  const REACT_APP_API_URL = "https://test-task-backend-34db7d47d9c8.herokuapp.com";

  const googleText = pathname === "/login"
    ? "Sign in quickly with Google"
    : "Sign up quickly with Google";

  if (isLogin) {
    router.replace(`/`);
    return null;
  }

  return (
    <section className={s.auth}>
      <div className="container">
        <div className={s.content}>
          <div className={s.linksWrapper}>
            <Link href="/login" className={pathname === "/login" ? `${s.link} ${s.active}` : s.link}>
              <h2>Login</h2>
            </Link>
            <Link href="/registration" className={pathname === "/registration" ? `${s.link} ${s.active}` : s.link}>
                <h2>Registration</h2>
            </Link>
          </div>
          <div className={s.googleBtnContainer}>
            <p className={s.text}>{googleText}</p>
            <a
              href={`${REACT_APP_API_URL}/google?origin=${currentOrigin}`}
              className={s.googleBtn}
            >
              <FcGoogle size={24} />
              Google
            </a>
          </div>
          <AuthInputForm typeOperation="login" />
          <BackLink />
        </div>
      </div>
    </section>
  );
};

export default Login;
