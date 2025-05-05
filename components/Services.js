import { motion } from "framer-motion";

const services = [
  {
    title: "Business Websites",
    description:
      "Clean, professional, mobile-optimized websites tailored to your brand.",
  },
  {
    title: "E-Commerce Setup",
    description: "Online stores with product pages, checkout, and order forms.",
  },
  {
    title: "Booking & Contact Forms",
    description:
      "Easy-to-use forms so your clients can book or reach out directly.",
  },
  {
    title: "SEO & Speed Optimization",
    description:
      "Rank better on Google and load lightning-fast on all devices.",
  },
  {
    title: "Website Refresh / Rebuilds",
    description:
      "Already have a site? I can modernize it without starting from scratch.",
  },
  {
    title: "Landing Pages",
    description:
      "For promos, events, or campaigns — fast turnarounds available.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-10 text-zinc-900 dark:text-white">
          What I Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 border rounded-xl shadow-md bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
