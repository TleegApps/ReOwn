import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsConditions: React.FC = () => {
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
              Terms and Conditions for 
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
          <p className="text-gray-300 leading-relaxed mb-4">
            These Terms and Conditions ("Terms") govern your access to and use of RWN Tokens issued by ReOwn. ("ReOwn", "we", "our", or "us"). RWN Tokens are digital utility tokens issued on the Polygon blockchain and designed for use exclusively within the ReOwn e-commerce ecosystem.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">By acquiring, holding, using, or redeeming RWN Tokens, you agree to be legally bound by these Terms. If you do not agree with any part of these Terms, do not use RWN Tokens.</strong>
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Definitions</h2>
            <div className="space-y-3">
              <div>
                <span className="text-blue-300 font-medium">RWN Token:</span>
                <span className="text-gray-300"> A utility-based digital token developed and issued by ReOwn for use within the ReOwn platform.</span>
              </div>
              <div>
                <span className="text-blue-300 font-medium">Platform:</span>
                <span className="text-gray-300"> The ReOwn e-commerce website and associated mobile/web applications where RWN Tokens are utilized.</span>
              </div>
              <div>
                <span className="text-blue-300 font-medium">Wallet:</span>
                <span className="text-gray-300"> A digital wallet (e.g., MetaMask) used to store, send, and receive blockchain-based tokens.</span>
              </div>
              <div>
                <span className="text-blue-300 font-medium">User/You:</span>
                <span className="text-gray-300"> Any person who acquires, holds, or uses RWN Tokens.</span>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Nature of the Token</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              RWN Tokens are not an investment, security, or currency. They are strictly utility tokens created to reward user engagement, facilitate platform-based promotions, and enable digital commerce interactions.
            </p>
            <div>
              <h3 className="text-lg font-medium text-blue-300 mb-2">Key features:</h3>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>• No promise of future value, profits, or returns.</li>
                <li>• Cannot be exchanged for fiat currency directly.</li>
                <li>• Not intended for trading or speculation on external exchanges.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Eligibility</h2>
            <p className="text-gray-300 leading-relaxed mb-4">You must:</p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Be at least 18 years old (or the age of legal majority in your jurisdiction).</li>
              <li>• Have the legal capacity to enter into a binding agreement.</li>
              <li>• Not be located in, or a citizen/resident of, a jurisdiction subject to U.S. sanctions or restrictions.</li>
              <li>• Comply with all applicable laws regarding token use in your jurisdiction.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree to use RWN Tokens solely for lawful purposes on the ReOwn platform. You must not:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Use tokens to engage in fraudulent, deceptive, or illegal activity.</li>
              <li>• Use automated scripts or bots to manipulate token rewards or redemptions.</li>
              <li>• Interfere with the blockchain infrastructure or the integrity of the ReOwn platform.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">5. Blockchain Transparency</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All transactions involving RWN Tokens are permanently recorded on the Polygon blockchain, a public ledger. We do not have the ability to modify, reverse, or delete blockchain entries.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your wallet address, transaction history, and token movements are publicly viewable and not anonymized on-chain.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">6. Issuance and Redemption</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• RWN Tokens may be earned (e.g., through purchases or promotions) or purchased through authorized channels.</li>
              <li>• Tokens may be redeemed for eligible goods, services, discounts, or platform-specific benefits.</li>
              <li>• ReOwn reserves the right to change redemption values, limits, or program rules with or without notice.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">7. Risk Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">You acknowledge and agree that:</p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Blockchain technology is experimental and subject to inherent security risks.</li>
              <li>• RWN Tokens may lose value, become unusable, or be suspended due to technical or legal developments.</li>
              <li>• We are not responsible for lost private keys, stolen wallets, or user-side technical failures.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, branding, and code related to RWN Tokens and ReOwn are protected under applicable intellectual property laws. You may not reproduce, modify, distribute, or use such materials without our explicit permission.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">9. Termination and Suspension</h2>
            <p className="text-gray-300 leading-relaxed mb-4">ReOwn reserves the right to:</p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Suspend or terminate your access to RWN Tokens for any violation of these Terms.</li>
              <li>• Revoke or freeze RWN Tokens suspected to be acquired through fraudulent or abusive behavior.</li>
              <li>• Modify, pause, or discontinue the RWN Token program at any time for business or legal reasons.</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To the fullest extent permitted by law, ReOwn disclaims all liability for:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Losses arising from use or misuse of RWN Tokens.</li>
              <li>• Technical failures, blockchain congestion, or smart contract vulnerabilities.</li>
              <li>• Regulatory restrictions or enforcement actions in your jurisdiction.</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">11. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree to indemnify and hold harmless ReOwn and its officers, employees, and affiliates from any claim, loss, damage, liability, or expense (including attorney's fees) arising from:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Your use of RWN Tokens</li>
              <li>• Your violation of these Terms</li>
              <li>• Any third-party claim resulting from your actions involving the Tokens</li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We reserve the right to revise these Terms at any time. Continued use of RWN Tokens following the posting of changes constitutes your acceptance of those changes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is your responsibility to review the latest version of the Terms available at: <span className="text-blue-400">https://www.reown.io/legal/terms</span>
            </p>
          </div>

          {/* Section 13 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">13. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of laws principles.
            </p>
          </div>

          {/* Section 14 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">14. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For questions, concerns, or legal inquiries, please contact:
            </p>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <p className="text-white font-medium">ReOwn</p>
              <p className="text-gray-300">Legal & Compliance Department</p>
              <p className="text-gray-300">Email: <span className="text-purple-400">legal@reown.io</span></p>
              <p className="text-gray-300">Website: <span className="text-blue-400">https://www.reown.io</span></p>
            </div>
          </div>

          {/* Final Agreement */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
            <p className="text-gray-300 leading-relaxed text-center">
              <strong className="text-white">By acquiring or using RWN Tokens, you confirm that you have read, understood, and agreed to be bound by these Terms.</strong>
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Questions About Our Terms?
            </h3>
            <p className="text-gray-300 mb-6">
              Contact our Legal & Compliance team for any terms-related inquiries.
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

export default TermsConditions;