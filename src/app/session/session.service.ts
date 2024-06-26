import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from './session.model';

const CHAVE_ACCESS_TOKEN = 'auth';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private session = new BehaviorSubject<Session | null>(null);

  constructor() {
    this.restore();
  }

  restore() {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;
    const sessionPayload = {
      user: {
        userId,
        userEmail: sessionStorage.getItem('userEmail'),
      },
      token: sessionStorage.getItem('token') || '',
    };
    console.log({ sessionPayload });
    this.session.next(sessionPayload);
  }

  save(sessionPayload: Session) {
    sessionStorage.setItem('token', sessionPayload.token);
    sessionStorage.setItem('userId', sessionPayload.user.id);
    sessionStorage.setItem('userEmail', sessionPayload.user.email);
    this.session.next(sessionPayload);
  }

  clear() {
    sessionStorage.clear();
    this.session.next(null);
  }

  get() {
    return this.session.asObservable();
  }

  isActive() {
    // alterar essa validacao para verificar se o token e valido
    return this.session.value !== null;
  }
}
