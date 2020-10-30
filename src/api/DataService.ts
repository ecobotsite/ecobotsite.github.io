import { AxiosResponse } from 'axios';
import apiClient from '@/api/ApiClient';
import { RawData } from '@/models/responses/rawData';

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

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export default class DataService {
    private repoAxios = apiClient;

    async getData(deviceId: string, from: Date, to: Date): Promise<AxiosResponse<RawData>> {
        return this.repoAxios.post<RawData>(`/`, {
            From: formatDate(from),
            To: formatDate(to),
            LocationId: deviceId,
        })
    }
}