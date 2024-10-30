import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from '@/app/redux/store';
import Link from 'next/link';
import { PiLineVertical } from "react-icons/pi";
import { getScreenType } from "@/app/redux/technical/technical-selectors";
import { getLogin, getUser } from "@/app/redux/auth/auth-selectors";
import { logout } from "@/app/redux/auth/auth-operations";
import TranslatedText from "../../shared/translating/translated-text";

import s from "./auth-info.module.scss";

const AuthInfo = () => {
  const dispatch: AppDispatch = useDispatch();
  const isUserLogin = useSelector(getLogin);
  const screenType = useSelector(getScreenType);
  const user = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {!isUserLogin && (
        <div className={s.userInfo}>
          <div className={s.userWrapper}>
            <div className={s.wrapper}>
              <Link className={s.userText} href="/login">
                <span style={{ marginRight: "-5px" }}><TranslatedText text="Login" /></span>
              </Link>
            </div>
            <PiLineVertical size={24} color="var(--text-color)" />
            <div className={s.wrapper}>
              <Link className={s.userText} href="/registration">
                <span style={{ marginLeft: "-5px" }}><TranslatedText text="Registration" /></span>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isUserLogin && (screenType !== "isMobile") && (
        <div className={s.userInfoSide}>
          <div className={s.userBlock}>
            {user.userAvatar !== null && (
              <img
                src={user.userAvatar}
                alt="Userphoto"
                className={s.userPhoto}
              />
            )}
          </div>
          <span className={s.text}>Hi, {user.username}</span>
          <PiLineVertical
            size={24}
            color="var(--text-color)"
            style={{ marginLeft: "-10px", marginRight: "-10px" }}
          />
          <div className={s.btnWrapper}>
            <button type="button" onClick={onLogout} className={s.btnExit}><TranslatedText text="exit" /></button>
          </div>
        </div>
      )}
      {isUserLogin && (screenType === "isMobile") && (
        <div className={s.userInfoSide}>
          <button type="button" onClick={onLogout} className={s.btnExit}><TranslatedText text="exit" /></button>
        </div>
      )}
    </>
  );
};

export default AuthInfo;