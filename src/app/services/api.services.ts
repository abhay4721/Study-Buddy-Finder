import { environment } from "../../environments/environment"; 

export class ApiService {
  private apiUrl = environment.apiUrl;

  getData() {
    return fetch(`${this.apiUrl}/data`);
  }
}
