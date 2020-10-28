export interface RawData {
    series: Series;
}

export interface Series {
    pm25:        Array<number[]>;
    pm10:        Array<number[]>;
    temperature: Array<number[]>;
    humidity:    Array<number[]>;
    pressure_pa: Array<number[]>;
}
