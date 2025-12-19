import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = "October 26, 2025"; // **IMPORTANT: Update the date**
  const companyName = "Anusha Structures";
  const companyAddress = "No:58 A,Madison Street,El paso, texus, USA"; // **IMPORTANT: Update address**
  const contactEmail = "anushastructures02@gmail.com"; // **IMPORTANT: Update email**

  const PolicySection = ({ title, children, id }) => (
    <div id={id} className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-a-royalsafforn mb-3 border-b pb-2">{title}</h3>
      <div className="text-gray-600 space-y-4">{children}</div>
    </div>
  );

  return (
    <div className="h-full bg-bg-brown p-4 md:p-16">
      <div className="container mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: **{lastUpdated}**
        </p>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Welcome to **{companyName}**. We are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information in relation to our construction, consultation, and web services.
        </p>

        <PolicySection title="1. Information We Collect" id="information">
          <p>We collect information to provide you with a better service, manage projects, and communicate effectively.</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              **Personal Identification Data:** Name, email address, phone number, and physical address (for site visits, contracts, and communication).
            </li>
            <li>
              **Project-Specific Data:** Land/plot documents, project specifications (designs, material preferences), transaction information related to contracts and payments, and progress updates.
            </li>
            <li>
              **Usage Data:** Information about how you access and use our website or application, such as IP address, browser type, and pages visited.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="2. How We Use Your Information" id="use">
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>**Service Delivery:** To plan, execute, and manage your construction or consultation project.</li>
            <li>**Internal Record Keeping:** For accounting, legal compliance, and internal analysis.</li>
            <li>**Communication:** To send project updates, invoices, promotional materials (with consent), and respond to inquiries.</li>
            <li>**Improvement:** To improve our services, products, and website experience.</li>
          </ul>
        </PolicySection>
        
        <PolicySection title="3. Disclosure of Data" id="disclosure">
          <p>We may share your information only when necessary to fulfill our business objectives or comply with the law.</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              **Service Providers:** With third-party vendors and contractors (e.g., architects, labor teams, suppliers) who perform services on our behalf.
            </li>
            <li>
              **Legal Requirements:** When required by law, court order, or governmental regulation.
            </li>
            <li>
              **Business Transfers:** In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="4. Data Security" id="security">
          <p>
            We are committed to ensuring that your information is secure. We implement appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect to prevent unauthorized access or disclosure.
          </p>
          <p className="text-sm text-yellow-700 bg-yellow-100 p-3 rounded">
            **Note:** No method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </PolicySection>

        <PolicySection title="5. Your Rights" id="rights">
          <p>You have certain rights regarding your personal data:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>**Access:** You have the right to request copies of your Personal Data held by us.</li>
            <li>**Rectification:** You have the right to request that we correct any information you believe is inaccurate.</li>
            <li>**Erasure:** You have the right to request that we erase your Personal Data, under certain conditions.</li>
          </ul>
        </PolicySection>
        
        <PolicySection title="6. Contact Us" id="contact">
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-1 mt-3 font-medium">
            <p>
              **Company Name:** {companyName}
            </p>
            <p>
              **Address:** {companyAddress}
            </p>
            <p>
              **Email:** <a href={`mailto:${contactEmail}`} className="text-blue-500 hover:text-blue-600">{contactEmail}</a>
            </p>
          </div>
        </PolicySection>
      </div>
    </div>
  );
};

export default PrivacyPolicy;