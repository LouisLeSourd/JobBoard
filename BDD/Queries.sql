-- COMPANY QUERIES
-- Select all card attributes of a Company according to its id
select * from Company WHERE cpn_id=0;
-- Select all card attributes of a Company according to its name
select * from Company WHERE cpn_name='Assystem';
-- Select the card attributes of a Company according to its field
select cpn_name, cpn_size, cpn_employees_number, cpn_field from Company WHERE cpn_field='Enabler of energy & digital revolutions';
-- Select the card attributes of a Company according to its size
select cpn_name, cpn_size, cpn_employees_number, cpn_field from Company WHERE cpn_size='Ingénierie mondiale';
-- Select the card attributes of a Company according to its size and its field
select cpn_name, cpn_size, cpn_employees_number, cpn_field from Company WHERE cpn_size='Ingénierie mondiale' and cpn_field='Enabler of energy & digital revolutions';

-- ADVERTISEMENT QUERIES
-- Select all card attributes of an Advertisement according to its id
select * from Advertisement WHERE offer_id=0;
-- Select all card attributes of an Advertisement according to its title
select * from Advertisement WHERE offer_title='Ingénieur Développement UX/UI - H/F';
-- Select the card attributes of an Advertisement according to its contract type
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date from Advertisement WHERE offer_contract_type='CDI';
-- Select the card attributes of an Advertisement according to its function
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date from Advertisement WHERE offer_function='Génie Civil & Structures';
-- Select the card attributes of an Advertisement according to its size and its location
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date from Advertisement WHERE offer_city='Saint-Priest';
-- Select the card attributes of an Advertisement according to its size and the Company field
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date from Advertisement WHERE cpn_field='Enabler of energy & digital revolutions';
-- Select the card attributes of an Advertisement according to its size and the Company size
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date from Advertisement WHERE cpn_size='Ingénierie mondiale';
-- Select the card attributes of an Advertisement according to its size and the contract duration
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date from Advertisement WHERE offer_contract_duration='De 12 à 24 mois';
-- Select the card attributes of an Advertisement according to its size and the beginning of the contract
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date from Advertisement WHERE offer_beginning_contract='2021-02-17';
-- Select the card attributes of an Advertisement according to its size and the experience required
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date from Advertisement WHERE offer_required_exp='BAC +2';
-- Select the card attributes of an Advertisement according to its size and the languages required
select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date, offer_language from Advertisement WHERE offer_language like '%French%';

-- USER QUERIES
-- Check if User exists according to name and password
select user_id FROM User WHERE user_email='louis.le-sourd@epitech.eu' and user_password='louis';

-- INFORMATION QUERIES
select * FROM Company;
select * FROM Offer;
select * FROM User;
select * FROM Informations;
select distinct * from Offer LEFT JOIN Company where offer_id='0' and cpn_id='0';
INSERT INTO Informations VALUES ('iuzgdaiakbcjahk,cbakljbcXOMUACHX', 0, 'contact@assystem.eu', 0, 'user@epitech.eu', 3);

DELETE FROM Informations WHERE user_id=0 and offer_id=3;
DELETE FROM Offer WHERE cpn_id=3;
DELETE FROM Company where cpn_id=0;