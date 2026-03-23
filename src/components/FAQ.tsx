'use client';

import { useRef, useState } from 'react';

const faqs = [
  {
    question: 'What is Basis Budget?',
    answer:
      'Basis Budget is an iOS app that helps you take control of your finances. It offers two budgeting approaches — Zero-Based budgeting (assign every dollar a job) and Spending Limits (set monthly caps per category) — plus net worth tracking, transaction management, and automatic bank sync.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'The app itself is free to download. Bank syncing is powered by SimpleFIN, which charges $1.50/month. This fee goes directly to SimpleFIN — not to us.',
  },
  {
    question: 'How does bank syncing work?',
    answer:
      'Basis Budget uses SimpleFIN, an open banking service, to securely import your transactions and balances. You set up a SimpleFIN Bridge account, connect your banks there, and then link it to the app. Your banking credentials are never stored in Basis Budget.',
  },
  {
    question: 'Is my financial data secure?',
    answer:
      'Your data is stored locally on your device and synced via Apple\u2019s iCloud — we never see or store your financial data on our servers. You can also enable Face ID or Touch ID to lock the app, and use number masking to hide balances on screen.',
  },
  {
    question: 'What types of accounts can I track?',
    answer:
      'Checking, savings, credit cards, cash, investments, loans, and manual assets like your home or vehicle. Linked accounts sync automatically; manual accounts let you update balances yourself.',
  },
  {
    question: 'What\u2019s the difference between the two budgeting modes?',
    answer:
      'Zero-Based budgeting has you assign every dollar of income to a specific category — nothing is left unbudgeted. Spending Limits lets you set monthly caps on categories and tracks your spending against them. You can switch between modes anytime without losing your data.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-gray-900 dark:text-gray-100"
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
        style={{ maxHeight: open ? contentRef.current?.scrollHeight : 0 }}
      >
        <p className="pb-4 text-sm text-gray-600 dark:text-gray-400">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-14 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
          FAQ
        </h2>
        <div className="mt-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
