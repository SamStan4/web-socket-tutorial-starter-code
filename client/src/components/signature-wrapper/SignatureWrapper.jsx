import Signature from "@components/signature/Signature.jsx";
import "./SignatureWrapperStyles.css";

export default function SignatureWrapper({ signatures }) {
  console.log(signatures)
  return (
    <div className="signature-wrapper-styles">
      <h2 className="signature-text-style">Signatures</h2>
      <div className="header-wrapper-styles">
          <div className="name-header-styles">
            <p className="header-text-style">Name</p>
          </div>
          <div className="city-header-styles">
            <p className="header-text-style">City</p>
          </div>
          <div className="state-header-styles">
            <p className="header-text-style">State</p>
          </div>
      </div>
      <div className="signature-inner-wrapper-styles">
        {signatures.map((signature, index) => (
          <Signature
            key={index}
            signature={signature}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};