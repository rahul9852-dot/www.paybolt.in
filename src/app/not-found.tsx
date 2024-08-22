import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default () => {
  return (
    <section className="pt-20 h-[55dvh]">
      <div className="container h-full px-2 mx-auto flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-primary">
          404 - Page Not Found
        </h1>
        <p className="mt-5">The page you are looking for does not exist.</p>
        <p>
          If the problem persists, please{' '}
          <Link href="/contact" className="text-primary font-semibold italic">
            contact us
          </Link>{' '}
          for support.
        </p>

        <Link href="/" className="btn mt-5">
          <span>Back to Home</span>
          <FaArrowRightLong className="relative top-[1px] text-xl" />
        </Link>
      </div>
    </section>
  );
};
