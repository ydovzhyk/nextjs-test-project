import BackLink from '../shared/components/back-link/back-link';
import s from './not-found.module.scss';

const NotFound = () => {

  return (
      <div className="container">
        <div className={s.window}>
          <div className={s.boo}>
            <div className={s.face} id="face"></div>
          </div>
          <div className={s.shadow}></div>
          <h1 className={s.title}>Oh! 404 error page</h1>
          <p className={s.txt}>{"We couldn't find the page you were looking for."}</p>
            <BackLink />
        </div>
      </div>
  );
};

export default NotFound;