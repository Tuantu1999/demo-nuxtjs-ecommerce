import type { AxiosInstance } from 'axios';

export interface IApiHandler {
  create(model: any, params: any): any;

  findAll(params: any, settings: any): any;

  count(params: any): any;

  findOne(id: any, params: any): any;

  update(id: number, model: any, params: any): any;

  remove(id: number): any;
}

export class BaseService<T> implements IApiHandler {
  constructor(
    protected route: string,
    protected axios: AxiosInstance
  ) {}

  async create(model: T, params: any = {}): Promise<T> {
    const res = await this.axios.post(`${this.route}?params=${JSON.stringify(params)}`, model);
    return res.data;
  }

  async findAll(params: any = {}): Promise<Array<T>> {
    const res = await this.axios.get(`${this.route}?params=${JSON.stringify(params)}`);
    return res.data;
  }

  async count(params: any = {}): Promise<number> {
    const res = await this.axios.get(`${this.route}/count?params=${JSON.stringify(params)}`);
    return res.data;
  }

  async findOne(id: number, params: any = {}): Promise<T> {
    const res = await this.axios.get(`${this.route}/${id}?params=${JSON.stringify(params)}`);
    return res.data;
  }

  async update(id: number, model: T, params: any = {}): Promise<T> {
    const res = await this.axios.patch(`${this.route}/${id}?params=${JSON.stringify(params)}`, model);
    return res.data;
  }

  async remove(id: any): Promise<T> {
    const res = await this.axios.delete(`${this.route}/${id}`);
    return res.data;
  }

  async bulkDelete(ids: number[]): Promise<number[]> {
    const res = await this.axios.post(`${this.route}/bulk-delete`, { ids });
    return res.data;
  }

  async bulkSuspend(ids: number[]): Promise<T[]> {
    const res = await this.axios.post(`${this.route}/bulk-suspend`, { ids });
    return res.data;
  }
}
