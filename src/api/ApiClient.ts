import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

class ApiClient {
    public User: any = {};
    public IsLogged: boolean = false;

    // tslint:disable-next-line: variable-name
    private _axiosClient: AxiosInstance;

    constructor() {
        this._axiosClient = axios.create({
            baseURL: 'https://3z51jfr29i.execute-api.eu-central-1.amazonaws.com/prod',
        });
        this._axiosClient.interceptors.response.use((response: any) => this.ok(response),
        (error: any) => {});
    }

    public async get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this._axiosClient.get<T, R>(url, config);
    }

    public async post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
        return this._axiosClient.post<T, R>(url, data, config);
    }

    private ok(response: AxiosResponse<any>): AxiosResponse<any> {
        // this.IsLogged = true;
        return response;
    }
}

export default new ApiClient();

