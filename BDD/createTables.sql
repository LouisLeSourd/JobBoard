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
DROP TABLE IF EXISTS Advertisement;
DROP TABLE IF EXISTS Companie;
DROP TABLE IF EXISTS User;
--
-- Structure de la table 'Companie'
--
CREATE TABLE IF NOT EXISTS Companie (
	cpn_id smallint(5) unsigned NOT NULL AUTO_INCREMENT, -- companie id
	cpn_field varchar(255) DEFAULT NULL, -- companie working field
	cpn_name varchar(100) NOT NULL, -- companie name
	cpn_size varchar(255) DEFAULT NULL, -- companie size
    cpn_creation_year int NOT NULL, -- companie year of creation
    cpn_representative varchar(255) DEFAULT NULL, -- companie VIP
    cpn_head_office varchar(255) NOT NULL, -- companie place of the main office
    cpn_employees_number int unsigned DEFAULT NULL, -- companie number of employees
    cpn_turnover int NOT NULL, -- companie annual sales
	cpn_email varchar(100) DEFAULT NULL, -- companie email
    cpn_description text DEFAULT NULL, -- companie description
    cpn_social_media varchar(255) DEFAULT NULL, -- companie social media
    -- PRIMARY KEY
    PRIMARY KEY (cpn_id),
    -- UNIQUES KEYS
    UNIQUE KEY ind_uni_cpn_id (cpn_id),
    UNIQUE KEY ind_uni_cpn_name (cpn_name),
    UNIQUE KEY ind_uni_cpn_size (cpn_size),
    UNIQUE KEY ind_uni_cpn_field (cpn_field),
    UNIQUE KEY ind_uni_cpn_email (cpn_email)
) ENGINE=InnoDB;
--
-- Structure de la table 'Advertisements'
--
CREATE TABLE IF NOT EXISTS Advertisement (
	adv_id smallint(5) unsigned NOT NULL AUTO_INCREMENT, -- ad id
    adv_title varchar(255), -- ad title 
    adv_adress varchar(200) DEFAULT NULL, -- companie adress (for the ad)
    adv_postal_code varchar(6) DEFAULT NULL, -- companie postal code (for the ad)
	adv_city varchar(60) DEFAULT NULL, -- companie city (for the ad)
    adv_country varchar(60) DEFAULT NULL, -- companie country (for the ad)
    adv_sector varchar(255) DEFAULT NULL, -- ad activity sector
    adv_fonction varchar(255) DEFAULT NULL, -- employement promoted by the ad
    adv_publication_date date, -- date of publication
    adv_beginning_contract date DEFAULT NULL, -- beginning of the employement
    adv_required_exp int(255) DEFAULT NULL, -- minimum professional experience
    adv_language varchar(255) DEFAULT 'French', -- language required for the employement
    adv_contract_duration int(255) DEFAULT NULL, -- duration of the employement promoted by the ad
    adv_description text DEFAULT NULL, -- description of the employement in month
    -- companie attributes
    cpn_id smallint(5) unsigned,
    cpn_field varchar(255),
    cpn_name varchar(100),
    cpn_size varchar(255),
    -- links to companie attributes
    CONSTRAINT fk_cpn_id FOREIGN KEY (cpn_id) REFERENCES Companie(cpn_id),
    CONSTRAINT fk_cpn_field FOREIGN KEY (cpn_field) REFERENCES Companie(cpn_field),
    CONSTRAINT fk_cpn_size FOREIGN KEY (cpn_size) REFERENCES Companie(cpn_size),
    CONSTRAINT fk_cpn_name FOREIGN KEY (cpn_name) REFERENCES Companie(cpn_name),
    -- PRIMARY KEY
    PRIMARY KEY (adv_id)
) ENGINE=InnoDB;
--
-- Structure de la table 'User'
--
CREATE TABLE IF NOT EXISTS User (
	user_id smallint(5) unsigned NOT NULL AUTO_INCREMENT, -- user id
	user_name varchar(100) NOT NULL, -- user name
	user_surname varchar(60) NOT NULL, -- user surname
	user_adress varchar(200) DEFAULT NULL, -- user adress
	user_posta_code varchar(6) DEFAULT NULL, -- user postal code
	user_city varchar(60) DEFAULT NULL, -- user city
	user_country varchar(60) DEFAULT NULL, -- user country
	user_graduation varchar(60) DEFAULT NULL, -- user diplomas
	user_pwssd varchar(60) DEFAULT NULL, -- user password
	user_email varbinary(100) DEFAULT NULL, -- user email
	user_description text DEFAULT NULL, -- description of the user
	role varchar(60) DEFAULT 'visiteur', -- user type (visitor, normal user, admin, companie repre)
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
    -- companie attributes
	cpn_id smallint(5) unsigned,
    cpn_email varchar(100),
    -- user attributes
    user_id smallint(5) unsigned,
    user_email varbinary(100),
    -- advertisements attributes
    adv_id smallint(5) unsigned,
    -- links to companie attributes
    CONSTRAINT fk_cpn_email_info FOREIGN KEY (cpn_email) REFERENCES Companie(cpn_email),
    CONSTRAINT fk_cpn_id_info FOREIGN KEY (cpn_id) REFERENCES Companie(cpn_id),
    -- links to user attributes
    CONSTRAINT fk_user_id_info FOREIGN KEY (user_id) REFERENCES User(user_id),
    CONSTRAINT fk_user_email_info FOREIGN KEY (user_email) REFERENCES User(user_email),
    -- links to advertisement attributes
    CONSTRAINT fk_adv_id_info FOREIGN KEY (adv_id) REFERENCES Advertisement(adv_id)    
) ENGINE=InnoDB;
