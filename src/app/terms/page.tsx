import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Basis Budget',
};

export default function Terms() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Terms of Service
        </h1>
        <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">Last updated: March 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">1. Agreement to Terms</h2>
            <p>By downloading, installing, or using Basis Budget (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">2. Description of Service</h2>
            <p>Basis Budget is an iOS personal finance application for budgeting, account tracking, and net worth monitoring. The App syncs bank accounts through SimpleFIN, a third-party open banking service. Manual asset tracking is also available.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">3. User Data</h2>
            <p>Basis Budget does not require account creation. All data is stored locally on your device and synced via Apple&apos;s iCloud service. We do not operate servers that store your personal or financial data. You are responsible for maintaining the security of your device and iCloud account.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">4. Third-Party Services</h2>
            <p>Bank account syncing uses SimpleFIN, a third-party service with its own terms of service and privacy policy. SimpleFIN charges $1.50/month, which is paid directly to SimpleFIN — not to Basis Budget. We are not responsible for SimpleFIN&apos;s availability, pricing, data handling, or any issues arising from their service.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">5. Acceptable Use</h2>
            <p>You agree to use the App only for personal financial tracking purposes. You may not reverse-engineer, decompile, or disassemble the App, or use it for any illegal purpose.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">6. Disclaimers</h2>
            <p>The App is provided &ldquo;as is&rdquo; without warranties of any kind. Basis Budget is not a financial advisor and does not provide financial advice. We are not responsible for any financial decisions made using the App. The accuracy of financial data depends on your input and the third-party sync service.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Basis Budget shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to data loss, inaccurate financial data, or issues arising from third-party services.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">8. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the App after changes are posted constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">9. Contact</h2>
            <p>If you have questions about these terms, contact us at{' '}
              <a href="mailto:support@basisbudget.com" className="text-blue-500 hover:underline">support@basisbudget.com</a>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
