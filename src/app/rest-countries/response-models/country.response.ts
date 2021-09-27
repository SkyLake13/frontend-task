export interface CountryResponse {
    name: Name;
    tld?: string[];
    cca2?: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status?: string;
    unMember?: boolean;
    currencies?: {};
    capital: string[];
    altSpellings?: string[];
    region: string;
    subregion: string;
    languages?: {};
    translations?: {};
    latlng?: number[];
    landlocked?: boolean;
    borders: string[];
    area: number;
    flag?: string;
    flags: string[];
    demonyms?: {};
}

export interface Name {
    common: string;
    official?: string;
    nativeName?: {};
}




