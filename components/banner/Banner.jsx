'use client';

import classes from './Banner.module.css';

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__content}>
        <div className={classes.banner__slider}>
          <h1>Pure Clow : Révélez la Beauté Naturelle de Votre Peau</h1>
          <p>Une Harmonie Parfaite entre Pureté et Éclat</p>
        </div>
      </div>
      <div className={classes.banner__navigation}>
        <span className={classes.active}></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
