import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Learning Guide — Basis Budget',
};

export default function Guide() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
        <Image src="/appicon.png" alt="Basis Budget" width={80} height={80} className="mb-8 rounded-2xl" />
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Learning Guide
        </h1>
        <p className="max-w-md text-lg text-gray-600 dark:text-gray-400">
          We&apos;re putting together a comprehensive guide to help you get the most out of Basis Budget. Check back soon.
        </p>
      </div>
    </div>
  );
}
