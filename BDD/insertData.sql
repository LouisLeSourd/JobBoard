-- INSERT COMPANIES
-- FIELD Informatique / Télécoms
-- id 0
INSERT INTO Company (cpn_id, cpn_field, cpn_name, cpn_size, cpn_creation_year, cpn_representative, cpn_head_office, cpn_employees_number, 
	cpn_turnover, cpn_email, cpn_description, cpn_social_media) 
VALUES
(0, 'Informatique / Télécoms', 'Assystem', 'Grande entreprise', 1966, 'Dominique Louis', '9-11 Allée de l Arche, 92400 Courbevoie',6000,
497500000, 'contact@assystem.eu', 
'Assystem accompagne les autorités publiques, les opérateurs et les équipementiers pour développer, 
exécuter et livrer des projets d’infrastructures critiques et complexes.
Depuis 54 ans, nous sommes animés par la conviction que les ingénieurs, par leur audace, 
leur expertise et leur capacité à faire bouger les lignes sont les architectes du monde de demain.
Tous les jours, nos 6 000 collaborateurs innovent au contact de leurs clients. 
Ils accompagnent les plus grands projets de l’ingénierie mondiale dans les domaines de l’énergie, de la santé, des sciences de la vie et des transports.',
'Twitter:https://twitter.com/Assystem LinkedIn:https://www.linkedin.com/company/assystem/');
-- FIELD Audit / Conseil / Juridique
-- id 1
INSERT INTO Company (cpn_field, cpn_name, cpn_size, cpn_creation_year, cpn_representative, cpn_head_office, cpn_employees_number, 
	cpn_turnover, cpn_email, cpn_description, cpn_social_media) 
VALUES
('Audit / Conseil / Juridique', 'Inspection générale Groupe BPCE', 'Grande entreprise', 2019, 'Stéphanie PAIX', '110 Av. Pierre Mendès-France, 75013 Paris, France',175,
NULL, 'contact@BPCE.fr', 
'Le Groupe BPCE, deuxième groupe bancaire en France, s’appuie sur deux réseaux de banques commerciales coopératives, autonomes et complémentaires : 
celui des 14 Banques Populaires et celui des 16 Caisses d Epargne. Il est un acteur majeur de la banque de grande clientèle, de la gestion d’actifs et des services financiers avec NATIXIS.
Au sein de BPCE SA, l organe central du groupe, l’Inspection générale groupe est composée de 180 collaborateurs. 
Nous assurons le contrôle périodique de l’organisation, notamment du dispositif de contrôle interne, de la gestion et de la situation financière des établissements du Groupe. 
C’est également l’Inspection générale qui anime et pilote la filière audit du Groupe.',
'Twitter:https://twitter.com/Assystem LinkedIn:https://www.linkedin.com/company/assystem/');
-- FIELD Banque / Finance / Assurance
-- id 2
INSERT INTO Company (cpn_field, cpn_name, cpn_size, cpn_creation_year, cpn_representative, cpn_head_office, cpn_employees_number, 
	cpn_turnover, cpn_email, cpn_description) 
VALUES
('Banque / Finance / Assurance', 'XRAYS TRADING', 'PME', 2004, 'Christian Baré-Wenger', '59 rue des Petites Ecuries - 75010 Paris',25,
2300000, 'contact@trading.fr', 
'XRAYS TRADING est à la fois un opérateur technique et un bureau d études spécialiste des automates de trading algorithmique et des softs connectés aux marchés financiers. 
Intervenant directement en salle des marchés, nos solutions apportent performance, cohérence et fiabilité et doivent être faciles à maintenir,
 ce qui explique notre travail du code, basé sur les fondamentaux du software craftsmanship.');
-- FIELD Distribution / Grande conso / Luxe
-- id 3
INSERT INTO Company (cpn_field, cpn_name, cpn_size, cpn_creation_year, cpn_representative, cpn_head_office, cpn_employees_number, 
	cpn_turnover, cpn_email, cpn_description) 
VALUES
('Distribution / Grande conso / Luxe', 'Pirelli', 'Grande entreprise', 1872, '(Directeur Général) Laurent Cabassu', 'Immeuble Rameau - Paris Nord 2 - 22 avenue des Nations - 93420 Villepinte',30000,
955000000, 'contact@pirelli.com', 
'Fondée en 1872, le groupe Pirelli est l’un des principaux fabricants de pneumatiques au monde. 
Spécialisée sur le segment haut de gamme, la firme italienne se distingue par la production de pneumatiques Premium bénéficiant d’une technologie de pointe.');
-- FIELD Autre
-- id 4
INSERT INTO Company (cpn_field, cpn_name, cpn_size, cpn_creation_year, cpn_representative, cpn_head_office, cpn_employees_number, 
	cpn_turnover, cpn_email, cpn_description) 
VALUES
('Autre', 'La French Tech', 'Start-up', 202, NULL, 'France',3,
NULL, 'contact@frenchtech.fr', 
'Découvrez les startups qui recrutent, décrochez votre prochain emploi
Trouver votre futur stage, alternance, CDD ou CDI, en parcourant les offres d emploi à pourvoir.');









--
-- ADVERTISEMENT QUERIES
--

--
-- ASSYSTEM ADS ID CPN 0
-- id 0
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
    0, 'Informatique / Télécoms', 'Assystem', 'Grande entreprise'
	);
-- id 1
INSERT INTO Advertisement (adv_title, adv_city, adv_country, adv_sector,
	adv_function, adv_publication_date, adv_contract_type, adv_beginning_contract, adv_required_exp, adv_language, adv_contract_duration, adv_description,
    cpn_id, cpn_field, cpn_name, cpn_size)
    VALUES
    ('Ingénieur Développement UX/UI - H/F', 'Paris', 'France', 
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
    0, 'Informatique / Télécoms', 'Assystem', 'Grande entreprise'
	);
--
-- Inspection générale Groupe BPCE ADS ID CPN 1
-- id 2
INSERT INTO Advertisement (adv_title, adv_city, adv_country, adv_sector,
	adv_function, adv_publication_date, adv_contract_type, adv_beginning_contract, adv_required_exp, adv_language, adv_contract_duration, adv_description,
    cpn_id, cpn_field, cpn_name, cpn_size)
    VALUES
    ('Inspection générale Audit Informatique H/F - Promotion Janvier 2021', 'Ile de France', 'France', 
    'Audit, Banque / Finance',
    'Audit', DATE '2020-10-01', 'CDI', DATE '2021-02-01', 'Étudiant / jeune diplômé', 'French', '3 mois',
    'En tant qu’inspecteur, vous menez des missions d’audit de 14 semaines sur toutes les activités du Groupe BPCE, à Paris, en région ou à l’étranger.
	Le département d’Audit informatique est plus particulièrement en charge de l’évaluation de la maîtrise des risques et de l’efficacité des activités et entités du groupe BPCE sur le périmètre des systèmes d’information. 
    En forte coordination avec les inspecteurs bancaires et quantitatifs, vous vous voyez confier un thème d’audit différent à chaque mission : 
    organisation de la fonction informatique, développement et maintenance des SI, qualité du patrimoine applicatif, infogérance, sécurité et continuité d’activité, …',
    1, 'Audit / Conseil / Juridique', 'Inspection générale Groupe BPCE', 'Grande entreprise'
	);
-- id 3
INSERT INTO Advertisement (adv_title, adv_city, adv_country, adv_sector,
	adv_function, adv_publication_date, adv_contract_type, adv_beginning_contract, adv_required_exp, adv_language, adv_contract_duration, adv_description,
    cpn_id, cpn_field, cpn_name, cpn_size)
    VALUES
    ('Inspection générale Audit Bancaire H/F - Promotion Janvier 2021', 'Ile de France', 'France', 
    'Audit, Banque / Finance',
    'Audit', DATE '2020-10-01', 'CDI', DATE '2021-02-01', 'Étudiant / jeune diplômé', 'French', '3 mois',
    'En tant qu’inspecteur, vous menez des missions d’audit de 14 semaines sur toutes les activités du Groupe BPCE, à Paris, en région ou à l’étranger.
	Votre objectif ?
	Réaliser des investigations sur une partie du périmètre de la mission afin d’évaluer la maîtrise des risques de l’entité auditée.
	Pour y parvenir :
	vous analysez des situations variées, identifiez les enjeux et prononcez un diagnostic pertinent sur les risques du domaine audité,
	vous menez des entretiens avec les audités / experts de votre périmètre,
	vos recommandations émises sont hiérarchisées selon leur degré de risque,
	vous présentez vos conclusions aux équipes dirigeantes auditées,
	vous rédigez une synthèse de vos analyses intégré dans le rapport global d’inspection.',
    1, 'Audit / Conseil / Juridique', 'Inspection générale Groupe BPCE', 'Grande entreprise'
	);
--
-- PIRELLI ID CPN 3
-- id 4
INSERT INTO Advertisement (adv_title, adv_city, adv_country, adv_sector,
	adv_function, adv_publication_date, adv_contract_type, adv_beginning_contract, adv_required_exp, adv_language, adv_contract_duration, adv_description,
    cpn_id, cpn_field, cpn_name, cpn_size)
    VALUES
    ('Assistant (e) Trade Marketing Moto (H/F)', 'Villepinte', 'France', 
    'Distribution, Automobile, Autres industries',
    'Marketing & Webmarketing', DATE '2020-09-29', 'Stage', DATE '2021-01-01', 'Étudiant / jeune diplômé', 'French-English', '6 mois',
    'Marketing opérationnel
	-Gestion et suivi des opérations Trade Marketing en cours, BtoB et BtoC
	-Réalisation des benchmark des prix, produits, et de toutes opérations marketing de nos concurrents
	-Présentation des résultats à la force de vente et préconisations pour notre stratégie marketing
	-Création des différents supports d’aide à la vente et documentations techniques
	-Aide à la création et mise à jour des supports de formation',
    3, 'Distribution / Grande conso / Luxe', 'Pirelli', 'Grande entreprise'
	);
-- id 5
INSERT INTO Advertisement (adv_title, adv_city, adv_country, adv_sector,
	adv_function, adv_publication_date, adv_contract_type, adv_beginning_contract, adv_required_exp, adv_language, adv_contract_duration, adv_description,
    cpn_id, cpn_field, cpn_name, cpn_size)
    VALUES
    ('Assistant(e) Communication et Contenu / Création (H/F)', 'Villepinte', 'France', 
    'Distribution, Automobile, Autres industries',
    'Communication, RP & Evénementiel', DATE '2020-09-29', 'Stage', DATE '2021-01-01', 'Étudiant / jeune diplômé', 'French-English', '6 mois',
    'Création 
	-Adaptation et création des brochures et littérature produit
	-Création de contenus dédiés aux opérations sell-In et sell-out
	-Développement et création de contenu vidéo

	Communication
	-Traduction et rédaction des outils presse : revue de presse nationale, communiqués de presse nationaux et internationaux, kit média…
	-Développement stratégique et suivi du plan social média et animation des réseaux sociaux
	-Suivi du plan média et des campagnes de communication
	-Organisation et gestion des évènements
	-Mise en place d’actions de communication spécifiques liées aux campagnes sell-in
	-Respect de l’image et présence lors des évènements et compétitions (déplacements à prévoir)
	-Gestion opérationnelle des collections produit',
    3, 'Distribution / Grande conso / Luxe', 'Pirelli', 'Grande entreprise'
	);
-- id 5
INSERT INTO Advertisement (adv_title, adv_city, adv_country, adv_sector,
	adv_function, adv_publication_date, adv_contract_type, adv_beginning_contract, adv_required_exp, adv_language, adv_contract_duration, adv_description,
    cpn_id, cpn_field, cpn_name, cpn_size)
    VALUES
    ('Assistant(e) Ressources Humaines (H/F)', 'Villepinte', 'France', 
    'Distribution, Automobile, Autres industries',
    'Ressources Humaines', DATE '2020-09-29', 'Stage', DATE '2021-01-01', 'Étudiant / jeune diplômé', 'French-English', '6 mois',
    'Rattaché(e) à la Responsable des Ressources Humaines, vos missions sont généralistes et vous permettent de travailler au cœur des enjeux d’un service RH :
	-Gestion complète des recrutements de stagiaires
	-Animation de la communauté des stagiaires : suivi de stage, suivi des absences, cohésion…
	-Gestion des parcours d’intégration des nouveaux salariés
	-Participation aux projets de formation : déploiement du plan, organisation des formations, suivi administratif…
	-Support à l’administration du personnel (visites médicales, suivi des congés, etc.)
	-Aide au déploiement du système d’information RH, en collaboration avec le Groupe
	-Participation aux projets transverses RH',
    3, 'Distribution / Grande conso / Luxe', 'Pirelli', 'Grande entreprise'
	);






--
-- USER QUERIES
--
-- USER
-- id 0
INSERT INTO User (user_id,user_name, user_surname, user_adress, user_posta_code, user_city, user_country, user_graduation, user_pwssd, user_email, user_description, role, user_birth)
	VALUES
    (0, 'User', 'User', 'user address', 35000, 'User city', 'user country', 'user grade', 'user password', 'user@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');
-- ADMIN
-- id 1   
INSERT INTO User (user_name, user_surname, user_adress, user_posta_code, user_city, user_country, user_graduation, user_pwssd, user_email, user_description, role, user_birth)
	VALUES
    ('Admin', 'Admin', 'admin address', 35000, 'admin city', 'admin country', 'admin grade', 'admin password', 'admin@epitech.eu', 'Description de moi', 'Admin', DATE '2000-08-18');
-- COMPANY
-- id 2
INSERT INTO User (user_name, user_surname, user_adress, user_posta_code, user_city, user_country, user_graduation, user_pwssd, user_email, user_description, role, user_birth)
	VALUES
    ('Company', 'Company', 'company address', 35000, 'company city', 'company country', 'company grade', 'company password', 'coppany@epitech.eu', 'Description de moi', 'company', DATE '2000-08-18');