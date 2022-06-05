export interface NewCompanyDto {
    id: number;
    name: string;
    employeesNumberRange: string;
    industry: string;
    email: string;
    phoneNumber: string;
    about: string;
    isApproved: boolean;
    location: string;
}