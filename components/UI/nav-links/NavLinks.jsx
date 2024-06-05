'use client';
import Link from 'next/link';
import classes from './NavLinks.module.css';

export default function NavLinks() {
  const links = [
    {
      name: 'Accueil',
      href: '/accueil',
    },
    {
      name: 'Boutique',
      href: '/boutique',
    },
    {
      name: 'A Propos',
      href: '/a-propos',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className={classes.nav__links}>
            <p className="hidden md:block">{link.name.toUpperCase()}</p>
          </Link>
        );
      })}
    </>
  );
}
