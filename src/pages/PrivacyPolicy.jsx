function PrivacyPolicy() {
  const EFFECTIVE_DATE = 'April 6, 2026'
  const CONTACT_EMAIL = 'farzanalifaisal@gmail.com'
  const APP_NAME = 'Pursuit'

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">
        {APP_NAME} &middot; Effective Date: {EFFECTIVE_DATE}
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          Farzan Software Solutions Inc. ("we", "our", or "us") operates the {APP_NAME} iOS
          application. This Privacy Policy explains what information we collect, how we use it, and
          your rights regarding your data. We are committed to protecting your privacy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We collect the following categories of personal information when you use {APP_NAME}:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-3 leading-relaxed">
          <li>
            <strong>Account credentials:</strong> Your email address and password, collected during
            sign-up and used solely for authentication and account management.
          </li>
          <li>
            <strong>Health data (Steps):</strong> Step count data, which may be sourced from Apple
            HealthKit. This data is used to display your daily activity within the app. We may expand
            health data collection in future versions of the app.
          </li>
          <li>
            <strong>Daily accountability survey responses:</strong> Answers to custom questions you
            create within the app for your personal daily check-in practice. These questions are
            defined entirely by you and are used to help you track your own commitments. This data is
            tied to your account and is visible only to you.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>To create and manage your account</li>
          <li>To display your health and accountability data within the app</li>
          <li>To improve app functionality and user experience</li>
          <li>To respond to support requests</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Sharing and Third Parties</h2>
        <p className="text-gray-600 leading-relaxed">
          We do not sell, rent, or trade your personal information to third parties. We do not share
          your data with advertisers or data brokers. Any third-party services used (such as cloud
          infrastructure) are bound by confidentiality agreements and are only used to operate the
          app.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">HealthKit Data</h2>
        <p className="text-gray-600 leading-relaxed">
          If you grant permission, {APP_NAME} accesses step data from Apple HealthKit. HealthKit
          data is never used for advertising, is never shared with third parties, and is only used to
          provide in-app features directly to you. You can revoke HealthKit access at any time in iOS
          Settings &gt; Privacy &amp; Security &gt; Health.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Retention</h2>
        <p className="text-gray-600 leading-relaxed">
          Your data is retained for as long as your account is active. You may request deletion of
          your account and all associated data by contacting us at the email address below.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Rights</h2>
        <p className="text-gray-600 leading-relaxed">
          You have the right to access, correct, or delete your personal data at any time. To
          exercise these rights, contact us directly at the email address below.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Changes to This Policy</h2>
        <p className="text-gray-600 leading-relaxed">
          We may update this Privacy Policy from time to time. When we do, we will update the
          effective date at the top of this page. Continued use of the app after changes constitutes
          your acceptance of the updated policy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions about this Privacy Policy or your data, please contact us at:
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-2 inline-block text-indigo-600 font-medium hover:text-indigo-800 underline underline-offset-2"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-2 text-gray-600">Farzan Software Solutions Inc.</p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
