'use client';

import { useEffect, useState } from 'react';
import { Shield, Lock, Eye, FileText, Users, Bell } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last Updated: November 15, 2025</p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy at a Glance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
                  <p className="text-sm text-gray-600">Your data is encrypted and protected</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transparent</h3>
                  <p className="text-sm text-gray-600">Clear about data collection</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Your Control</h3>
                  <p className="text-sm text-gray-600">You own your information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Personal Information:</strong> Name, email address, phone number, and business details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Financial Information:</strong> Business financial records, tax documents, and related data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Communication Data:</strong> Records of correspondence and consultation notes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Technical Data:</strong> IP address, browser type, and device information</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We use the information we collect to:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Provide accounting, tax, and financial advisory services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Communicate with you about our services and updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Comply with legal and regulatory requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Improve our services and client experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Protect against fraud and unauthorized access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We implement industry-standard security measures to protect your information:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Encryption of data in transit and at rest</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Secure server infrastructure with regular security audits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Access controls and authentication protocols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Regular staff training on data protection practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We do not sell your personal information. We may share your information only in these circumstances:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Service Providers:</strong> Third-party vendors who assist in providing our services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Legal Requirements:</strong> When required by law or regulatory authorities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Professional Standards:</strong> With regulatory bodies as required by ICAP standards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      You have the following rights regarding your personal information:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Access:</strong> Request access to your personal data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Correction:</strong> Request correction of inaccurate information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Objection:</strong> Object to certain processing of your information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span><strong>Portability:</strong> Request transfer of your data to another service provider</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-yellow-400/5 rounded-lg p-6 border border-yellow-400/20 mt-4">
                      <p className="font-semibold text-gray-900 mb-2">Abdullah Shahid & Co. Chartered Accountants</p>
                      <p>Email: info@theasco.com</p>
                      <p>Phone: +92-333-7954767</p>
                      <p>Address: Rawalpindi, Punjab, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Your Privacy?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We&apos;re here to help. Contact our team for any privacy-related inquiries.
          </p>
         <Link href='/contactus'>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}