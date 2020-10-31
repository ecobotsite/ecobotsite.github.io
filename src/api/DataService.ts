import { AxiosResponse } from 'axios';
import apiClient from '@/api/ApiClient';
import { RawData } from '@/models/responses/rawData';
import { Location } from '@/models/responses/locations';

function formatDate(date: string) {
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

    async getData(deviceId: string, from: string, to: string): Promise<AxiosResponse<RawData>> {
        return this.repoAxios.get<RawData>(`/Measurement`, {
            params:{
                From: formatDate(from),
                To: formatDate(to),
                LocationId: deviceId,
            }
        })
    }

    async getLocations(): Promise<AxiosResponse<Location[]>> {
        return this.repoAxios.get<Location[]>(`/Location/List`)
    }
}