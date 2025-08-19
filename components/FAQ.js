import { motion } from 'framer-motion';

export default function FAQ({ data, title = "Vanliga frågor", subtitle = "Svar på de frågor vi får oftast", maxWidth = "max-w-4xl" }) {
  // Smart data handling - supports both Schema.org and simple Q&A formats
  const getQuestionText = (item) => {
    if (item.q) return item.q; // Simple format
    if (item.name) return item.name; // Schema.org format
    return "Question";
  };

  const getAnswerText = (item) => {
    if (item.a) return item.a; // Simple format
    if (item.acceptedAnswer?.text) return item.acceptedAnswer.text; // Schema.org format
    return "Answer";
  };

  // Handle different data structures
  const faqItems = data?.mainEntity || data || [];

  return (
    <section className={`${maxWidth} mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-vin-neutral-50`}>
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.6}}
          className="text-3xl sm:text-4xl font-bold mb-4 text-vin-neutral-900"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.6, delay:0.1}}
          className="text-vin-neutral-700 text-base sm:text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay: index * 0.1}}
            className="group"
          >
            <div className="bg-white border border-vin-neutral-200 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:shadow-accessible hover:shadow-vin-primary-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold text-vin-neutral-900 mb-3 transition-colors duration-300 ${
                    index === 0 ? 'group-hover:text-vin-primary-600' : 
                    index === 1 ? 'group-hover:text-vin-secondary-600' : 
                    'group-hover:text-vin-accent-600'
                  }`}>
                    {getQuestionText(item)}
                  </h3>
                  <p className="text-vin-neutral-700 leading-relaxed">
                    {getAnswerText(item)}
                  </p>
                </div>
                <div className="ml-4 w-6 h-6 rounded-full bg-gradient-to-br from-vin-primary-500 to-vin-secondary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-vin-neutral-600 mb-4">Har du fler frågor?</p>
        <a 
          href="mailto:hej@vinvira.se" 
          className="inline-flex items-center text-vin-primary-600 font-semibold hover:text-vin-primary-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300 focus-visible:rounded-md px-2 py-1"
        >
          Kontakta oss
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
