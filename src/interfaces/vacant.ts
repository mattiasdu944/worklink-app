import { ICompany } from "./company";

export interface IVacant {
    _id:          string;
    company:      ICompany;
    title:        string;
    description:  string;
    requirements: Requirements;
    location:     string;
    salary:       number;
    type:         string;
    workingHour:  string;
    benefits:     string[];
    deadline:     string;
    image:        string;
    views:        number;
    createdAt:    string;
}


export interface Requirements {
    experience: string;
    skills:     string;
    education:  string;
    _id:        string;
}
