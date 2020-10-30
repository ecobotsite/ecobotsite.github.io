export interface RawData {
    id:           string;
    city:         string;
    stationName:  string;
    localName:    string;
    timezone:     null;
    lat:          number;
    lon:          number;
    pm25:         Array<number[]>;
    pm10:         Array<number[]>;
    temperature:  Array<number[]>;
    humidity:     Array<number[]>;
    pressure:     any[];
    qualityIndex: Array<number[]>;
}
