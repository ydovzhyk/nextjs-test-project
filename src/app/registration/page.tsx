import Registration from './registration';
import s from './registration.module.scss';

export default function RegistrationPage() {
  return (
    <section className={s.registration}>
      <div className="container">
        <Registration />
      </div>
    </section>
  );
}