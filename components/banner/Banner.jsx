'use client';

import classes from './Banner.module.css';

export default function Banner() {
  return (
    <div className={classes.banner}>
      <img src="/images/banner__img.svg" alt="pure glow banner_image" />
    </div>
  );
}
