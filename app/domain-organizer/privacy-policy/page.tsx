import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domain Organizer Privacy Policy',
  description: 'Privacy policy for Domain Organizer.',
}

export default function DomainOrganizerPrivacyPolicy() {
  return (
    <main className='domain-organizer-legal'>
      <h1>
        Privacy <span className='accent'>Policy</span>
      </h1>
      <p>Domain Organizer. Last updated: May 25, 2026.</p>

      <section className='card'>
        <h2>Overview</h2>
        <p>
          Domain Organizer helps you track domain names, renewal dates, ownership verification,
          folders, and notifications. This policy explains what information is processed to provide
          those features.
        </p>

        <h2>Information We Process</h2>
        <p>
          We process account information from sign-in providers, your email address, profile
          information, domain records you add, verification records, folder data, notification
          preferences, and basic technical logs needed to keep the service reliable.
        </p>

        <h2>Authentication and Storage</h2>
        <p>
          Authentication, profile data, and app records are handled with Supabase. If you sign in
          with Apple or Google, those providers may share account identifiers required to sign you
          into the app.
        </p>

        <h2>Purchases</h2>
        <p>
          Subscription purchases, restore status, product identifiers, and entitlement state are
          processed through RevenueCat and Apple. Domain Organizer uses that entitlement state to
          unlock Premium features.
        </p>

        <h2>How Information Is Used</h2>
        <p>
          Information is used to provide the app, keep your domains organized, verify domain
          ownership, manage Premium access, improve reliability, prevent abuse, and respond to
          support or legal requests.
        </p>

        <h2>Your Choices</h2>
        <p>
          You can manage subscriptions through your Apple ID, sign out from the app, and request
          account support through the App Store support contact listed for Domain Organizer.
          Deleting an account may remove app data unless retention is required for security, legal,
          or transaction records.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy as the product changes. The updated version will be made
          available in the app or through this page.
        </p>
      </section>

      <style>{`
        :global(html) {
          color-scheme: dark;
        }

        :global(body) {
          margin: 0;
          background: #0e0e0e;
          color: #ffffff;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.65;
        }

        .domain-organizer-legal {
          max-width: 760px;
          margin: 0 auto;
          padding: 48px 20px 72px;
        }

        h1 {
          margin: 0 0 8px;
          font-size: clamp(36px, 8vw, 64px);
          line-height: 1;
        }

        h2 {
          margin: 32px 0 12px;
          font-size: 22px;
        }

        p {
          color: #adaaaa;
          margin: 0 0 16px;
        }

        .card {
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 24px;
          margin-top: 24px;
        }

        .accent {
          color: #00d54b;
        }
      `}</style>
    </main>
  )
}
