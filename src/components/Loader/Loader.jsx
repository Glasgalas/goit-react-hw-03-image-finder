import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBall}></div>
    </div>
  );
};

export default Loader;
