import Login from './login';
import s from './login.module.scss';

export default function loginPage() {
  return (
    <section className={s.login}>
      <div className="container">
        <Login />
      </div>
    </section>
  );
}