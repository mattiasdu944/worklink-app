export interface IProfile {
    email:          string;
    name:           string;
    lastname:       string;
    image:          string;
    description:    string;
    phone:          string;
    birthday:       string;
    years:          null;
    career:         string;
    semester:       string;
    banner:         string;
    applications:   any[];
    certificates:   IProfileCertificates[];
    experience:     IProfileExperience[];
    socialNetworks: IProfileSocialNetworks[];
}


export interface IProfileCertificates {
    name        : string;
    dateOfIssue : string;
    company     : string;
    hours       : number;
}

export interface IProfileExperience {
    position    : string;
    company     : string;
    startDate   : string;
    endingtDate : string;
}

export interface IProfileSocialNetworks {
    name        : string;
    url         : string;
}