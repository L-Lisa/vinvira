import { motion } from 'framer-motion';
import Image from 'next/image';

const ServiceHero = ({ 
  title, 
  subtitle, 
  description, 
  serviceType, 
  icon, 
  gradientColors = ['from-vin-primary-500', 'to-vin-secondary-500'],
  ctaText = "Boka gratis möte",
  ctaHref = "#contact",
  customFeatures = null
}) => {
  return (
    <section 
      className="relative min-h-[80vh] lg:min-h-[90vh] bg-gradient-to-br from-vin-neutral-50 via-vin-primary-50 to-vin-secondary-50 overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-100/30 via-transparent to-vin-secondary-100/30" />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-vin-secondary-200/20 to-vin-accent-200/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-vin-primary-200/20 to-vin-secondary-200/20 rounded-full blur-xl"
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,92,246,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Service Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-vin-primary-100 border border-vin-primary-200 rounded-full"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 rounded-full animate-pulse" />
              <span className="text-vin-primary-700 text-sm font-medium">{serviceType}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-vin-neutral-900">{title}</span>
              <span className="block bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 bg-clip-text text-transparent">
                {subtitle}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-vin-neutral-700 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={ctaHref}
                aria-label={`${ctaText} för ${serviceType}`}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 text-white font-semibold rounded-full shadow-accessible hover:shadow-accessible-lg hover:scale-105 transition-all duration-300 ease-out group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vin-primary-300"
              >
                {ctaText}
                <svg 
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-vin-primary-700 font-medium hover:text-vin-primary-800 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vin-primary-300 focus-visible:rounded-full"
              >
                Läs mer
              </a>
            </motion.div>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base"
            >
              {customFeatures ? (
                customFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-vin-success' : 'bg-vin-warning'}`} />
                    <span className="text-vin-neutral-600">{feature}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-vin-success rounded-full" />
                    <span className="text-vin-neutral-600">Ingen månadskostnad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-vin-warning rounded-full" />
                    <span className="text-vin-neutral-600">Snabb leverans</span>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Icon/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-vin-primary-100 to-vin-secondary-100 rounded-full shadow-accessible-lg" />
              
              {/* Icon Container */}
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-white/80 backdrop-blur-sm rounded-full shadow-accessible flex items-center justify-center border border-white/50">
                  {icon}
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-vin-accent-200 to-vin-primary-200 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-vin-secondary-200 to-vin-accent-200 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
