import s from './Error.module.css';

const Error = () => (
  <div className={s.error}>
    <h3 className={s.errorTitle}>Error</h3>
    <p className={s.errorText}>Everyone gets one mistake</p>
  </div>
);

export default Error;
