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
    cpn_turnover: number,
    cpn_logo: string
}

export interface Companies {
    cpn_employees_number: number,
    cpn_field: string,
    cpn_size: string,
    cpn_logo: string
    cpn_name: string,
}

export interface CompaniesFilters {
    cpn_field: string,
    cpn_size: string,
    cpn_name: string,
}

export interface OffersFilters {
    offer_title: string,
    offer_function: string,
    offer_contract_type: string,
    offer_required_exp: string,
    offer_contract_duration: number
    cpn_field : string,
    cpn_size: string,
}

export interface Offer {
    offer_id: number,
    offer_title: string,
    offer_adress: string,
    offer_postal_code: string,
    offer_city: string,
    offer_country: string,
    offer_sector: string,
    offer_function: string,
    offer_publication_date: Date,
    offer_contract_type: string,
    offer_beginning_contract: Date,
    offer_required_exp: string,
    offer_language: string,
    offer_contract_duration: number,
    offer_description: string,
    cpn_id: number,
    cpn_field : string,
    cpn_name: string,
    cpn_size: string,
    cpn_logo: string
}

export interface Offers {
    offer_id: number,
    offer_title: string,
    offer_contract_type: string,
    offer_city: string,
    cpn_name: string,
    offer_publication_date: Date,
    offer_country: string,
    offer_contract_duration: number,
    offer_function: string,
    cpn_field : string,
    cpn_size: string,
    cpn_id: number,
    cpn_logo: string,
    cpn_email: string
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
    user_cv: string,
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
    user_name: string,
    user_surname: string,
    user_email: string,
    user_password: string,
    pwdConfirm: string,
}

export interface Information {
    text_email: string,
    cpn_id: number,
    cpn_email: string,
    user_id: number,
    user_email: string,
    offer_id: number
}

export interface OfferTitle {
    offer_title: string,
}

export interface OfferFunction {
    offer_function: string,
}

export interface OfferContractType {
    offer_contract_type: string,
}

export interface OfferRequiredExp {
    offer_required_exp: string,
}

export interface OfferContractDuration {
    offer_contract_duration: number
}

export interface CompanyName {
    cpn_name: string;
}

export interface CompanyField {
    cpn_field: string;
}

export interface CompanySize {
    cpn_size: string;
}
