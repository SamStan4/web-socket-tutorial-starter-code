-- dummy data courtesy of chat gpt
-- prompt:
-- could you create a small dummy data dump for this:
-- CREATE TABLE IF NOT EXISTS SignatureTable (
--     signatureName TEXT,
--     signatureEmail TEXT,
--     signatureCity TEXT,
--     signatureState TEXT,
--     PRIMARY KEY (signatureName, signatureEmail, signatureCity, signatureState)
-- );
-- end prompt

INSERT INTO SignatureTable (signatureName, signatureEmail, signatureCity, signatureState) VALUES
('Alice Johnson', 'alice.johnson@example.com', 'Los Angeles', 'CA'),
('Bob Smith', 'bob.smith@example.com', 'Chicago', 'IL'),
('Catherine Lee', 'catherine.lee@example.com', 'Houston', 'TX'),
('David Brown', 'david.brown@example.com', 'Phoenix', 'AZ'),
('Emily Davis', 'emily.davis@example.com', 'Philadelphia', 'PA'),
('Frank Miller', 'frank.miller@example.com', 'San Diego', 'CA'),
('Grace Wilson', 'grace.wilson@example.com', 'Dallas', 'TX'),
('Henry Moore', 'henry.moore@example.com', 'San Jose', 'CA'),
('Irene Taylor', 'irene.taylor@example.com', 'Austin', 'TX'),
('Jack Anderson', 'jack.anderson@example.com', 'Jacksonville', 'FL');