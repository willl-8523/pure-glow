'use client';

import Image from 'next/image';
import React from 'react'
import classes from './Logo.module.css'

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      width={300}
      height={200}
      alt="Logo of the pure_glow application"
      className={classes.logo}
    />
  );
}
