export interface SpecificRawData {
    id:            string;
    city:          string;
    stationName:   string;
    localName:     string;
    timezone:      number;
    lat:           number;
    lon:           number;
    pollutantType: number;
    data:          Array<number[]>;
}
