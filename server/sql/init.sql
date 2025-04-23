CREATE TABLE IF NOT EXISTS SignatureTable (
    signatureName TEXT,
    signatureEmail TEXT,
    signatureCity TEXT,
    signatureState TEXT,
    PRIMARY KEY (signatureName, signatureEmail, signatureCity, signatureState)
);