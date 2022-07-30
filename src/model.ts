export interface Model {
    Currency: Currency[];
}
export interface Currency {
    CurrencyName:    string;
    BanknoteBuying:  number | string;
    BanknoteSelling: number | string;
    CrossRateUSD:    number | string;
    CrossRateOther:  number | string;
    _CurrencyCode: string;
}
