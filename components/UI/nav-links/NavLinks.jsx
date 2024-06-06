'use client';
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import classes from './NavLinks.module.css';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <ul className={classes.nav__links}>
      <li
        className={`${classes.nav__link} ${
          pathname === '/accueil' ? classes.active : ''
        }`}
      >
        <Link href="/accueil">ACCUEIL</Link>
      </li>
      <li
        className={`${classes.nav__link} ${
          pathname === '/boutique' ? classes.active : ''
        }`}
      >
        <Link href="/boutique">BOUTIQUE</Link>
      </li>
      <li
        className={`${classes.nav__link} ${
          pathname === '/a-propos' ? classes.active : ''
        }`}
      >
        <Link href="/a-propos">A PROPOS</Link>
      </li>
      <li
        className={`${classes.nav__link} ${
          pathname === '/blog' ? classes.active : ''
        }`}
      >
        <Link href="/blog">BLOG</Link>
      </li>
      <li>
        <Link href="">
          <FaSearch />
        </Link>
      </li>
      <li>
        <Link href="/panier">
          <FaShoppingCart />
        </Link>
      </li>
    </ul>
  );
}
