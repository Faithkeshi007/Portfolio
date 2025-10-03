import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="p-10 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your phone number"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your message..."
            ></textarea>
          </div>

          {submitMessage && (
            <div className={`mb-4 p-3 rounded-md ${
              submitMessage.includes('Thank you') 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 disabled:bg-purple-400 transition duration-300 font-medium"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Your Contact Information */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
          <p className="text-gray-700 mb-2">
            Email: <span className="font-medium">faithpeter2012@gmail.com</span>
          </p>
          <p className="text-gray-700 mb-4">
            Phone: <span className="font-medium">+254 796 826 314</span>
          </p>
          <a 
            href="https://www.linkedin.com/in/faith-wambui-peter" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 underline hover:text-purple-700"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}