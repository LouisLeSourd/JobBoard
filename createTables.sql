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
-- Structure de la table 'advertisements'
--
CREATE TABLE IF NOT EXISTS Companie (
	cpn_id smallint(5) unsigned NOT NULL AUTO_INCREMENT,
	cpn_name varchar(100) NOT NULL,
    cpn_creation_year int NOT NULL,
    cpn_field varchar(255) DEFAULT NULL,
    cpn_representative varchar(255) DEFAULT NULL,
    cpn_head_office varchar(255) NOT NULL,
    cpn_adress varchar(200) DEFAULT NULL,
    cpn_postal_code varchar(6) DEFAULT NULL,
	cpn_city varchar(60) DEFAULT NULL,
	cpn_country_based varchar(60) DEFAULT NULL,
    cpn_country varchar(60) DEFAULT NULL,
    cpn_turnover int NOT NULL,
	cpn_email varbinary(100) DEFAULT NULL,
    cpn_size varchar(255) DEFAULT NULL,
    cpn_description text DEFAULT NULL,
    PRIMARY KEY (cpn_id),
    UNIQUE KEY ind_uni_cpn_id (cpn_id),
    UNIQUE KEY ind_uni_cpn_name (cpn_name),
    UNIQUE KEY ind_uni_cpn_email (cpn_email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS Advertisement (
	adv_id smallint(5) unsigned NOT NULL AUTO_INCREMENT,
    adv_title varchar(255),
    adv_secteur varchar(255) DEFAULT NULL,
    adv_fonction varchar(255) DEFAULT NULL,
    adv_location varchar(255) DEFAULT 'France',
    adv_debut_contrat date DEFAULT NULL,
    adv_required_exp int(255) DEFAULT NULL,
    adv_language varchar(255) DEFAULT 'French',
    adv_duree_contrat int(255) DEFAULT NULL,
    adv_description text DEFAULT NULL,
    cpn_id smallint(5) unsigned,
    cpn_name varchar(100),
    CONSTRAINT fk_cpn_id FOREIGN KEY (cpn_id) REFERENCES Companie(cpn_id),
    CONSTRAINT fk_cpn_name FOREIGN KEY (cpn_name) REFERENCES Companie(cpn_name),
    PRIMARY KEY (adv_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS User (
  user_id smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  user_name varchar(100) NOT NULL,
  user_surname varchar(60) NOT NULL,
  user_adress varchar(200) DEFAULT NULL,
  user_posta_code varchar(6) DEFAULT NULL,
  user_city varchar(60) DEFAULT NULL,
  user_country varchar(60) DEFAULT NULL,
  user_email varbinary(100) DEFAULT NULL,
  user_description text DEFAULT NULL,
  role varchar(60) DEFAULT 'visiteur',
  user_birth date DEFAULT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY ind_uni_user_id (user_id),
  UNIQUE KEY ind_uni_user_email (user_email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS Informations (
	text_email text DEFAULT NULL,
	cpn_id smallint(5) unsigned,
    user_id smallint(5) unsigned,
    user_email varbinary(100),
    cpn_email varbinary(100),
    adv_id smallint(5) unsigned,
    CONSTRAINT fk_user_id_info FOREIGN KEY (user_id) REFERENCES User(user_id),
    CONSTRAINT fk_user_email_info FOREIGN KEY (user_email) REFERENCES User(user_email),
    CONSTRAINT fk_adv_id_info FOREIGN KEY (adv_id) REFERENCES Advertisement(adv_id),
    CONSTRAINT fk_cpn_email_info FOREIGN KEY (cpn_email) REFERENCES Companie(cpn_email),
    CONSTRAINT fk_cpn_id_info FOREIGN KEY (cpn_id) REFERENCES Companie(cpn_id)
) ENGINE=InnoDB;