import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  API_URI = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) {}

  getAllOperations() {
    return this._http.get(`${this.API_URI}/operation`);
  }

  getBalance(){
    return this._http.post(`${this.API_URI}/operation/balance`, {});
  }

  getAllOperationsType() {
    return this._http.get(`${this.API_URI}/operation/types`);
  }

  getOneOperation(id) {
    return this._http.get(`${this.API_URI}/operation/${id}`);
  }

  createOperation(operation) {
    return this._http.post(`${this.API_URI}/operation`, operation);
  }

  updateOperation(id, updateOperation) {
    return this._http.put(`${this.API_URI}/operation/${id}`, updateOperation);
  }

  deleteOperation(id) {
    return this._http.delete(`${this.API_URI}/operation/${id}`);
  }
}
