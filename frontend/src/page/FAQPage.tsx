// src/components/FAQPage.tsx

import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FAQPage() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to the most common questions about our products and
          services.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-2">
        {[
          {
            q: "Do you offer bike rentals?",
            a: `Yes! We have hourly, daily, and weekly rental rates on a variety of road
                and mountain bikes. Helmets, locks, and lights are included at no extra charge.`,
          },
          {
            q: "Can I buy spare parts and accessories?",
            a: `Absolutely. We stock tires, tubes, chains, saddles, lights, locks, and more
                from top brands. You can purchase in-store or order online for curbside pickup.`,
          },
          {
            q: "Do you provide bike repair and maintenance?",
            a: `Our on-site mechanics offer tune-ups, flat repairs, brake adjustments,
                suspension servicing, and full overhauls. Book your service appointment
                online or walk in during business hours.`,
          },
          {
            q: "What brands of bikes do you carry?",
            a: `We carry Trek, Specialized, Giant, Cannondale, and Scott bikes for all
                disciplines—road, mountain, gravel, electric, and kids’ models.`,
          },
          {
            q: "How do I know what bike size fits me?",
            a: `We have a bike-fitting guide online, but for the best fit stop by our shop.
                Our staff will measure your inseam, reach, and flexibility to recommend the
                perfect frame size and adjustments.`,
          },
          {
            q: "Do you ship bikes nationally?",
            a: `Yes—we offer fully insured, white-glove shipping to all 50 states.
                Standard shipping takes 3–5 business days, or you can upgrade to express
                delivery at checkout.`,
          },
          {
            q: "What warranty comes with a new bike?",
            a: `All new frames purchased through us include a manufacturer’s warranty
                (typically 2–5 years depending on brand) plus our Lifetime Tune-Up Plan
                (one free tune-up per year for the life of the frame).`,
          },
          {
            q: "Can I test-ride a bike before buying?",
            a: `Definitely! We encourage test rides—just bring your ID and a credit card
                for a quick waiver. Test rides are available at no cost Monday–Saturday
                from 10 AM–5 PM.`,
          },
        ].map((item, idx) => (
          <details
            key={idx}
            className="collapse collapse-plus border border-gray-200 rounded-lg"
          >
            <summary className="collapse-title text-lg font-medium">
              {item.q}
            </summary>
            <div className="collapse-content text-gray-700">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>

      {/* Contact Callout */}
      <div className="bg-base-200 rounded-lg p-8 max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="text-gray-600">
            If you couldn't find the answer, drop us a line below.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          <button
            onClick={() => navigate("/contact")}
            className="btn btn-primary flex items-center justify-center"
          >
            <FaEnvelope className="mr-2" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
