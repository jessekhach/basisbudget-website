import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 text-sm text-gray-500 dark:text-gray-400">
        <span>&copy; {new Date().getFullYear()} Basis Budget</span>
        <div className="flex gap-4">
          <Link href="/terms" className="py-1 hover:text-gray-700 dark:hover:text-gray-300">Terms</Link>
          <Link href="/privacy" className="py-1 hover:text-gray-700 dark:hover:text-gray-300">Privacy</Link>
          <a href="mailto:support@basisbudget.com" className="py-1 hover:text-gray-700 dark:hover:text-gray-300">Support</a>
        </div>
      </div>
    </footer>
  );
}
