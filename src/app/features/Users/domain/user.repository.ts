import { Observable } from 'rxjs';
import { UserProps } from './User';

export interface IUserRepository {
  getUser(email: string): Observable<UserProps>;

  createUser(user: {
    name: string;
    lastName: string;
    email: string;
  }): Observable<UserProps>;
}
