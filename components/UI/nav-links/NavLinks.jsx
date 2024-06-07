'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import classes from './NavLinks.module.css';

export default function NavLinks() {
  const pathname = usePathname();
  const inputRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsOpen(!isOpen);

    console.log('Submit');
  }

  // Ajouter automatiquement le focus sur l'input
  if (isOpen) {
    inputRef.current.focus();
  }

  return (
    <ul className={classes.nav__links}>
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
      <li className={`${isOpen ? classes.isExpanded : ''}`}>
        <form
          className={`${classes.search} ${isOpen ? classes.expanded : ''}`}
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Recherche..." ref={inputRef} />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </li>
      <li>
        <Link href="/panier">
          <FaShoppingCart />
        </Link>
      </li>
    </ul>
  );
}
