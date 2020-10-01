export enum Page {
    HOME_PAGE = 'HOME_PAGE',
    OFFER = 'OFFER',
    COMPANY = 'COMPANY',
    LOGIN = 'LOGIN',
    SIGN_IN = 'SIGN_IN'
}

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


