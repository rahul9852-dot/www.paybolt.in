'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa6';

import { cn } from '@/utils/cn';
import { INNER_PRODUCTS, ROUTES } from '@/constants/routes.constant';

// import logoColorFull from '@public/images/logos/color-full.svg';

import './Header.scss';
import ColorFullIcon from '@public/Icons/ColorFullIcon';

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  const navigate = (path: string) => {
    setIsNavOpen(false);
    setIsHovered(false);
    router.push(path);
  };

  return (
    <header className="header-wrapper">
      <nav className="header" aria-label="Global">
        <div className="flex md:hidden">
          <div className="-m-2.5 inline-flex gap-2 items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">
              {isNavOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {isNavOpen ? (
              <svg
                onClick={toggleNav}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="inline-block cursor-pointer text-primary w-8 h-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"></path>
              </svg>
            ) : (
              <svg
                onClick={toggleNav}
                className="h-8 w-8 text-primary inline-block cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
            <Link href="/" className="nav-item">
              {/* <Image
                src={ColorFullIcon}
                alt="PayBolt"
                width={150}
                height={150}
              /> */}
              <ColorFullIcon className=' w-[50px] h-[50px]'/>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center md:gap-x-10">
          <div className="flex md:flex-1">
            <Link href="/" className="nav-item">
              {/* <Image
                src={logoColorFull}
                alt="PayBolt"
                width={150}
                height={150}
              /> */}
              <ColorFullIcon className=' w-[50px] h-[50px]'/>
            </Link>
          </div>
          <div className="relative">
            <Link
              href="/products"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground hover:text-primary"
              aria-expanded="false"
              onMouseEnter={() => setIsHovered(true)}>
              Products
              <svg
                className={cn(
                  'h-5 w-5 flex-none text-gray-400 relative top-[1px] transition-transform',
                  {
                    '-rotate-180': isHovered,
                  }
                )}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>

            {isHovered && (
              <div
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-lg bg-background shadow-lg ring-1 ring-foreground/5"
                onMouseLeave={() => setIsHovered(false)}>
                <div className="p-4">
                  {INNER_PRODUCTS.map(({ name, path }) => (
                    <Link
                      href={path}
                      key={name}
                      onClick={() => setIsHovered(false)}
                      className="font-semibold group relative flex items-center gap-x-6 rounded-md p-4 text-sm leading-6 hover:bg-primary-50 text-foreground hover:text-primary transition-all">
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary">
            Contact Us
          </Link>
        </div>

        <div className="flex">
          <Link
            href="/login"
            className="nav-item btn-login"
            onClick={() => setIsNavOpen(false)}>
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
        </div>
      </nav>

      {isNavOpen && (
        <div className="header-overlay">
          <div className="z-header w-screen h-dvh overflow-hidden bg-background">
            <div className="p-4">
              {ROUTES.map(({ name, path, innerProducts }) => {
                const isActive = pathname === path;

                return (
                  <>
                    <button
                      type="button"
                      key={name}
                      onClick={e => {
                        e.stopPropagation();
                        navigate(path);
                      }}
                      className={cn(
                        'w-full font-semibold group relative flex items-center gap-x-6 rounded-md p-4 text-sm leading-6 hover:bg-primary-50 text-foreground hover:text-primary transition-all justify-between',
                        {
                          '!bg-primary-50 !text-primary': isActive,
                        }
                      )}>
                      <span>{name}</span>
                      {innerProducts && (
                        <FaChevronDown
                          onClick={e => {
                            e.stopPropagation();
                            setIsHovered(prev => !prev);
                          }}
                          className="text-foreground/50 h-full w-10 p-3 absolute right-0 z-10"
                        />
                      )}
                    </button>
                    {innerProducts && isHovered && (
                      <div className="">
                        <div className="p-4">
                          {INNER_PRODUCTS.map(({ name, path }) => (
                            <button
                              key={name}
                              onClick={() => {
                                navigate(path);
                              }}
                              className={cn(
                                'w-full font-semibold group relative flex items-center gap-x-6 rounded-md p-4 text-sm leading-6 hover:bg-primary-50 text-foreground hover:text-primary transition-all',
                                {
                                  '!bg-primary-50 !text-primary': isActive,
                                }
                              )}>
                              {name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
