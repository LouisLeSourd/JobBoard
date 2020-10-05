export interface Company {
    cpn_creation_year: number,
    cpn_description: string,
    cpn_email: string,
    cpn_employees_number: number,
    cpn_field: string,
    cpn_head_office: string,
    cpn_id: number,
    cpn_name: string,
    cpn_representative: string,
    cpn_size: string,
    cpn_social_media: string,
    cpn_turnover: number
}

export interface AdvertisementFilter {
    adv_title: string,
    adv_city: string,
    adv_country: string,
    adv_sector: string,
    adv_function: string,
    adv_contract_type: string,
    adv_beginning_contract: Date,
    adv_required_exp: string,
    adv_language: string,
    adv_contract_duration: number
}

export interface Advertisement {
    adv_id: number,
    adv_title: string,
    adv_adress: string,
    adv_postal_code: string,
    adv_city: string,
    adv_country: string,
    adv_sector: string,
    adv_function: string,
    adv_publication_date: Date,
    adv_contract_type: string,
    adv_beginning_contract: Date,
    adv_required_exp: string,
    adv_language: string,
    adv_contract_duration: number,
    adv_description: string,
    cpn_id: number,
    cpn_field : string,
    cpn_name: string,
    cpn_size: string
}

export interface User {
    user_id: number;
    user_name: string,
    user_surname: string,
    user_adress: string,
    user_posta_code: number,
    user_city: string,
    user_country: string,
    user_graduation: string,
    user_password: string,
    user_email: string,
    user_description: string,
    role: string,
    user_birth: Date
}

export interface UpdateUserProfile {
    user_adress: string,
    user_posta_code: number,
    user_city: string,
    user_country: string,
    user_graduation: string,
    user_birth: Date
}

export interface NewUser {
    name: string,
    surname: string,
    email: string,
    pwd: string,
    pwdConfirm: string,
}

export interface Informations {
    text_email: string,
    cpn_id: number,
    cpn_email: string,
    user_id: number,
    user_email: string,
    adv_id: number
}

