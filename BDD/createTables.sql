-- Client :  localhost:####
-- Généré le :  lun 28 Septembre 2020 à 11:07
-- Version du serveur :  5.5.42
-- Version de PHP :  5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  'createTables'
--
use JobBoard;
-- --------------------------------------------------------
DROP TABLE IF EXISTS Informations;
DROP TABLE IF EXISTS Offer;
DROP TABLE IF EXISTS Company;
DROP TABLE IF EXISTS User;
--
-- Structure de la table 'Company'
--
CREATE TABLE IF NOT EXISTS Company (
	cpn_id smallint(5) unsigned NOT NULL AUTO_INCREMENT, -- Company id
	cpn_field varchar(255) DEFAULT NULL, -- Company working field
	cpn_name varchar(100) NOT NULL, -- Company name
	cpn_logo varchar(255) DEFAULT NULL, -- company logo
	cpn_size varchar(255) DEFAULT NULL, -- Company size
    cpn_creation_year int NOT NULL, -- Company year of creation
    cpn_representative varchar(255) DEFAULT NULL, -- Company VIP
    cpn_head_office varchar(255) NOT NULL, -- Company place of the main office
    cpn_employees_number int unsigned DEFAULT NULL, -- Company number of employees
    cpn_turnover int, -- Company annual sales
	cpn_email varchar(100) DEFAULT NULL, -- Company email
    cpn_description text DEFAULT NULL, -- Company description
    cpn_social_media varchar(255) DEFAULT NULL, -- Company social media
    -- PRIMARY KEY
    PRIMARY KEY (cpn_id),
    -- UNIQUES KEYS
    UNIQUE KEY ind_uni_cpn_id (cpn_id),
    UNIQUE KEY ind_uni_cpn_name (cpn_name),
    KEY ind_uni_cpn_size (cpn_size),
    KEY ind_uni_cpn_field (cpn_field),
	UNIQUE KEY ind_uni_cpn_logo (cpn_logo),
    UNIQUE KEY ind_uni_cpn_email (cpn_email)
) ENGINE=InnoDB;
--
-- Structure de la table 'O'
--
CREATE TABLE IF NOT EXISTS Offer (
	offer_id smallint(5) unsigned NOT NULL AUTO_INCREMENT, -- ad id
    offer_title varchar(255), -- ad title 
    offer_adress varchar(200) DEFAULT NULL, -- Company adress (for the ad)
    offer_postal_code int(5) DEFAULT NULL, -- Company postal code (for the ad)
	offer_city varchar(60) DEFAULT NULL, -- Company city (for the ad)
    offer_country varchar(60) DEFAULT NULL, -- Company country (for the ad)
    offer_sector varchar(255) DEFAULT NULL, -- ad activity sector
    offer_function varchar(255) DEFAULT NULL, -- employement promoted by the ad
    offer_publication_date date, -- date of publication
    offer_contract_type varchar(255), -- type of contact
    offer_beginning_contract date DEFAULT NULL, -- beginning of the employement
    offer_required_exp varchar(255) DEFAULT NULL, -- minimum professional experience
    offer_language varchar(255) DEFAULT 'French', -- language required for the employement
    offer_contract_duration int(255) DEFAULT NULL, -- duration of the employement promoted by the ad
    offer_description text DEFAULT NULL, -- description of the employement in month
    -- Company attributes
    cpn_id smallint(5) unsigned,
    cpn_field varchar(255),
    cpn_name varchar(100),
    cpn_size varchar(255),
    cpn_logo varchar(255),
    -- links to Company attributes
    CONSTRAINT fk_cpn_id FOREIGN KEY (cpn_id) REFERENCES Company(cpn_id),
    CONSTRAINT fk_cpn_logo FOREIGN KEY (cpn_logo) REFERENCES Company(cpn_logo),
    CONSTRAINT fk_cpn_field FOREIGN KEY (cpn_field) REFERENCES Company(cpn_field),
    CONSTRAINT fk_cpn_size FOREIGN KEY (cpn_size) REFERENCES Company(cpn_size),
    CONSTRAINT fk_cpn_name FOREIGN KEY (cpn_name) REFERENCES Company(cpn_name),
    -- PRIMARY KEY
    PRIMARY KEY (offer_id)
) ENGINE=InnoDB;
--
-- Structure de la table 'User'
--
CREATE TABLE IF NOT EXISTS User (
	user_id smallint(5) unsigned NOT NULL AUTO_INCREMENT, -- user id
	user_name varchar(100) NOT NULL, -- user name
	user_surname varchar(60) NOT NULL, -- user surname
	user_adress varchar(200) DEFAULT NULL, -- user adress
	user_posta_code int(5) DEFAULT NULL, -- user postal code
	user_city varchar(60) DEFAULT NULL, -- user city
	user_country varchar(60) DEFAULT NULL, -- user country
	user_graduation varchar(60) DEFAULT NULL, -- user diplomas
    user_cv varchar(60) DEFAULT NULL, -- user resumé
	user_password varchar(60) DEFAULT NULL, -- user password
	user_email varchar(100) DEFAULT NULL, -- user email
	user_description text DEFAULT NULL, -- description of the user
	role varchar(60) DEFAULT 'User', -- user type (visitor, normal user, admin, Company repre)
	user_birth date DEFAULT NULL, -- date of user birth
    -- PRIMARYU KEY
	PRIMARY KEY (user_id),
    -- UNIQUES KEYS
	UNIQUE KEY ind_uni_user_id (user_id),
	UNIQUE KEY ind_uni_user_email (user_email)
) ENGINE=InnoDB;
--
-- Structure de la table 'Informations'
--
CREATE TABLE IF NOT EXISTS Informations (
	text_email text DEFAULT NULL, -- content of emails written 
    -- Company attributes
	cpn_id smallint(5) unsigned,
    cpn_email varchar(100),
    -- user attributes
    user_id smallint(5) unsigned,
    user_email varchar(100),
    -- offers attributes
    offer_id smallint(5) unsigned,
    -- links to Company attributes
    CONSTRAINT fk_cpn_email_info FOREIGN KEY (cpn_email) REFERENCES Company(cpn_email),
    CONSTRAINT fk_cpn_id_info FOREIGN KEY (cpn_id) REFERENCES Company(cpn_id),
    -- links to user attributes
    CONSTRAINT fk_user_id_info FOREIGN KEY (user_id) REFERENCES User(user_id),
    CONSTRAINT fk_user_email_info FOREIGN KEY (user_email) REFERENCES User(user_email),
    -- links to offer attributes
    CONSTRAINT fk_offer_id_info FOREIGN KEY (offer_id) REFERENCES Offer(offer_id)    
) ENGINE=InnoDB;
