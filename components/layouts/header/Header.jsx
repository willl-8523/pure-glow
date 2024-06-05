'use client';

import Logo from '@/components/UI/logo/Logo';
import NavLinks from '@/components/UI/nav-links/NavLinks';

export default function Header() {
  return (
    <header>
      <nav>
        <Logo />
        <NavLinks />
      </nav>
    </header>
  );
}
