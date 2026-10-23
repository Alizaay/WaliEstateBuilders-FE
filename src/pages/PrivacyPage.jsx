import SEO from '../components/SEO';
import { COMPANY } from '../config/site';

const PrivacyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Wali Estates & Builders"
        description="Privacy policy for Wali Estates & Builders website inquiries and contact information."
        path="/privacy"
      />
      <section className="bg-white pt-28 pb-20">
        <div className="container-site max-w-3xl prose-custom">
          <h1 className="font-display text-4xl text-navy">Privacy Policy</h1>
          <p className="mt-4 text-slate-soft">
            This privacy policy explains how {COMPANY.name} handles information submitted through
            this website.
          </p>

          <h2 className="mt-10 font-display text-2xl text-navy">Information We Collect</h2>
          <p className="mt-3 text-slate-soft leading-relaxed">
            When you submit an inquiry or contact form, we may collect your name, phone number,
            email address (if provided), inquiry type, property of interest, and message content.
          </p>

          <h2 className="mt-8 font-display text-2xl text-navy">How We Use Information</h2>
          <p className="mt-3 text-slate-soft leading-relaxed">
            We use submitted information to respond to your inquiry, discuss property opportunities,
            and provide related customer service. We do not sell your personal information.
          </p>

          <h2 className="mt-8 font-display text-2xl text-navy">Data Storage</h2>
          <p className="mt-3 text-slate-soft leading-relaxed">
            Inquiry data is stored securely in our database for operational follow-up. Access is
            limited to authorized personnel.
          </p>

          <h2 className="mt-8 font-display text-2xl text-navy">Contact</h2>
          <p className="mt-3 text-slate-soft leading-relaxed">
            For privacy-related questions, contact us at {COMPANY.phoneDisplay}
            {COMPANY.email ? ` or ${COMPANY.email}` : ''}.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
