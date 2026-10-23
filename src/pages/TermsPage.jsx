import SEO from '../components/SEO';
import { COMPANY } from '../config/site';

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms and Conditions | Wali Estates & Builders"
        description="Terms and conditions for using the Wali Estates & Builders website."
        path="/terms"
      />
      <section className="bg-white pt-28 pb-20">
        <div className="container-site max-w-3xl">
          <h1 className="font-display text-4xl text-navy">Terms and Conditions</h1>
          <p className="mt-4 text-slate-soft leading-relaxed">
            By using the {COMPANY.name} website, you agree to the following terms.
          </p>

          <h2 className="mt-10 font-display text-2xl text-navy">Website Content</h2>
          <p className="mt-3 text-slate-soft leading-relaxed">
            Property information, imagery, and descriptions are provided for informational purposes.
            Sample or illustrative content is clearly labeled and should not be treated as verified
            available inventory or completed company projects.
          </p>

          <h2 className="mt-8 font-display text-2xl text-navy">No Guarantees</h2>
          <p className="mt-3 text-slate-soft leading-relaxed">
            Availability, pricing, and property details are subject to change. Final terms are
            confirmed directly with our team. Nothing on this website constitutes a binding offer
            unless expressly confirmed in writing.
          </p>

          <h2 className="mt-8 font-display text-2xl text-navy">Inquiries</h2>
          <p className="mt-3 text-slate-soft leading-relaxed">
            Submitting a form or contacting us via phone or WhatsApp does not create a contractual
            relationship. We will respond to genuine inquiries as promptly as reasonably possible.
          </p>

          <h2 className="mt-8 font-display text-2xl text-navy">Contact</h2>
          <p className="mt-3 text-slate-soft leading-relaxed">
            Questions about these terms may be directed to {COMPANY.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
