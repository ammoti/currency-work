import { XMLParser } from "fast-xml-parser";
import { Currency, Model } from "./model";

export class Parser {
    static async parser(params?: Request): Promise<Currency | undefined> {
        // making api request to url and retrieve the response
        const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml');
        // converting the response to xml
        const xml = await response.text();
        // parsing the xml to json
        const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '_' });
        const json = parser.parse(xml);
        var currencies: Model = json.Tarih_Date;

        //find the currency with the name from decode querystring
        const param = decodeURIComponent(params!.url).split('=')[1];

        if (!param)
            return undefined;

        var currency = currencies.Currency.find(currency => currency._CurrencyCode === param);
        if (currency) {
            return currency;
        }
        return undefined;
    }
}