import React from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'

const Consultancy = () => {
  return (
    <>
      <HeroSection />
      <div className="min-h-screen bg-white">
        <Head>
          <title>Consultancy & Business Advisor - Shreemantyogi Chhatrapati Shivray Upakram LLP</title>
          <meta property="og:title" content="Consultancy & Business Advisor - Shreemantyogi Chhatrapati Shivray Upakram LLP" />
          <meta name="description" content="Shreemantyogi Chhatrapati Udyog Samuh - Professional Consultancy & Business Advisory Services in Accounts, Finance, Tax, HR, and Business Development." />
        </Head>
        <Navigation />
        
        <main className="pt-20">
          {/* Logo Section */}
          <section className="bg-gradient-to-br from-gray-50 via-orange-50 to-orange-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <img 
                src="/logo.png" 
                alt="Shreemantyogi Logo" 
                className="w-96 h-96 mx-auto mb-8 object-contain"
              />
            </div>
          </section>

          {/* Introduction Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A <strong>Shreemantyogi Chhatrapati Udyog Samuh</strong>, everything is in our name, A group is leading by Founder Directors <strong>Manisha Rajesh Savale</strong> & <strong>Rajesh Uddhav Savale</strong> The group not doing only business but contribute in Building Nation, Develop society and charity to weaker & needy person. We are doing & running business on basis of <strong>" Save, Increase, Use & Donate"</strong>. And <strong>"customers satisfaction is our profit"</strong>
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  We have star business in July 2021 under banner of <strong>Shreemantyogi Chhatrapati Udyog Samuh</strong> by naming <strong>"Shreemantyogi Chhatrapati Shivray Udyog Samuha Private Limited"</strong>, In April 2025 by naming <strong>"Shreemantyogi Chhatrapati Shivray Upaakram LLP"</strong> and proposed to register a Charity to donate weaker section & needy person.
                </p>
              </div>
            </div>
          </section>

          {/* Company 1 Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center border-b-4 border-orange-600 pb-4">
                  SHREEMANTYOGI CHHATRAPATI SHIVRAY UDYOG SAMUHA PRIVATE LIMITED
                </h2>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    We <strong>Shreemantyogi Chhatrapati Shivray Udyog Samuha Private Limited</strong>. Pimpri Chinchwad, Pune based LLP Firm.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We are writing to introduce our new line of <strong>Consultancy & Business Advisor</strong> in Accounts Finance management, Tax Management, Purchase & Store Management, HR & Office Management, Business Development, Investment management, Formation of business & Funds raising, and how it can benefit your business.
                  </p>
                </div>

                {/* Benefits Section */}
                <div className="bg-orange-50 rounded-xl p-6 mb-8 border-l-4 border-orange-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Service:</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    It will help to your organisation to maximum utilisation of your existing resources, Develop and or line-up business in proper way with existing staff. We are providing such services on weekly, Fortnight and or Monthly basis as per your organisation need and requirement. Scope of service as follows:
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                  {/* Formation of business */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Formation of business:</h3>
                    <p className="text-lg text-gray-700">
                      Registration of PAN, TAN, GST, PF, ESI, Partnership Firm, LLP, OPC, Private Ltd, Limited Company, Section 8 Company, Charitable Trust, Logo, Trade Mark Etc
                    </p>
                  </div>

                  {/* Accounts Finance management */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Accounts Finance management:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Account writing, Accounts & books checking & verifying,</li>
                      <li>Training to staff, getting work done from your staff with in time line,</li>
                      <li>Third party Audit,</li>
                      <li>Help to close the books & Finalization of accounts,</li>
                      <li>File Income Tax Return,</li>
                      <li>Providing Reports & data to management as per their requirement</li>
                      <li>Direct Indirect accounting,</li>
                      <li>Project Report,</li>
                      <li>Control over Variable overheads.</li>
                    </ul>
                  </div>

                  {/* Fraud detecting */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Fraud detecting:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Proper watched on Petty cash & site expenses, co-ordination with Vendors & Suppliers</li>
                      <li>Cross check Bills & expenses</li>
                      <li>Educate site staff about bills & how to prepare & submit expenses report</li>
                      <li>Establish a strong internal control system</li>
                      <li>Implement a whistleblower policy</li>
                      <li>Update Technology & Security</li>
                    </ul>
                  </div>

                  {/* MIS & Financial Reporting */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">MIS & Financial Reporting:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Budgeting & Forecasting</li>
                      <li>Fix Overheads Report, Cost Variance Report, Cash In-flow & Out-flow Report, Monthly P&L Account</li>
                      <li>Report on the company's financial health and liquidity</li>
                      <li>Maintain Indirect Account & report to management</li>
                      <li>Reporting to Management on unplanned excessive use of funds.</li>
                      <li>Reporting on im-balancing (receipt v/s expenses) & Control on bills payable.</li>
                      <li>Indirect Accounting</li>
                    </ul>
                  </div>

                  {/* Tax Management */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Tax Management:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Working of TDS, GST, Advance Tax, PF, PT, ESIC</li>
                      <li>Process for Payment & filling returns on or before due date</li>
                      <li>managing Profit & Expenses.</li>
                    </ul>
                  </div>

                  {/* Purchase & Store Management */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Purchase & Store Management:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Introduce entire purchase cycle & working accordingly,</li>
                      <li>Maintain update data of Suppliers,</li>
                      <li>Search new suppliers,</li>
                      <li>Review & meeting with suppliers.</li>
                    </ul>
                  </div>

                  {/* HR & Office Management */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">HR & Office Management:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Entire Office & Administration with Control on internal & external environment.</li>
                      <li>Developing & Implements of SOP</li>
                      <li>PDCA Policy (Plan Do Check & Action)</li>
                      <li>Introduce & Implement of HR policies,</li>
                      <li>Entire RICE Policy,</li>
                      <li>Recruitment of Staff by hiring Right Talents & Develop skill, Staff verification, maintaining employee History,</li>
                      <li>Co- ordination with Employee & employer</li>
                      <li>Maintain Asset Register, Inward-outward, Vehicle, and Utility Expenses register.</li>
                    </ul>
                  </div>

                  {/* Business Development */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Business Development:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Line-up business activities,</li>
                      <li>Marketing, Planning</li>
                      <li>Help to develop business.</li>
                    </ul>
                  </div>

                  {/* Investment management */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Investment management:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Invest surplus Funds proper Segment like Shares, MF, Real Estate or new business.</li>
                      <li>Increase revenue by reducing Taxes.</li>
                    </ul>
                  </div>

                  {/* Funds Raising */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Funds Raising:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                      <li>Help to raised fund as per requirement of organisation Through Bank, Finance, Private Finance etc.</li>
                      <li>Plan for raising finance resources (Secured & Unsecured)</li>
                      <li>Loan Proposal, CC, OD TL, BG & LC</li>
                    </ul>
                  </div>

                  {/* Commercials */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">Commercials:</h3>
                    <p className="text-2xl">
                      We are providing affordable service and it just start from <strong>₹5,000/-</strong> plus GST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company 2 Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl shadow-xl p-8 lg:p-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center border-b-4 border-orange-600 pb-4">
                  SHREEMANTYOGI CHHATRAPATI SHIVRAY UPAKRAM LLP
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    We are a leading export company specializing in trading and marketing agricultural produce and commodities. Our expertise spans across sugar, spices (dry red chilies, turmeric, coriander, cumin seeds), food grains (rice, wheat, corn, sorghum, tea), pulses, and agricultural feed (soybean meal, rice bran de-oiled cake).
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    We import premium lentils, faba beans, black Matpe, and toor (Pigeon Peas) in bulk from Canada, Australia, and Burma. As B2B traders specializing in sugar, corn, and dal, we maintain extensive stocks and distribute to institutional parties while following standard packing processes to ensure quality.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our commitment to quality assurance and global export expertise makes us a trusted partner for agricultural products, spices, handicrafts, and traditional Indian goods in international markets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">OUR LEADERSHIP</h2>
                <div className="w-20 h-1 bg-orange-600 mx-auto mb-4"></div>
                <h3 className="text-3xl font-semibold text-gray-700">Meet our Team</h3>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Contact Details */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <p className="text-gray-700">+91 7276621572</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <p className="text-gray-700">arthseva.accttaxhrconsultancy@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address Details */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Address</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Registered Address:</p>
                        <p className="text-gray-700">
                          Shiv Shankar CHS, Stilt Floor, Near Mahadev Mandir, Sangavi, Pune, Maharashtra State, India – 411 027.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Admin & Communication Address:</p>
                        <p className="text-gray-700">
                          26/3, Sadashiv Colony, Lane No 1, Thergaon, Pune, Maharashtra State, India – 411 033.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Consultancy

