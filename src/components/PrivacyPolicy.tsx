import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Privacy Policy for 
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              RWN Tokens
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Effective Date: 06/09/2025</p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 leading-relaxed">
            ReOwn ("ReOwn", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, and disclose your personal data when you interact with RWN Tokens, our utility-based digital tokens built on the Polygon blockchain, and used within the ReOwn e-commerce ecosystem.
          </p>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              RWN Tokens are blockchain-based digital utility tokens that function as a rewards and engagement currency within ReOwn. While blockchain technology promotes transparency and decentralization, it also introduces unique privacy considerations. This Privacy Policy outlines how ReOwn handles your personal data in compliance with global privacy standards, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While interacting with RWN Tokens and the ReOwn platform, we may collect the following categories of information:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">a. Direct Information</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Full name</li>
                  <li>• Email address</li>
                  <li>• Wallet address (e.g., MetaMask or compatible Web3 wallet)</li>
                  <li>• Transaction history involving RWN Tokens</li>
                  <li>• Purchase and reward activity within the ReOwn platform</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">b. Automatically Collected Information</h3>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• IP address</li>
                  <li>• Device and browser data</li>
                  <li>• Geolocation (approximate)</li>
                  <li>• User behavior on the ReOwn platform</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">c. Blockchain Data</h3>
                <p className="text-gray-300">
                  While we do not control or operate the Polygon network, blockchain transactions related to RWN Tokens (including your wallet address, token transfers, and timestamps) are publicly visible and immutable.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information collected for the following purposes:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• To issue, track, and redeem RWN Tokens</li>
              <li>• To enable and secure blockchain-based interactions</li>
              <li>• To enhance user experience and personalize rewards</li>
              <li>• To provide customer service and support</li>
              <li>• To comply with applicable legal and regulatory obligations</li>
              <li>• To analyze user trends and improve ReOwn services</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Blockchain Transparency</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Please be aware that blockchain networks like Polygon are public ledgers. When you engage in a token transaction:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Your wallet address and transaction history become visible to third parties.</li>
              <li>• We do not control the storage or deletion of data recorded on-chain.</li>
              <li>• Deletion of on-chain data is technically infeasible once recorded.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">5. Sharing of Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell or rent your personal data. However, we may share your data with:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Service providers (e.g., analytics, payment processors)</li>
              <li>• Regulatory authorities, if required under law</li>
              <li>• Blockchain explorers and third-party integrations you authorize (e.g., wallets, DeFi apps)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              All third-party services are contractually obligated to handle your data in compliance with applicable privacy laws.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">6. Data Storage and Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement industry-standard encryption, firewalls, and security measures to protect your data. However, blockchain data is stored permanently on a decentralized ledger, which we do not control.
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Off-chain user data is stored on secure servers with strict access controls.</li>
              <li>• We retain off-chain personal data only as long as necessary for the purposes stated in this policy.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">7. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Access your personal data</li>
              <li>• Request correction or deletion of your data</li>
              <li>• Opt out of marketing communications</li>
              <li>• File a complaint with a data protection authority</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              For blockchain-based data, we cannot alter or delete records on-chain.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise your rights, contact us at: <span className="text-purple-400 font-medium">privacy@reown.io</span>
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar technologies on the ReOwn platform to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Authenticate sessions</li>
              <li>• Track reward accrual and engagement</li>
              <li>• Improve platform functionality</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You may control cookies through your browser settings.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              If you are located outside the United States, please note that your information may be transferred to, processed, and stored in the United States, where privacy laws may not be as protective as those in your jurisdiction. We ensure all data transfers comply with applicable legal requirements.
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              The ReOwn platform and RWN Tokens are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </div>

          {/* Section 11 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. If material changes are made, we will notify you through the platform or via email.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Please review this page regularly to stay informed about how we protect your privacy.
            </p>
          </div>

          {/* Section 12 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">12. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy, please contact:
            </p>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <p className="text-white font-medium">ReOwn</p>
              <p className="text-gray-300">Legal & Compliance Department</p>
              <p className="text-gray-300">Email: <span className="text-purple-400">privacy@reown.io</span></p>
              <p className="text-gray-300">Website: <span className="text-blue-400">https://www.reown.io</span></p>
            </div>
          </div>

          {/* Final Notice */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
            <p className="text-gray-300 leading-relaxed text-center">
              <strong className="text-white">By using RWN Tokens and accessing the ReOwn platform, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</strong>
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Questions About Our Privacy Policy?
            </h3>
            <p className="text-gray-300 mb-6">
              Contact our Legal & Compliance team for any privacy-related inquiries.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;