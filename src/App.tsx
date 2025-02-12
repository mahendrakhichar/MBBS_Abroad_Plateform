import React, { useState } from 'react';
import { GraduationCap, Globe2, ClipboardCheck, Phone, Mail, User, MapPin, Check } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setShowSuccessMessage(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: ''
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const countries = [
    { name: 'Russia', flag: '🇷🇺', fee: '$4,000/year' },
    { name: 'Uzbekistan', flag: '🇺🇿', fee: '$3,500/year' },
    { name: 'Kazakhstan', flag: '🇰🇿', fee: '$3,800/year' },
    { name: 'Philippines', flag: '🇵🇭', fee: '$4,200/year' },
    { name: 'Georgia', flag: '🇬🇪', fee: '$4,500/year' },
    { name: 'Kyrgyzstan', flag: '🇰🇬', fee: '$3,200/year' },
    { name: 'Egypt', flag: '🇪🇬', fee: '$3,900/year' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Study MBBS Abroad
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Your Gateway to International Medical Education
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Apply Now
          </button>
        </div>
      </div>

      {/* Why Study MBBS Abroad */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Study MBBS Abroad?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4">
              <GraduationCap size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">World-Class Education</h3>
            <p className="text-gray-600">Access to internationally recognized medical programs and state-of-the-art facilities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4">
              <Globe2 size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Exposure</h3>
            <p className="text-gray-600">Experience diverse healthcare systems and cultural perspectives.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-blue-600 mb-4">
              <ClipboardCheck size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Affordable Fees</h3>
            <p className="text-gray-600">Quality education at a fraction of domestic costs with scholarship opportunities.</p>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Top Destinations</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <div key={country.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <div className="text-4xl mb-4">{country.flag}</div>
                  <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                  <p className="text-gray-600">Starting from {country.fee}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Eligibility Criteria</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Minimum 50% in Physics, Chemistry & Biology
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                NEET Qualification
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Age: 17-25 years
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Required Documents</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                10th & 12th Mark Sheets
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Valid Passport
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                NEET Score Card
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get Free Counseling</h2>
          {showSuccessMessage && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center justify-center">
              <Check className="mr-2" size={20} />
              Application submitted successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">
                  <span className="flex items-center text-gray-700">
                    <User size={18} className="mr-2" /> Name
                  </span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2">
                  <span className="flex items-center text-gray-700">
                    <Mail size={18} className="mr-2" /> Email
                  </span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2">
                  <span className="flex items-center text-gray-700">
                    <Phone size={18} className="mr-2" /> Phone
                  </span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2">
                  <span className="flex items-center text-gray-700">
                    <MapPin size={18} className="mr-2" /> Preferred Country
                  </span>
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full mt-6 font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center ${
                isSubmitted 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check className="mr-2" size={20} />
                  Application Submitted
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 Mahendra Khichar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;