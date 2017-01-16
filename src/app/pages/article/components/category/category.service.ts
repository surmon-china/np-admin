import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/toPromise';

import { API_ROOT } from 'src/config'

@Injectable()
export class ArticleCategoryService {

  private _apiUrl = `${API_ROOT}/category`;

  constructor(private http: AuthHttp,
              private _notificationsService: NotificationsService) {
  }

  // 成功处理
  private handleResponse = (response: any): Promise<any> => {
    const data = response.json();
    if(data.code) {
      this._notificationsService.success(data.message, '数据请求成功', { timeOut: 500 });
      return Promise.resolve(data);
    } else {
      this._notificationsService.error(data.message, data.debug ? data.debug.message : data.message);
      return Promise.reject(data);
    }
  }

  // 失败处理
  private handleError = (error: any): Promise<any> => {
    this._notificationsService.error('请求失败', !error.ok ? error._body : JSON.parse(error._body).message);
    return Promise.reject(error);
  }

  getCategories(): Promise<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('per_page', '100');
    return this.http
      .get(this._apiUrl, { search: params})
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  addCategory(category:any): Promise<any> {
    return this.http
      .post(this._apiUrl, category)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  putCategory(category: any): Promise<any> {
    return this.http
      .put(`${ this._apiUrl }/${ category._id }`, category)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  delCategory(category_id: string): Promise<void> {
    return this.http
      .delete(`${ this._apiUrl }/${ category_id }`)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  delCategories(categories: any): Promise<void> {
    return this.http
      .delete(this._apiUrl, new RequestOptions({ body: { categories }}))
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
