import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domain Organizer Terms of Use',
  description: 'Terms of use for Domain Organizer.',
}

export default function DomainOrganizerTermsOfUse() {
  return (
    <main className='domain-organizer-legal'>
      <h1>
        Terms <span className='accent'>of Use</span>
      </h1>
      <p>Domain Organizer. Last updated: May 25, 2026.</p>

      <section className='card'>
        <h2>Agreement</h2>
        <p>
          By using Domain Organizer, you agree to use the app responsibly and only for domain
          records and accounts that you are authorized to manage.
        </p>

        <h2>Domain Tracking</h2>
        <p>
          Domain Organizer can help track renewal dates, verification state, folders, and
          notifications. Domain data may come from registry, registrar, RDAP, DNS, or user-provided
          information and may not always be complete or current.
        </p>

        <h2>Verification</h2>
        <p>
          Domain ownership verification requires DNS or other ownership signals. A domain is not
          considered verified until the app confirms the required verification state.
        </p>

        <h2>Subscriptions</h2>
        <p>
          Premium subscriptions unlock higher limits and Premium features shown in the app. Payment
          is charged to your Apple ID. Subscriptions renew automatically unless canceled at least 24
          hours before the end of the current period, and your account may be charged for renewal
          within 24 hours before the period ends.
        </p>

        <h2>Cancellation and Restore</h2>
        <p>
          You can manage or cancel subscriptions in App Store account settings. The Restore
          Purchases action checks Apple and RevenueCat for an active entitlement and unlocks Premium
          when an eligible purchase exists.
        </p>

        <h2>Apple Terms</h2>
        <p>
          Apple billing, subscription management, refunds, and standard app licensing terms may also
          apply. Read Apple&apos;s Standard End User License Agreement at{' '}
          <a href='https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'>
            apple.com/legal/internet-services/itunes/dev/stdeula/
          </a>
          .
        </p>

        <h2>Support</h2>
        <p>
          For account, billing, or app support, use the App Store support contact listed for Domain
          Organizer. Subscription refunds and billing issues may also need to be handled through
          Apple.
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

        a {
          color: #00d54b;
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
