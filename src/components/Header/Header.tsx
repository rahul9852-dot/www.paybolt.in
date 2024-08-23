'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { routes } from '@/constants/routes.constant';

import './Header.scss';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  return (
    <header className="header-wrapper">
      <nav className="header">
        <ul className="nav-list">
          {routes.map(({ name, path, image, isNameDisabled }) =>
            isNameDisabled ? (
              <div
                key={name}
                className="gap-1.5 flex items-center justify-center">
                {isNavOpen ? (
                  <svg
                    onClick={toggleNav}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 32 32"
                    className="md:hidden md:invisible visible inline-block text-primary w-8 h-8"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"></path>
                  </svg>
                ) : (
                  <svg
                    onClick={toggleNav}
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="200px"
                    width="200px"
                    className="md:hidden md:invisible visible inline-block text-primary w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" x2="21" y1="6" y2="6"></line>
                    <line x1="3" x2="21" y1="12" y2="12"></line>
                    <line x1="3" x2="21" y1="18" y2="18"></line>
                  </svg>
                )}
                <Link key={name} href={path} className="nav-item">

                  <image className='w-[150px] h-[150px]' />
                </Link>
              </div>
            ) : (
              <Link
                key={name}
                href={path}
                className="nav-item hidden invisible md:visible md:inline-block">
                {name}
              </Link>
            )
          )}
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
