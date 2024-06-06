'use client';

import Logo from '@/components/UI/logo/Logo';
import NavLinks from '@/components/UI/nav-links/NavLinks';
import classes from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={classes.header}>
      <Link legacyBehavior href={'/'}>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <NavLinks />
      </nav>
    </header>
  );
}
