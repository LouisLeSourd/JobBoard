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

export interface OfferFilter {
    adv_title: string,
    adv_city: string,
    adv_country: string,
    adv_sector: string,
    adv_function: string,
    adv_contract_type: string,
    adv_beginning_contract: Date,
    adv_required_exp: string,
    adv_language: string,
    adv_contract_duration: number,
}
