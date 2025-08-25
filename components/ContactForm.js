import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    namn: '',
    email: '',
    foretag: '',
    telefon: '',
    tjänster: [],
    meddelande: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      tjänster: prev.tjänster.includes(service)
        ? prev.tjänster.filter(s => s !== service)
        : [...prev.tjänster, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Skicka data till vår API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          namn: '',
          email: '',
          foretag: '',
          telefon: '',
          tjänster: [],
          meddelande: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.namn && formData.email && formData.foretag;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 bg-gradient-to-br from-vin-primary-100 via-white to-vin-secondary-100 rounded-3xl p-8 shadow-xl border border-vin-primary-200/50"
    >
      {/* Obligatoriska fält */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="namn" className="block text-sm font-medium text-vin-neutral-700 mb-2">
            Namn *
          </label>
          <input
            type="text"
            id="namn"
            name="namn"
            value={formData.namn}
            onChange={handleInputChange}
            required
            autoComplete="name"
            className="w-full px-4 py-3 border border-vin-primary-200/50 rounded-xl focus:ring-2 focus:ring-vin-primary-500/50 focus:border-vin-primary-400 transition-all duration-300 bg-gradient-to-r from-white/95 to-vin-primary-50/30 hover:from-white hover:to-vin-primary-100/50 hover:border-vin-primary-300 hover:shadow-lg hover:shadow-vin-primary-200/50"
            placeholder="Ditt namn"
            aria-describedby="namn-error"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-vin-neutral-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete="email"
            className="w-full px-4 py-3 border border-vin-primary-200/50 rounded-xl focus:ring-2 focus:ring-vin-primary-500/50 focus:border-vin-primary-400 transition-all duration-300 bg-gradient-to-r from-white/95 to-vin-primary-50/30 hover:from-white hover:to-vin-primary-100/50 hover:border-vin-primary-300 hover:shadow-lg hover:shadow-vin-primary-200/50"
            placeholder="din@email.se"
            aria-describedby="email-error"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="foretag" className="block text-sm font-medium text-vin-neutral-700 mb-2">
            Företag *
          </label>
          <input
            type="text"
            id="foretag"
            name="foretag"
            value={formData.foretag}
            onChange={handleInputChange}
            required
            autoComplete="organization"
            className="w-full px-4 py-3 border border-vin-primary-200/50 rounded-xl focus:ring-2 focus:ring-vin-primary-500/50 focus:border-vin-primary-400 transition-all duration-300 bg-gradient-to-r from-white/95 to-vin-primary-50/30 hover:from-white hover:to-vin-primary-100/50 hover:border-vin-primary-300 hover:shadow-lg hover:shadow-vin-primary-200/50"
            placeholder="Företagsnamn"
            aria-describedby="foretag-error"
          />
        </div>

        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-vin-neutral-700 mb-2">
            Telefon (valfritt)
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleInputChange}
            autoComplete="tel"
            className="w-full px-4 py-3 border border-vin-primary-200/50 rounded-xl focus:ring-2 focus:ring-vin-primary-500/50 focus:border-vin-primary-400 transition-all duration-300 bg-gradient-to-r from-white/95 to-vin-primary-50/30 hover:from-white hover:to-vin-primary-100/50 hover:border-vin-primary-300 hover:shadow-lg hover:shadow-vin-primary-200/50"
            placeholder="070-123 45 67"
            aria-describedby="telefon-error"
          />
        </div>
      </div>

      {/* Tjänster */}
      <fieldset>
        <legend className="block text-sm font-medium text-vin-neutral-700 mb-3">
          Vad är du intresserad av? *
        </legend>
        <div className="grid gap-3 md:grid-cols-3" role="group" aria-labelledby="tjänster-legend">
          {[
            { id: 'webb', label: 'Webbdesign', color: 'vin-primary' },
            { id: 'seo', label: 'SEO', color: 'vin-secondary' },
            { id: 'båda', label: 'Båda', color: 'vin-accent' }
          ].map((service, index) => (
            <button
              key={service.id}
              type="button"
              onClick={() => handleServiceToggle(service.id)}
              aria-pressed={formData.tjänster.includes(service.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 ${
                formData.tjänster.includes(service.id)
                                  ? `border-${service.color}-500 bg-${service.color}-100/80 text-${service.color}-700 shadow-${service.color}-200/50`
                : 'border-vin-neutral-300/50 bg-white/90 text-vin-neutral-700 hover:border-vin-primary-300 hover:bg-white hover:shadow-lg hover:shadow-vin-primary-100/50'
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>
        {formData.tjänster.length === 0 && (
          <p 
            id="tjänster-error" 
            className="text-sm text-vin-neutral-500 mt-2" 
            role="alert"
          >
            Välj minst en tjänst
          </p>
        )}
      </fieldset>

      {/* Meddelande */}
      <div>
        <label htmlFor="meddelande" className="block text-sm font-medium text-vin-neutral-700 mb-2">
          Meddelande (valfritt)
        </label>
        <textarea
          id="meddelande"
          name="meddelande"
          value={formData.meddelande}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-vin-primary-200/50 rounded-xl focus:ring-2 focus:ring-vin-primary-500/50 focus:border-vin-primary-400 transition-all duration-300 resize-none bg-gradient-to-r from-white/95 to-vin-primary-50/30 hover:from-white hover:to-vin-primary-100/50 hover:border-vin-primary-300 hover:shadow-lg hover:shadow-vin-primary-200/50"
          placeholder="Berätta mer om ditt projekt eller frågor du har..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full py-4 px-8 rounded-full font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-vin-primary-300/50 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 ${
            isFormValid && !isSubmitting
              ? 'bg-gradient-to-r from-vin-primary-600 via-vin-primary-500 to-vin-secondary-600 hover:from-vin-primary-700 hover:via-vin-primary-600 hover:to-vin-secondary-700 shadow-vin-primary-200/50'
              : 'bg-vin-neutral-400 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Skickar...' : 'Skicka'}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center shadow-lg">
          Tack för ditt meddelande! Vi återkommer snart.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center shadow-lg">
          Ett fel uppstod. Försök igen eller kontakta oss direkt på hej@vinvira.se
        </div>
      )}
    </form>
  );
};

export default ContactForm;
