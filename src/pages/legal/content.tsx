import { routes } from '../../components/shared';
import { Ph, type LegalSection } from './LegalLayout';

// Copy is the user's finalized text. Bracketed <Ph> values are placeholders still to be filled in.

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'about-policy',
    heading: 'About this Privacy Policy',
    body: (
      <>
        <p>
          Your privacy matters to us. This Privacy Policy explains how Agileborne ("Agileborne," "we," "us," or "our")
          collects, uses, shares, and protects your personal information when you interact with us — including through our
          website <Ph>[agileborne.com]</Ph>, our sales and consulting processes, our marketing activities, and any other
          services we provide.
        </p>
        <p>By using our website or engaging our services, you agree to the practices described in this policy.</p>
      </>
    ),
  },
  {
    id: 'about-us',
    heading: 'About us',
    body: (
      <>
        <p>
          Agileborne is a software consulting and staff augmentation firm headquartered in Lahore, Pakistan, serving clients
          across the USA, UAE, UK, and broader GCC and Western markets. We help entrepreneurs, startups, and established
          businesses build and scale software products.
        </p>
        <p>
          If you have questions about this policy, contact us using the details in the <a href="#contact-us">"Contact us"</a>{' '}
          section below.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    heading: 'Information we collect',
    body: (
      <>
        <p>We collect information in a few ways:</p>
        <ul>
          <li>
            <strong>Information you give us directly</strong> — such as your name, email address, phone number, company
            name, job title, and any details you share when you contact us, request a proposal, or engage our services.
          </li>
          <li>
            <strong>Information we collect automatically</strong> — such as your IP address, browser type, device
            information, pages visited, and referring URLs, gathered through cookies and similar technologies when you use
            our website.
          </li>
          <li>
            <strong>Information from third parties</strong> — such as data from business networking platforms, referral
            partners, or publicly available professional sources used in our sales and marketing activities.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: 'How we use your information',
    body: (
      <>
        <p>We use your personal information to:</p>
        <ul>
          <li>Respond to your inquiries and provide the services you request</li>
          <li>Deliver, manage, and improve our consulting and staff augmentation services</li>
          <li>Communicate with you about projects, proposals, and updates</li>
          <li>Send marketing communications where you have opted in or where permitted by law</li>
          <li>Analyze and improve our website and services</li>
          <li>Comply with legal obligations and enforce our agreements</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    heading: 'Cookies and similar technologies',
    body: (
      <p>
        Our website uses cookies and similar technologies to keep the site working, understand how visitors use it, and
        improve your experience. You can control cookies through your browser settings, though disabling them may affect
        how the site functions. See our <a href={routes.cookies}>Cookie Policy</a> for details.
      </p>
    ),
  },
  {
    id: 'how-we-share',
    heading: 'How we share your information',
    body: (
      <>
        <p>We do not sell your personal information. We may share it with:</p>
        <ul>
          <li>
            Service providers who help us operate our business (for example, hosting, analytics, email, and CRM providers),
            under confidentiality obligations
          </li>
          <li>Professional advisors such as lawyers and accountants where necessary</li>
          <li>Authorities where required by law or to protect our rights</li>
          <li>Business transfers in connection with a merger, acquisition, or sale of assets</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-protect',
    heading: 'How we protect your information',
    body: (
      <p>
        We use reasonable technical and organizational measures to protect your personal information against unauthorized
        access, loss, or misuse. No method of transmission or storage is completely secure, however, and we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    id: 'data-retention',
    heading: 'Data retention',
    body: (
      <p>
        We keep your personal information only as long as necessary for the purposes described in this policy, or as
        required by applicable law. When it is no longer needed, we securely delete or anonymize it.
      </p>
    ),
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    body: (
      <p>
        Depending on where you live, you may have the right to access, correct, delete, or restrict the use of your personal
        information, to object to certain processing, or to withdraw consent. To exercise any of these rights, contact us
        using the details below. We will respond in line with applicable law.
      </p>
    ),
  },
  {
    id: 'international-transfers',
    heading: 'International transfers',
    body: (
      <p>
        Because we operate across multiple regions, your information may be transferred to and processed in countries other
        than your own. Where required, we put safeguards in place to protect your information during such transfers.
      </p>
    ),
  },
  {
    id: 'childrens-privacy',
    heading: "Children's privacy",
    body: (
      <p>
        Our website and services are intended for businesses and professionals and are not directed at children. We do not
        knowingly collect personal information from children.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we'll revise the "Last updated" date above.
        Significant changes will be communicated where appropriate.
      </p>
    ),
  },
  {
    id: 'contact-us',
    heading: 'Contact us',
    body: (
      <>
        <p>If you have questions, concerns, or requests regarding this policy or your personal information, contact us at:</p>
        <p>
          Agileborne
          <br />
          <Ph>[Email address]</Ph>
          <br />
          <Ph>[Physical address]</Ph>
          <br />
          <Ph>[Phone number]</Ph>
        </p>
      </>
    ),
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: 'introduction',
    heading: '1. Introduction',
    body: (
      <>
        <p>
          These Terms & Conditions ("Terms") govern your use of the Agileborne website <Ph>[agileborne.com]</Ph> and, where
          applicable, your engagement of our services. By accessing our website or working with us, you agree to these
          Terms. If you do not agree, please do not use our website.
        </p>
        <p>"Agileborne," "we," "us," and "our" refer to Agileborne, a software consulting and staff augmentation firm.</p>
      </>
    ),
  },
  {
    id: 'services',
    heading: '2. Our services',
    body: (
      <p>
        Agileborne provides software consulting, development, and staff augmentation services. The specific scope,
        deliverables, timelines, and fees for any engagement are defined in a separate written agreement, proposal, or
        statement of work (an "Engagement Agreement"). In the event of any conflict between these Terms and an Engagement
        Agreement, the Engagement Agreement prevails.
      </p>
    ),
  },
  {
    id: 'website-use',
    heading: '3. Use of our website',
    body: (
      <>
        <p>You agree to use our website lawfully and not to:</p>
        <ul>
          <li>Interfere with or disrupt the website or its security</li>
          <li>Attempt to gain unauthorized access to any systems or data</li>
          <li>Use the website to transmit harmful, unlawful, or infringing content</li>
          <li>Copy, reproduce, or exploit website content without our permission</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    heading: '4. Intellectual property',
    body: (
      <>
        <p>
          All content on our website — including text, graphics, logos, the Agileborne name and brand, and design elements —
          is owned by or licensed to Agileborne and protected by intellectual property laws. You may not use, reproduce, or
          distribute it without our prior written consent.
        </p>
        <p>Ownership of work product created during client engagements is governed by the applicable Engagement Agreement.</p>
      </>
    ),
  },
  {
    id: 'client-responsibilities',
    heading: '5. Client responsibilities',
    body: (
      <p>
        Where you engage our services, you agree to provide accurate information, timely feedback, and any access or
        materials reasonably necessary for us to perform the work. Delays or inaccuracies on your side may affect timelines
        and deliverables.
      </p>
    ),
  },
  {
    id: 'fees',
    heading: '6. Fees and payment',
    body: (
      <p>
        Fees, payment schedules, and terms are set out in the applicable Engagement Agreement. Unless stated otherwise,
        invoices are payable within the period specified, and late payments may be subject to interest or suspension of
        services.
      </p>
    ),
  },
  {
    id: 'confidentiality',
    heading: '7. Confidentiality',
    body: (
      <p>
        Both parties agree to keep confidential any non-public information shared during an engagement and to use it only
        for the purposes of that engagement. Specific confidentiality terms may be detailed further in the Engagement
        Agreement.
      </p>
    ),
  },
  {
    id: 'warranties',
    heading: '8. Warranties and disclaimers',
    body: (
      <p>
        We provide our services with reasonable skill and care. Except as expressly stated in an Engagement Agreement, our
        website and services are provided "as is," and we disclaim all other warranties to the fullest extent permitted by
        law.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: '9. Limitation of liability',
    body: (
      <p>
        To the maximum extent permitted by law, Agileborne shall not be liable for any indirect, incidental, or
        consequential damages arising from your use of our website or services. Our total liability in connection with any
        engagement is limited as set out in the applicable Engagement Agreement.
      </p>
    ),
  },
  {
    id: 'indemnification',
    heading: '10. Indemnification',
    body: (
      <p>
        You agree to indemnify and hold Agileborne harmless from claims, losses, or liabilities arising from your misuse of
        our website or breach of these Terms.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    heading: '11. Third-party links',
    body: (
      <p>
        Our website may contain links to third-party sites. We are not responsible for the content, policies, or practices
        of those sites.
      </p>
    ),
  },
  {
    id: 'termination',
    heading: '12. Termination',
    body: (
      <p>
        We may suspend or terminate your access to our website at any time if you breach these Terms. Termination of service
        engagements is governed by the applicable Engagement Agreement.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: '13. Governing law',
    body: (
      <p>
        These Terms are governed by the laws of{' '}
        <Ph>[insert governing jurisdiction — e.g., Pakistan, or the jurisdiction you choose for cross-border contracts]</Ph>.
        Any disputes shall be subject to the exclusive jurisdiction of the courts of <Ph>[insert jurisdiction]</Ph>.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: '14. Changes to these Terms',
    body: (
      <p>
        We may update these Terms from time to time. Changes take effect once posted, with a revised "Last updated" date.
      </p>
    ),
  },
  {
    id: 'contact-us',
    heading: '15. Contact us',
    body: (
      <>
        <p>Questions about these Terms? Reach us at:</p>
        <p>
          Agileborne
          <br />
          <Ph>[Email address]</Ph>
          <br />
          <Ph>[Physical address]</Ph>
          <br />
          <Ph>[Phone number]</Ph>
        </p>
      </>
    ),
  },
];

export const COOKIE_SECTIONS: LegalSection[] = [
  {
    id: 'what-are-cookies',
    heading: 'What are cookies',
    body: (
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the site work properly,
        remember your preferences, and give us insight into how visitors use our site. Similar technologies — like pixels,
        tags, and local storage — do comparable jobs, and we refer to all of them as "cookies" in this policy.
      </p>
    ),
  },
  {
    id: 'why-we-use',
    heading: 'Why we use cookies',
    body: (
      <>
        <p>Agileborne uses cookies to:</p>
        <ul>
          <li>Keep our website functioning and secure</li>
          <li>Remember your preferences and settings</li>
          <li>Understand how visitors navigate and use the site</li>
          <li>Measure the performance of our marketing and content</li>
        </ul>
      </>
    ),
  },
  {
    id: 'types',
    heading: 'Types of cookies we use',
    body: (
      <>
        <p>
          <strong>Strictly necessary cookies</strong> — required for the website to function. These can't be switched off
          in our systems.
        </p>
        <p>
          <strong>Performance and analytics cookies</strong> — help us understand how visitors interact with the site so we
          can improve it. <Ph>[Name your analytics provider, e.g. Google Analytics.]</Ph>
        </p>
        <p>
          <strong>Functionality cookies</strong> — remember choices you make to give you a more personalized experience.
        </p>
        <p>
          <strong>Marketing cookies</strong> — used to deliver relevant content and measure campaign effectiveness.{' '}
          <Ph>[Name providers, e.g. LinkedIn, Meta, if used.]</Ph>
        </p>
      </>
    ),
  },
  {
    id: 'managing',
    heading: 'Managing your cookies',
    body: (
      <>
        <p>
          You can control and delete cookies through your browser settings, and you can adjust your preferences through our
          cookie banner where available. Disabling some cookies may affect how the website functions.
        </p>
        <p>For more on managing cookies, most browsers provide guidance in their help sections.</p>
      </>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        We may update this Cookie Policy from time to time. Any changes take effect once posted, with a revised "Last
        updated" date above.
      </p>
    ),
  },
  {
    id: 'contact-us',
    heading: 'Contact us',
    body: (
      <>
        <p>Questions about our use of cookies? Reach us at:</p>
        <p>
          Agileborne
          <br />
          <Ph>[Email address]</Ph>
        </p>
      </>
    ),
  },
];
