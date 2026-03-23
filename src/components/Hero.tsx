import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:items-center">
        {/* Left column */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Budgeting that actually makes sense
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Assign every dollar with Zero-Based budgeting, or set monthly caps
            with Spending Limits — two modes, one app. Plus bank sync, net
            worth tracking, and complete privacy.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Download on the App Store"
                height={44}
                style={{ height: 44 }}
              />
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            $1.50/mo via SimpleFIN &middot; No account needed
          </p>
        </div>

        {/* Right column */}
        <div className="flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
