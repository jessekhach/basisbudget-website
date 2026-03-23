import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Page not found
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="text-sm font-medium text-blue-500 hover:underline">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
