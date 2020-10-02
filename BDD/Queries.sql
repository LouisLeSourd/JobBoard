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
select * from Advertisement WHERE adv_id=0;
-- Select all card attributes of an Advertisement according to its title
select * from Advertisement WHERE adv_title='Ingénieur Développement UX/UI - H/F';
-- Select the card attributes of an Advertisement according to its contract type
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date from Advertisement WHERE adv_contract_type='CDI';
-- Select the card attributes of an Advertisement according to its function
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date from Advertisement WHERE adv_function='Génie Civil & Structures';
-- Select the card attributes of an Advertisement according to its size and its location
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date from Advertisement WHERE adv_city='Saint-Priest';
-- Select the card attributes of an Advertisement according to its size and the Company field
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date from Advertisement WHERE cpn_field='Enabler of energy & digital revolutions';
-- Select the card attributes of an Advertisement according to its size and the Company size
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date from Advertisement WHERE cpn_size='Ingénierie mondiale';
-- Select the card attributes of an Advertisement according to its size and the contract duration
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date from Advertisement WHERE adv_contract_duration='De 12 à 24 mois';
-- Select the card attributes of an Advertisement according to its size and the beginning of the contract
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date from Advertisement WHERE adv_beginning_contract='2021-02-17';
-- Select the card attributes of an Advertisement according to its size and the experience required
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date from Advertisement WHERE adv_required_exp='BAC +2';
-- Select the card attributes of an Advertisement according to its size and the languages required
select adv_title, cpn_name, adv_contract_type, adv_city, adv_country, adv_publication_date, adv_language from Advertisement WHERE adv_language like '%French%';

-- USER QUERIES
-- Check if User exists according to name and password
select user_id FROM User WHERE user_email='louis.le-sourd@epitech.eu' and user_password='louis';

-- INFORMATION QUERIES
select * FROM Company;
select * FROM Advertisement;
select * FROM User;
select * FROM Informations;