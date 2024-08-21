import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes.constant';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header-wrapper">
      <nav className="header">
        <ul className="nav-list">
          {routes.map(({ name, path, image, isNameDisabled }) => (
            <Link key={name} href={path} className="nav-item">
              {isNameDisabled ? (
                <Image src={image} alt={name} width={150} height={150} />
              ) : (
                <span className="hidden md:inline-block">{name}</span>
              )}
            </Link>
          ))}
        </ul>
        <Link href="/login" className="nav-item btn-login">
          <span>Login</span>
          <svg
            className="login-bottom-line"
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="8"
            viewBox="0 0 43 8"
            fill="none">
            <path
              d="M1 6.5847C15.3896 -2.19668 38 0.499983 42.5 6.5847"
              stroke="hsl(var(--primary))"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
};
