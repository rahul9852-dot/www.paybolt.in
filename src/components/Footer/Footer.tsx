"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import logoLightFull from '@public/images/logos/light-full.svg';

import './Footer.scss';
import { FOOTER_SOCIAL_LINKS } from '@/constants/common.constant';
import LightFullIcon from '@public/Icons/LightFullIcon';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="footer-left">
          <Link href="/" className="logo">
            <LightFullIcon className='w-200 h-200' />
          </Link>
          <p className="text-center xl:text-start">
            PayBolt Technologies Private Limited 504, 1st floor, Sector 3, HSR
            Layout, Bengaluru, Karnataka 560102.
          </p>
        </div>
        <div className="footer-mid">
          <div className="col">
            <Link className="inline-block w-fit" href="/">
              Products
            </Link>
            <Link className="inline-block w-fit" href="/">
              Pricing
            </Link>
            <Link className="inline-block w-fit" href="/">
              Blog
            </Link>
          </div>
          <div className="col">
            <Link className="inline-block w-fit" href="/">
              Company
            </Link>
            <Link className="inline-block w-fit" href="/">
              About Us
            </Link>
            <Link className="inline-block w-fit" href="/">
              Careers
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <form className="flex items-center justify-start">
            <input
              type="text"
              className="subscribe-input"
              placeholder="Email Address"
            />
            <button type="submit" className="subs-btn">
              <FaArrowRightLong className="relative top-[1px] text-xl" />
            </button>
          </form>
          <div className="social-links">
            {FOOTER_SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                className="h-7 w-7 bg-background text-foreground flex items-center justify-center rounded hover:text-primary">
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="post-footer">
        <p>
          @ Copyright {new Date().getFullYear()} PayBolt Technologies Private
          Limited
        </p>
      </div>
    </footer>
  );
};
