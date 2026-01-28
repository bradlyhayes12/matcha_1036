import { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contacts').insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-green-600 rounded"></div>
            <div className="h-1 w-12 bg-green-400 rounded"></div>
            <div className="h-1 w-12 bg-green-600 rounded"></div>
          </div>
          <p className="text-lg text-gray-600">
            Have questions or want to book us for your event? We'd love to hear from you!
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center text-gray-700 font-medium mb-2">
                <User className="w-5 h-5 mr-2 text-green-600" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center text-gray-700 font-medium mb-2">
                <Mail className="w-5 h-5 mr-2 text-green-600" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center text-gray-700 font-medium mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none bg-white"
                placeholder="Tell us about your event or ask us anything..."
              />
            </div>

            {status === 'success' && (
              <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-xl">
                Thank you! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-xl">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {status === 'submitting' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Contact Information
            </h3>
            <div className="text-center space-y-2 text-gray-600">
              <p>Email: hello@matchapopup.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Instagram: @matchapopup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
