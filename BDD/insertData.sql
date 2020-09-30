INSERT INTO Company (cpn_id, cpn_field, cpn_name, cpn_size, cpn_creation_year, cpn_representative, cpn_head_office, cpn_employees_number, 
	cpn_turnover, cpn_email, cpn_description, cpn_social_media) 
VALUES
(0, 'Enabler of energy & digital revolutions', 'Assystem', 'Ingénierie mondiale', 1966, 'Dominique Louis', '9-11 Allée de l Arche, 92400 Courbevoie',6000,
497500000, 'contact@assystem.eu', 
'Assystem accompagne les autorités publiques, les opérateurs et les équipementiers pour développer, 
exécuter et livrer des projets d’infrastructures critiques et complexes.
Depuis 54 ans, nous sommes animés par la conviction que les ingénieurs, par leur audace, 
leur expertise et leur capacité à faire bouger les lignes sont les architectes du monde de demain.
Tous les jours, nos 6 000 collaborateurs innovent au contact de leurs clients. 
Ils accompagnent les plus grands projets de l’ingénierie mondiale dans les domaines de l’énergie, de la santé, des sciences de la vie et des transports.',
'Twitter:https://twitter.com/Assystem LinkedIn:https://www.linkedin.com/company/assystem/');

INSERT INTO Company (cpn_id, cpn_field, cpn_name, cpn_size, cpn_creation_year, cpn_representative, cpn_head_office, cpn_employees_number, 
	cpn_turnover, cpn_email, cpn_description, cpn_social_media) 
VALUES
(1, 'Enabler of energy & digital revolutions', 'AssystemD', 'Ingénierie nationnale', 1966, 'Dominique Louis', '9-11 Allée de l Arche, 92400 Courbevoie',6000,
497500000, 'contact2@assystem.eu', 
'Assystem accompagne les autorités publiques, les opérateurs et les équipementiers pour développer, 
exécuter et livrer des projets d’infrastructures critiques et complexes.
Depuis 54 ans, nous sommes animés par la conviction que les ingénieurs, par leur audace, 
leur expertise et leur capacité à faire bouger les lignes sont les architectes du monde de demain.
Tous les jours, nos 6 000 collaborateurs innovent au contact de leurs clients. 
Ils accompagnent les plus grands projets de l’ingénierie mondiale dans les domaines de l’énergie, de la santé, des sciences de la vie et des transports.',
'Twitter:https://twitter.com/Assystem LinkedIn:https://www.linkedin.com/company/assystem/');

INSERT INTO Advertisement (adv_id, adv_title, adv_city, adv_country, adv_sector,
	adv_function, adv_publication_date, adv_contract_type, adv_beginning_contract, adv_required_exp, adv_language, adv_contract_duration, adv_description,
    cpn_id, cpn_field, cpn_name, cpn_size)
    VALUES
    (0, 'Ingénieur Développement UX/UI - H/F', 'Saint-Priest', 'France', 
    'Conseil, Energie / Utilities, Chimie, Défense, Electronique, Autres industries, ESN / Informatique, Bureau d études, Ingénierie, Médecine / Pharmacie / Santé',
    'Génie Civil & Structures', DATE '2020-09-23', 'CDD', DATE '2021-02-17', 'BAC +2', 'French-English', 'De 12 à 24 mois',
    'Rattaché(e) au responsable du bureau d études et en étroite collaboration avec Chefs de Projets, vous assurez l établissement des pièces graphiques de projets tertiaires et industriels au travers d’une maquette numérique.
Les projets sont liés à des missions d’assistance à maîtrise d’ouvrage, de maîtrise d’œuvre et des études techniques pour des donneurs d’ordres publics et privés.
Vous assurez les missions suivantes :
    La conception des lots techniques des bâtiments en collaboration avec les architectes et ingénieurs spécialistes.
    La réalisation des plans d implantation et des schémas de principe des corps d’états techniques.
    La participation sur les sites et chez les clients aux réunions d avancement des études.
    A ce titre, vos principales missions sont :
    Analyser les données d’entrée, vérifier leur complétude et identifier celles manquantes
    Réaliser les études techniques de conception et produire les documents techniques de votre compétence entrant dans la constitution des dossiers aux divers stades d’études.
    Gérer les interfaces avec les autres disciplines
    Assister aux différentes réunions de conception tout corps d’état',
    0, 'Enabler of energy & digital revolutions', 'Assystem', 'Ingénierie nationnale'
	);
    
INSERT INTO Advertisement (adv_id, adv_title, adv_city, adv_country, adv_sector,
	adv_function, adv_publication_date, adv_contract_type, adv_beginning_contract, adv_required_exp, adv_language, adv_contract_duration, adv_description,
    cpn_id, cpn_field, cpn_name, cpn_size)
    VALUES
    (1, 'Ingénieur Développement UX/UI - H/F', 'Paris', 'France', 
    'Conseil, Energie / Utilities, Chimie, Défense, Electronique, Autres industries, ESN / Informatique, Bureau d études, Ingénierie, Médecine / Pharmacie / Santé',
    'Génie Civil & Structures', DATE '2020-09-23', 'CDI', DATE '2021-02-17', 'BAC +3', 'French', '24 mois',
    'Rattaché(e) au responsable du bureau d études et en étroite collaboration avec Chefs de Projets, vous assurez l établissement des pièces graphiques de projets tertiaires et industriels au travers d’une maquette numérique.
Les projets sont liés à des missions d’assistance à maîtrise d’ouvrage, de maîtrise d’œuvre et des études techniques pour des donneurs d’ordres publics et privés.
Vous assurez les missions suivantes :
    La conception des lots techniques des bâtiments en collaboration avec les architectes et ingénieurs spécialistes.
    La réalisation des plans d implantation et des schémas de principe des corps d’états techniques.
    La participation sur les sites et chez les clients aux réunions d avancement des études.
    A ce titre, vos principales missions sont :
    Analyser les données d’entrée, vérifier leur complétude et identifier celles manquantes
    Réaliser les études techniques de conception et produire les documents techniques de votre compétence entrant dans la constitution des dossiers aux divers stades d’études.
    Gérer les interfaces avec les autres disciplines
    Assister aux différentes réunions de conception tout corps d’état',
    0, 'Enabler of energy & digital revolutions', 'Assystem', 'Ingénierie mondiale'
	);

INSERT INTO User (user_id,user_name, user_surname, user_adress, user_posta_code, user_city, user_country, user_graduation, user_pwssd, user_email, user_description, role, user_birth)
	VALUES
    (0, 'Le Sourd', 'Louis', '8 contours du chatelet', 35310, 'Bréal sous Monfort', 'France', 'DUT info', 'louis', 'louis.le-sourd@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');
    
INSERT INTO User (user_id,user_name, user_surname, user_adress, user_posta_code, user_city, user_country, user_graduation, user_pwssd, user_email, user_description, role, user_birth)
	VALUES
    (1, 'Robin', 'Benoit', 'en coloc', 35000, 'Rennes', 'France', 'BTS info', 'louis', 'benoit.robin@epitech.eu', 'Description de moi', 'Admin', DATE '2000-08-18');
