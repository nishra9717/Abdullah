'use client';

import { useEffect, useState } from 'react';
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
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
              <Scale className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using our services. By engaging our services, you agree to be bound by these terms.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Points</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Services</h3>
                  <p className="text-sm text-gray-600">ICAP certified accountants</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Client Obligations</h3>
                  <p className="text-sm text-gray-600">Timely information sharing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Scale className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fair Terms</h3>
                  <p className="text-sm text-gray-600">Clear and transparent</p>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      By accessing or using the services provided by Abdullah Shahid & Co. Chartered Accountants, you agree to comply with and be bound by these Terms of Service.
                    </p>
                    <p>
                      These terms apply to all clients, visitors, and users of our services. If you do not agree with any part of these terms, you should not use our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Abdullah Shahid & Co. provides professional accounting and financial services including but not limited to:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Tax planning and compliance services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Audit and assurance services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Financial advisory and consulting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Business registration and compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Bookkeeping and accounting services</span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Specific services will be detailed in individual engagement letters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      As a client, you agree to:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Provide accurate, complete, and timely information required for our services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Respond promptly to requests for information or documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pay fees according to the agreed payment terms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Inform us of any changes that may affect our services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Maintain the confidentiality of any sensitive information shared with you</span>
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
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Professional Standards</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our services are provided in accordance with:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Professional standards set by the Institute of Chartered Accountants of Pakistan (ICAP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>International Financial Reporting Standards (IFRS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Pakistan tax laws and regulations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Professional code of ethics and conduct</span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      We maintain independence, objectivity, and professional skepticism in all our engagements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Payment</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our fee structure and payment terms:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Fees will be specified in the engagement letter for each service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Payment terms typically range from net 15 to net 30 days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Late payments may incur additional charges as specified in the agreement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Additional services outside the scope may result in additional fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>We reserve the right to suspend services for non-payment</span>
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
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      To the fullest extent permitted by law:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Our liability is limited to the fees paid for the specific service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>We are not liable for indirect, consequential, or punitive damages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>We maintain professional indemnity insurance as required by ICAP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Claims must be brought within one year of the service completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Either party may terminate the engagement:
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>By providing 30 days written notice to the other party</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Immediately for material breach of these terms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>Upon completion of the agreed services</span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Upon termination, you remain liable for all fees for services rendered up to the termination date.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      These Terms of Service are governed by the laws of Pakistan. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts in Rawalpindi, Pakistan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
                    </p>
                    <p>
                      We will notify clients of material changes via email or through our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-400/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      For questions about these Terms of Service, please contact us:
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how we can help with your accounting needs.
          </p>
                            <Link href='tel:+92-333-7954767'>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
            Schedule Consultation
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}