export default function FAQ() {
  const faqs = [
    {
      question: "Are the apartments currently available?",
      answer:
        "Yes. The first phase of Bona Apartments is complete and units are available for viewing.",
    },
    {
      question: "What apartment types are available?",
      answer:
        "We currently offer one-bedroom and two-bedroom apartments.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes. Residents have access to secure and ample parking space.",
    },
    {
      question: "How can I book a viewing?",
      answer:
        "You can use the booking form on this website or contact us directly via phone or WhatsApp.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-bold text-xl mb-2">
                {faq.question}
              </h3>

              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}