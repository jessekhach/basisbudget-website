import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Basis Budget',
};

export default function Privacy() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">Last updated: March 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Overview</h2>
            <p>Basis Budget is designed with privacy as a core principle. We do not operate servers that collect or store your personal or financial data. This policy explains what data the App uses, how it is stored, and what third-party services are involved.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Data We Do Not Collect</h2>
            <p>We do not collect, store, or have access to your financial data, bank credentials, transaction history, budgets, or personal information. We do not use analytics SDKs, advertising frameworks, crash-reporting services, or tracking pixels. The App contains no third-party analytics or advertising code.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Data Storage</h2>
            <p>All App data is stored locally on your device. If you use iCloud, your data is synced across your devices via Apple&apos;s CloudKit service. This sync is handled entirely by Apple and governed by{' '}
              <a href="https://www.apple.com/legal/privacy/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>.
              We have no access to your iCloud data.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Third-Party Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">Apple iCloud</h3>
                <p>Used for syncing your data between your Apple devices. All data is encrypted and managed by Apple. Governed by Apple&apos;s Privacy Policy.</p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">SimpleFIN</h3>
                <p>SimpleFIN handles the secure connection to your financial institutions. Your banking credentials are stored by SimpleFIN, not by Basis Budget. We receive only account balances and transaction data through SimpleFIN&apos;s API. SimpleFIN&apos;s data handling is governed by their own privacy policy.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Face ID / Touch ID</h2>
            <p>If you enable biometric authentication, it is handled entirely by Apple&apos;s LocalAuthentication framework on your device. We never access, store, or transmit biometric data.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Children&apos;s Privacy</h2>
            <p>Basis Budget is not directed at children under the age of 13. We do not knowingly collect any information from children.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Contact</h2>
            <p>If you have questions about this Privacy Policy, contact us at{' '}
              <a href="mailto:support@basisbudget.com" className="text-blue-500 hover:underline">support@basisbudget.com</a>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
