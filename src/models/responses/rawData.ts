export interface RawData {
    Id:           string;
    City:         string;
    StationName:  string;
    LocalName:    string;
    Timezone:     null;
    Lat:          number;
    Lon:          number;
    Pm25:         Array<number[]>;
    Pm10:         Array<number[]>;
    Temperature:  Array<number[]>;
    Humidity:     Array<number[]>;
    Pressure:     any[];
    QualityIndex: Array<number[]>;
}
