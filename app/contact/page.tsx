'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form_type: 'contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          company: formData.company || undefined,
          service_type: formData.service || undefined,
          budget_range: formData.budget || undefined,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        .contact-heading-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Custom Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #1B1E2A;
        }

        ::-webkit-scrollbar-thumb {
          background: #4B5563;
          border-radius: 6px;
          border: 2px solid #1B1E2A;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #6B7280;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #4B5563 #1B1E2A;
        }
      `}</style>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative container mx-auto px-4 sm:px-8 max-w-[1100px]">
          <div className="pt-20 lg:pt-36 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">Get in Touch</span>
            </div>
            <h1 className="mt-2 pb-2 -mx-4 sm:mx-0 text-center text-foreground text-[28px] lg:text-[42px] tracking-tight leading-[110%] max-w-[600px] font-bold">
              Contact Creative Agency in Puducherry
            </h1>
            <p className="mt-6 text-center text-muted-foreground text-[15px] lg:text-[17px] leading-[160%] max-w-[580px]">
              Get in touch with TKV Creatographics for web design, branding, and digital marketing services. Free consultation and quick response within 24 hours.
            </p>
          </div>
        </section>

        {/* Location Section */}
        <section className="container mx-auto px-4 sm:px-8 max-w-[1100px] mt-16">
          <div className="rounded-2xl border border-border bg-muted/30 overflow-hidden p-8 sm:p-12 relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Our Location</h3>
              <p className="text-muted-foreground text-lg">Puducherry, India</p>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We're based in the beautiful coastal city of Puducherry, serving clients worldwide with our creative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="container mx-auto px-8 max-w-[1100px] mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card/60 p-6 hover:bg-muted hover:border-orange-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-foreground font-semibold text-[18px] mb-2">Email Us</h3>
              <p className="text-muted-foreground text-[14px] mb-3">Send us an email anytime</p>
              <a href="mailto:hello@tkvcreatographics.com" className="text-orange-400 text-[15px] hover:text-orange-300 transition">
                hello@tkvcreatographics.com
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 hover:bg-muted hover:border-orange-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-foreground font-semibold text-[18px] mb-2">Call Us</h3>
              <p className="text-muted-foreground text-[14px] mb-3">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+919876543210" className="text-orange-400 text-[15px] hover:text-orange-300 transition">
                +91 98765 43210
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 hover:bg-muted hover:border-orange-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30 mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-foreground font-semibold text-[18px] mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-[14px] mb-3">Come say hello</p>
              <p className="text-orange-400 text-[15px]">
                Puducherry, India
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto px-8 max-w-[1200px] mt-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 rounded-2xl border border-border bg-gradient-to-br from-card to-background p-6 shadow-xl flex flex-col">
              <div className="mb-6">
                <h2 className="text-foreground font-bold text-[24px] mb-1">Send us a message</h2>
                <p className="text-muted-foreground text-[14px]">We'll get back to you within 24 hours</p>
              </div>

              {success && (
                <div className="mb-4 p-4 bg-green-950/50 border border-green-900/50 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-green-400 font-semibold text-sm">Message Sent Successfully!</h4>
                    <p className="text-green-300/80 text-xs mt-1">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-4 p-4 bg-red-950/50 border border-red-900/50 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-400 font-semibold text-sm">Error</h4>
                    <p className="text-red-300/80 text-xs mt-1">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-foreground text-[13px] font-medium mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-muted border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-[13px] font-medium mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-muted border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-foreground text-[13px] font-medium mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-muted border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-[13px] font-medium mb-1.5">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-muted border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-foreground text-[13px] font-medium mb-1.5">Service Interested In</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-muted border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-foreground focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition appearance-none cursor-pointer"
                        style={{ backgroundImage: 'none' }}
                      >
                        <option value="">Select a service</option>
                        <option value="branding">Brand Identity</option>
                        <option value="logo">Logo Design</option>
                        <option value="web">Web Development</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="social">Social Media</option>
                        <option value="video">Video Production</option>
                        <option value="photography">Photography</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground/70">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-foreground text-[13px] font-medium mb-1.5">Budget Range</label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-muted border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-foreground focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition appearance-none cursor-pointer"
                        style={{ backgroundImage: 'none' }}
                      >
                        <option value="">Select budget</option>
                        <option value="<50k">Less than ₹50,000</option>
                        <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                        <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                        <option value="3l+">₹3,00,000+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground/70">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-foreground text-[13px] font-medium mb-1.5">Project Details *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-muted border border-border rounded-lg px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-foreground font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-card/60 p-5 flex flex-col justify-between">
              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-[16px] mb-2">Business Hours</h3>
                      <div className="space-y-1 text-muted-foreground text-[13px]">
                        <p><span className="text-foreground font-medium">Mon - Fri:</span> 9AM - 6PM</p>
                        <p><span className="text-foreground font-medium">Saturday:</span> 10AM - 4PM</p>
                        <p><span className="text-foreground font-medium">Sunday:</span> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-5">
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-[16px] mb-2">Quick Response</h3>
                      <p className="text-muted-foreground text-[13px] leading-relaxed mb-2">
                        We respond within 24 hours. For urgent matters, call us directly. You can reach us on WhatsApp for quick reply.
                      </p>
                      <a 
                        href="https://wa.me/919876543210" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] text-orange-400 hover:text-orange-300 transition font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Click here to send message
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-5">
                  <div className="rounded-lg bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-foreground font-semibold text-[17px]">Start Your Project</h3>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-gradient-to-r from-orange-500 to-red-500 text-foreground rounded-full">
                        Free Estimate
                      </span>
                    </div>
                    <p className="text-muted-foreground text-[13px] leading-relaxed mb-3">
                      Get a detailed quote and project timeline with no obligations.
                    </p>
                    <button className="w-full bg-transparent border-2 border-orange-500 text-orange-400 font-semibold py-2.5 px-4 text-[14px] rounded-lg hover:bg-orange-500 hover:text-foreground hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                      Request Quote
                    </button>
                    <p className="text-muted-foreground/70 text-[11px] text-center mt-3 leading-relaxed">
                      By requesting a quote, you agree to our terms and conditions. No payment required at this stage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-5 mt-5">
                <h3 className="text-foreground font-semibold text-[16px] mb-3">Follow Us</h3>
                <div className="flex gap-2">
                  <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-orange-500 flex items-center justify-center transition-all duration-300 group">
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-orange-500 flex items-center justify-center transition-all duration-300 group">
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-orange-500 flex items-center justify-center transition-all duration-300 group">
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-orange-500 flex items-center justify-center transition-all duration-300 group">
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
