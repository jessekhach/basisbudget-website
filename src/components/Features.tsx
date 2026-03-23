const features = [
  {
    icon: '🔄',
    title: 'Two Budgeting Modes',
    description:
      'Choose Zero-Based budgeting to assign every dollar, or set Spending Limits to track against monthly caps.',
  },
  {
    icon: '🏦',
    title: 'Bank Sync',
    description:
      'Connect your bank through SimpleFIN for automatic transaction imports and balance updates.',
  },
  {
    icon: '📈',
    title: 'Net Worth Tracking',
    description:
      'See your complete financial picture across checking, savings, investments, credit cards, loans, and assets.',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description:
      'Your data syncs through iCloud — not our servers. Lock the app with Face ID. No ads, no tracking, no data selling.',
  },
];

export function Features() {
  return (
    <section className="bg-gray-50 py-14 dark:bg-gray-800">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
          Everything you need to manage your money
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
            >
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-2 font-semibold text-gray-900 dark:text-gray-100">
                {f.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
