import { AxiosResponse } from 'axios';
import apiClient from '@/api/ApiClient';
import { RawData } from '@/models/responses/rawData';

export default class DataService {
    private repoAxios = apiClient;

    async getData(deviceId: number, date: Date): Promise<AxiosResponse<RawData>> {
        return this.repoAxios.get<RawData>(`maps/raw_data.json?device_id=${deviceId}&${Math.round(date.getTime() / 1000)}`)
    }
}