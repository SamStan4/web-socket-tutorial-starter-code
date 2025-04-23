import "./SignatureStyles.css";

export default function Signature({ signature, index }) {
  const signatureWrapperStyle = "single-signature-wrapper-styles" + (index % 2 === 0 ? " gray-styles" : "");
  return (
    <div className={signatureWrapperStyle}>
      <div className="name-styles">
        <p className="text-styles">{signature.signatureName}</p>
      </div>
      <div className="city-styles">
        <p className="text-styles">{signature.signatureCity}</p>
      </div>
      <div className="state-styles">
        <p className="text-styles">{signature.signatureState}</p>
      </div>
    </div>
  );
};