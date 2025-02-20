import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.dev';
import { UserProps } from '../../domain/User';
import { IUserRepository } from '../../domain/user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserRepository implements IUserRepository {
  private readonly apiUrl = `${environment.API_URL}/users`;

  constructor(private readonly http: HttpClient) {}

  getUser(email: string): Observable<UserProps> {
    return this.http.get<UserProps>(`${this.apiUrl}/${email}`);
  }

  createUser(user: {
    name: string;
    lastName: string;
    email: string;
  }): Observable<UserProps> {
    return this.http.post<UserProps>(this.apiUrl, user);
  }
}
