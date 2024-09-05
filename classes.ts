export interface Company {
    accounts: Accounts
    can_file: boolean
    company_name: string
    company_number: string
    company_status: CompanyStatus
    company_status_details: CompanyStatusDetails
    confirmation_statement: ConfirmationStatement
    date_of_creation: string
    etag: string
    external_registration_number: string
    foreign_company_details: ForeignCompanyDetails
    has_charges: boolean
    has_insolvency_history: boolean
    jurisdiction: Jurisdiction
    links: CompanyLinks
    partial_data_available: PartialDataAvailable
    registered_office_address: Address
    registered_office_is_in_dispute: boolean
    sic_codes: string[]
    subtype: CompanySubType
    type: CompanyType
    undeliverable_registered_office_address: boolean
    has_super_secure_pscs: boolean
    proof_status: string
    officers: Officer[]
    persons_with_significant_control: PersonsWithSignificantControl[]
    filingHistory: FilingHistory[]
}

export enum CompanyType {
    "null",
    "full",
    "small",
    "medium",
    "group",
    "dormant",
    "interim",
    "initial",
    "total-exemption-full",
    "total-exemption-small",
    "partial-exemption",
    "audit-exemption-subsidiary",
    " filing-exemption-subsidiary",
    "micro-entity",
    "no-accounts-type-available",
    "audited-abridged",
    "unaudited-abridged"
}

export enum CompanySubType {
    "community-interest-company",
    "private-fund-limited-partnership"
}

export enum CompanyStatus {
    "active",
    "dissolved",
    "liquidation",
    "receivership",
    "administration",
    "voluntary-arrangement",
    "converted-closed",
    "insolvency-proceedings",
    "registered",
    "removed",
    "closed",
    "open"
}

export enum CompanyStatusDetails {
    "transferred-from-uk",
    "active-proposal-to-strike-off",
    "petition-to-restore-dissolved",
    "transformed-to-se",
    "converted-to-plc"
}

export enum Jurisdiction {
    "england-wales",
    "wales",
    "scotland",
    "northern-ireland",
    "european-union",
    "united-kingdom",
    "england",
    "noneu"
}

export enum PartialDataAvailable {
    "full-data-available-from-financial-conduct-authority",
    "full-data-available-from-department-of-the-economy",
    "full-data-available-from-the-company"
}

export interface Accounts {
    accounting_reference_date: AccountingReferenceDate
    last_accounts: LastAccounts
    next_accounts: NextAccounts
    next_due: string
    next_made_up_to: string
    overdue: boolean
}

export interface AccountingReferenceDate {
    day: string
    month: string
}

export interface LastAccounts {
    made_up_to: string
    period_end_on: string
    period_start_on: string
    type: string
}

export interface NextAccounts {
    due_on: string
    overdue: boolean
    period_end_on: string
    period_start_on: string
}

export interface ConfirmationStatement {
    last_made_up_to: string
    next_due: string
    next_made_up_to: string
    overdue: boolean
}

export interface ForeignCompanyDetails {
    //! TO COMPLETE
}

export interface CompanyLinks {
    persons_with_significant_control: string
    self: string
    filing_history: string
    officers: string
}

export interface Address {
    address_line_1: string
    address_line_2: string
    country: Country
    locality: string
    postal_code: string
    premises: string
    region?: string
}

export enum Country {
    "Wales",
    "England",
    "Scotland",
    "Great Britain",
    "Not specified",
    "United Kingdom",
    "Northern Ireland"
}


export interface Officer {
    address: Address
    appointed_on: string
    is_pre_1992_appointment: boolean
    links: OfficerLinks
    name: string
    officer_role: OfficerRole
    person_number: string
    country_of_residence?: string
    date_of_birth?: DateOfBirth
    nationality?: string
    occupation?: string
    appointments: OfficerAppointments[]
}

export enum OfficerRole {
    "cic-manager",
    "corporate-director",
    "corporate-llp-designated-member",
    "corporate-llp-member",
    "corporate-manager-of-an-eeig",
    "corporate-managing-officer",
    "corporate-member-of-a-management-organ",
    "corporate-member-of-a-supervisory-organ",
    "corporate-member-of-an-administrative-organ",
    "corporate-nominee-director",
    "corporate-nominee-secretary",
    "corporate-secretary",
    "director",
    "general-partner-in-a-limited-partnership",
    "judicial-factor",
    "limited-partner-in-a-limited-partnership",
    "llp-designated-member",
    "llp-member",
    "manager-of-an-eeig",
    "managing-officer",
    "member-of-a-management-organ",
    "member-of-a-supervisory-organ",
    "member-of-an-administrative-organ",
    "nominee-director",
    "nominee-secretary",
    "person-authorised-to-accept",
    "person-authorised-to-represent",
    "person-authorised-to-represent-and-accept",
    "receiver-and-manager",
    "secretary"
}

export interface OfficerLinks {
    self: string
    officer: OfficerAppointmentsLink
}

export interface OfficerAppointmentsLink {
    appointments: string
}

export interface DateOfBirth {
    month: number
    year: number
}

export interface OfficerAppointments {
    address: Address
    appointed_on: string
    appointed_to: AppointedTo
    name: string
    country_of_residence: string
    is_pre_1992_appointment: boolean
    links: OfficerLinks
    name_elements: NameElements
    nationality: string
    occupation: string
    officer_role: OfficerRole
}


export interface AppointedTo {
    company: Company
    company_name: string
    company_number: string
    company_status: string
}

export interface OfficerLinks {
    company: string
}

export interface NameElements {
    forename: string
    title: string
    other_forenames: string
    surname: string
}

export interface PersonsWithSignificantControl {
    etag: string
    notified_on: string
    country_of_residence: string
    name: string
    links: PersonsWithSignificantControlLinks
    nationality: string
    ceased: boolean
    kind: PersonsWithSignificantControlKind
    address: Address
    natures_of_control: NaturesOfControl[]
}

export enum PersonsWithSignificantControlKind {
    "individual-person-with-significant-control",
    "corporate-entity-person-with-significant-control",
    "legal-person-with-significant-control",
    "super-secure-person-with-significant-control",
    "individual-beneficial-owner",
    "corporate-entity-beneficial-owner",
    "legal-person-beneficial-owner",
    "super-secure-beneficial-owner"
}

export enum NaturesOfControl {
    "ownership-of-shares-25-to-50-percent",
    "ownership-of-shares-50-to-75-percent",
    "ownership-of-shares-75-to-100-percent",
    "ownership-of-shares-25-to-50-percent-as-trust",
    "ownership-of-shares-50-to-75-percent-as-trust",
    "ownership-of-shares-75-to-100-percent-as-trust",
    "ownership-of-shares-25-to-50-percent-as-firm",
    "ownership-of-shares-50-to-75-percent-as-firm",
    "ownership-of-shares-75-to-100-percent-as-firm",
    "ownership-of-shares-more-than-25-percent-registered-overseas-entity",
    "ownership-of-shares-more-than-25-percent-as-trust-registered-overseas-entity",
    "ownership-of-shares-more-than-25-percent-as-firm-registered-overseas-entity",
    "voting-rights-25-to-50-percent",
    "voting-rights-50-to-75-percent",
    "voting-rights-75-to-100-percent",
    "voting-rights-25-to-50-percent-as-trust",
    "voting-rights-50-to-75-percent-as-trust",
    "voting-rights-75-to-100-percent-as-trust",
    "voting-rights-25-to-50-percent-as-firm",
    "voting-rights-50-to-75-percent-as-firm",
    "voting-rights-75-to-100-percent-as-firm",
    "voting-rights-more-than-25-percent-registered-overseas-entity",
    "voting-rights-more-than-25-percent-as-trust-registered-overseas-entity",
    "voting-rights-more-than-25-percent-as-firm-registered-overseas-entity",
    "right-to-appoint-and-remove-directors",
    "right-to-appoint-and-remove-directors-as-trust",
    "right-to-appoint-and-remove-directors-as-firm",
    "significant-influence-or-control",
    "significant-influence-or-control-as-trust",
    "significant-influence-or-control-as-firm",
    "right-to-share-surplus-assets-25-to-50-percent-limited-liability-partnership",
    "right-to-share-surplus-assets-50-to-75-percent-limited-liability-partnership",
    "right-to-share-surplus-assets-75-to-100-percent-limited-liability-partnership",
    "right-to-share-surplus-assets-25-to-50-percent-as-trust-limited-liability-partnership",
    "right-to-share-surplus-assets-50-to-75-percent-as-trust-limited-liability-partnership",
    "right-to-share-surplus-assets-75-to-100-percent-as-trust-limited-liability-partnership",
    "right-to-share-surplus-assets-25-to-50-percent-as-firm-limited-liability-partnership",
    "right-to-share-surplus-assets-50-to-75-percent-as-firm-limited-liability-partnership",
    "right-to-share-surplus-assets-75-to-100-percent-as-firm-limited-liability-partnership",
    "voting-rights-25-to-50-percent-limited-liability-partnership",
    "voting-rights-50-to-75-percent-limited-liability-partnership",
    "voting-rights-75-to-100-percent-limited-liability-partnership",
    "voting-rights-25-to-50-percent-as-trust-limited-liability-partnership",
    "voting-rights-50-to-75-percent-as-trust-limited-liability-partnership",
    "voting-rights-75-to-100-percent-as-trust-limited-liability-partnership",
    "voting-rights-25-to-50-percent-as-firm-limited-liability-partnership",
    "voting-rights-50-to-75-percent-as-firm-limited-liability-partnership",
    "voting-rights-75-to-100-percent-as-firm-limited-liability-partnership",
    "right-to-appoint-and-remove-members-limited-liability-partnership",
    "right-to-appoint-and-remove-members-as-trust-limited-liability-partnership",
    "right-to-appoint-and-remove-members-as-firm-limited-liability-partnership",
    "significant-influence-or-control-limited-liability-partnership",
    "significant-influence-or-control-as-trust-limited-liability-partnership",
    "significant-influence-or-control-as-firm-limited-liability-partnership",
    "significant-influence-or-control-registered-overseas-entity",
    "significant-influence-or-control-as-trust-registered-overseas-entity",
    "significant-influence-or-control-as-firm-registered-overseas-entity",
    "part-right-to-share-surplus-assets-25-to-50-percent",
    "part-right-to-share-surplus-assets-50-to-75-percent",
    "part-right-to-share-surplus-assets-75-to-100-percent",
    "part-right-to-share-surplus-assets-25-to-50-percent-as-trust",
    "part-right-to-share-surplus-assets-50-to-75-percent-as-trust",
    "part-right-to-share-surplus-assets-75-to-100-percent-as-trust",
    "part-right-to-share-surplus-assets-25-to-50-percent-as-firm",
    "part-right-to-share-surplus-assets-50-to-75-percent-as-firm",
    "part-right-to-share-surplus-assets-75-to-100-percent-as-firm",
    "right-to-appoint-and-remove-person",
    "right-to-appoint-and-remove-person-as-firm",
    "right-to-appoint-and-remove-person-as-trust",
    "right-to-appoint-and-remove-directors-registered-overseas-entity",
    "right-to-appoint-and-remove-directors-as-trust-registered-overseas-entity",
    "right-to-appoint-and-remove-directors-as-firm-registered-overseas-entity"
}

export interface PersonsWithSignificantControlLinks {
    self: string
}

export interface FilingHistory {
    transaction_id: string
    barcode?: string
    type: string
    date: string
    category: FilingHistoryCategory
    subcategory?: string
    description: string
    description_values?: DescriptionValues
    pages: number
    action_date?: string
    links: Links
    paper_filed?: boolean
    associated_filings?: AssociatedFiling[]
}

export enum FilingHistoryCategory {
    "accounts",
    "address",
    "annual-return",
    "capital",
    "change-of-name",
    "incorporation",
    "liquidation",
    "miscellaneous",
    "mortgage",
    "officers",
    "resolution"
}

export interface DescriptionValues {
    change_date?: string
    old_address?: string
    new_address?: string
    made_up_date?: string
    officer_name?: string
    appointment_date?: string
    psc_name?: string
    new_date?: string
    date?: string
    capital?: Capital[]
}

export interface Capital {
    currency: string
    figure: string
}

export interface Links {
    self: string
    document_metadata: string
}

export interface AssociatedFiling {
    category: string
    date: string
    description: string
    type: string
    description_values?: DescriptionValues
    action_date?: string
}