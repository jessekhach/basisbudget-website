/**
 * CSS-only iPhone mockup showing a stylized version of the real Basis Budget dashboard.
 * Mirrors the actual SwiftUI DashboardView: Net Worth card, account groups, recent activity, tab bar.
 */
export function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <div
        className="w-[260px] shrink-0 overflow-hidden rounded-[2.8rem] border-[6px] border-gray-800 dark:border-gray-600"
        style={{
          background: 'var(--mock-bg)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          color: 'var(--foreground)',
          boxShadow: 'var(--mock-shadow)',
        }}
      >
        {/* Dynamic Island */}
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="h-[20px] w-[80px] rounded-full bg-black dark:bg-black" />
        </div>

        {/* Screen content */}
        <div className="flex flex-col gap-2.5 px-3 pb-1">

          {/* ── Net Worth Card ── */}
          <div className="rounded-2xl px-4 py-5 text-center" style={{ background: 'var(--mock-card)' }}>
            <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Net Worth</div>
            <div className="mt-0.5 text-[26px] font-bold tracking-tight text-gray-900 dark:text-gray-100" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontVariantNumeric: 'tabular-nums' }}>
              $24,832<span className="text-[18px]">.15</span>
            </div>
            <div className="mt-1 text-[9px] text-gray-400 dark:text-gray-500">Checked 12 min ago</div>
          </div>

          {/* ── Review Transactions CTA ── */}
          <div className="flex items-center justify-between rounded-2xl px-4 py-3" style={{ background: 'rgba(255, 149, 0, 0.10)' }}>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[12px]">&#10024;</span>
                <span className="text-[12px] font-semibold text-gray-900 dark:text-gray-100">Review Transactions</span>
              </div>
              <div className="mt-0.5 text-[10px] text-gray-500 dark:text-gray-400">3 transactions to review</div>
            </div>
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="text-gray-400">
              <path d="M1 1L6.5 6.5L1 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* ── Accounts Card ── */}
          <div className="rounded-2xl px-3.5 py-3" style={{ background: 'var(--mock-card)' }}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-gray-900 dark:text-gray-100">Accounts</span>
              <span className="text-[9px] text-gray-400">4 accounts</span>
            </div>

            {/* Checking group */}
            <div className="mb-1.5">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-blue-500/15">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500"><path d="M3 21V7l9-4 9 4v14H3z"/></svg>
                  </div>
                  <span className="text-[11px] font-medium text-gray-900 dark:text-gray-100">Checking</span>
                </div>
                <span className="text-[11px] font-semibold tabular-nums text-gray-900 dark:text-gray-100">$5,240.33</span>
              </div>
            </div>

            <div className="ml-8 border-t border-gray-100 dark:border-gray-700/50" />

            {/* Savings group */}
            <div className="my-1.5">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-teal-500/15">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-teal-500"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>
                  </div>
                  <span className="text-[11px] font-medium text-gray-900 dark:text-gray-100">Savings</span>
                </div>
                <span className="text-[11px] font-semibold tabular-nums text-gray-900 dark:text-gray-100">$18,420.00</span>
              </div>
            </div>

            <div className="ml-8 border-t border-gray-100 dark:border-gray-700/50" />

            {/* Investments group */}
            <div className="my-1.5">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-green-500/15">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-500"><polyline points="4 18 8 12 12 16 20 6"/></svg>
                  </div>
                  <span className="text-[11px] font-medium text-gray-900 dark:text-gray-100">Investments</span>
                </div>
                <span className="text-[11px] font-semibold tabular-nums text-gray-900 dark:text-gray-100">$2,800.00</span>
              </div>
            </div>

            <div className="ml-8 border-t border-gray-100 dark:border-gray-700/50" />

            {/* Credit & Loans group */}
            <div className="mt-1.5">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-red-500/15">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-red-500"><rect x="2" y="5" width="20" height="14" rx="3"/></svg>
                  </div>
                  <span className="text-[11px] font-medium text-gray-900 dark:text-gray-100">Credit</span>
                </div>
                <span className="text-[11px] font-semibold tabular-nums text-red-500">-$1,628.18</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Tab Bar ── */}
        <div className="mt-1 flex items-center justify-around border-t border-gray-200/60 px-2 pb-5 pt-2 dark:border-gray-700/40" style={{ background: 'var(--mock-card)', opacity: 0.95 }}>
          {[
            { label: 'Home', active: true, d: 'M3 12l9-8 9 8v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9z' },
            { label: 'Transactions', active: false, d: 'M4 6h16M4 12h16M4 18h16' },
            { label: 'Budget', active: false, d: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v6l4 2' },
            { label: 'Reports', active: false, d: 'M4 20V10l4-4 4 6 4-8 4 4v12H4z' },
            { label: 'Settings', active: false, d: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z' },
          ].map((tab) => (
            <div key={tab.label} className="flex flex-col items-center gap-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill={tab.active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" className={tab.active ? 'text-blue-500' : 'text-gray-400'}>
                <path d={tab.d} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={`text-[7px] font-medium ${tab.active ? 'text-blue-500' : 'text-gray-400'}`}>{tab.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
