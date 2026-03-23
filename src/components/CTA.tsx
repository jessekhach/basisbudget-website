export function CTA() {
  return (
    <section className="bg-gray-50 py-14 text-center dark:bg-gray-800">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Ready to take control of your money?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Download on iOS. No account needed.
        </p>
        <div className="mt-5 flex justify-center">
          <a href="#" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="Download on the App Store"
              height={44}
              style={{ height: 44 }}
            />
          </a>
        </div>
        <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
          $1.50/mo for bank sync via SimpleFIN.
        </p>
      </div>
    </section>
  );
}
