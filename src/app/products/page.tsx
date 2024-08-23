import Link from 'next/link';

export default () => {
  return (
    <section className="pt-20 container mx-auto px-2">
      <h1 className="text-2xl">Products</h1>

      <div className="flex flex-col justify-center items-center">
        <Link className="text-primary" href="/products/upi-qr-collections">
          UPI QR Collection
        </Link>
        <Link className="text-primary" href="/products/money-transfer">
          Money Transfer
        </Link>
        <Link className="text-primary" href="/products/pos-devices">
          POS Devices
        </Link>
        <Link className="text-primary" href="/products/dynamic-qr-collections">
          Dynamic QR Collections
        </Link>
        <Link className="text-primary" href="/products/instant-banking">
          Instant Banking
        </Link>
      </div>
    </section>
  );
};
