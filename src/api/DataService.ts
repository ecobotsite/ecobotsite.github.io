import { AxiosRequestConfig, AxiosResponse } from 'axios';
import apiClient from '@/api/ApiClient';
import { RawData } from '@/models/responses/rawData';
import { Location } from '@/models/responses/locations';
import { SpecificRawData } from '@/models/responses/specificRawData';
import { HeatRecord } from '@/models/responses/heatRecord';

function formatDate(date: Date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),

        hours = d.getHours().toString(),
        minutes = d.getMinutes().toString(),
        seconds = d.getSeconds().toString();

    if (month.length < 2) 
        month = '0' + month;

    if (day.length < 2) 
        day = '0' + day;

    if (hours.length < 2)
        hours = '0' + hours;

    if (minutes.length < 2)
        minutes = '0' + minutes;

    if (seconds.length < 2)
        seconds = '0' + seconds;

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
}

export default class DataService {
    private repoAxios = apiClient;

    async getData(deviceId: string, from: Date, to: Date): Promise<AxiosResponse<RawData>> {
        return this.repoAxios.get<RawData>(`/Measurement`, {
            params:{
                From: formatDate(from),
                To: formatDate(to),
                LocationId: deviceId,
            }
        })
    }

    async getSpecificData(deviceId: string, from: Date, to: Date, pollutantType: number, onDownloadProgress: (progressEvent: any) => void): Promise<AxiosResponse<SpecificRawData>> {
        return this.repoAxios.get<SpecificRawData>(`/Measurement/Type`, {
            params:{
                From: formatDate(from),
                To: formatDate(to),
                LocationId: deviceId,
                PollutantType: pollutantType,
            },
            onDownloadProgress: onDownloadProgress,
        })
    }

    async getLocations(): Promise<AxiosResponse<Location[]>> {
        return this.repoAxios.get<Location[]>(`/Location/List`)
    }

    async getHeatMap(): Promise<AxiosResponse<HeatRecord[]>> {
        return this.repoAxios.get<HeatRecord[]>(`/Location/HeatMap`)
    }
}