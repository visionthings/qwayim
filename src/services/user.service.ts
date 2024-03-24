import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  endpoint = environment.endpoint;

  register(data: any) {
    return this.http.post(`${this.endpoint}/register`, data);
  }
  login(data: any) {
    return this.http.post(`${this.endpoint}/login`, data);
  }
  getUser(id: any, token: any) {
    return this.http.get(`${this.endpoint}/users/${id}`, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }
  updateUser(id: any, token: any, data: any) {
    return this.http.put(`${this.endpoint}/users/${id}`, data, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }
  updateAvatar(avatar: any, token: any) {
    let formData = new FormData();
    formData.append('avatar', avatar);

    return this.http.post(`${this.endpoint}/users/update/avatar`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }
  updatePassword(data: any, token: any) {
    return this.http.post(`${this.endpoint}/users/change/password`, data, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }

  // User favorites
  getFavorites(token: string | null | undefined) {
    return this.http.get(`${this.endpoint}/favorites`, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }

  addToFavorites(id: string) {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    return this.http.post(
      `${this.endpoint}/favorites`,
      { place_id: id },
      {
        headers: new HttpHeaders(`Authorization: Bearer ${token}`),
      }
    );
  }
  removeFromFavorites(id: string) {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    return this.http.delete(`${this.endpoint}/favorites/${id}`, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }

  // User Comments
  addComment(data: any) {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    return this.http.post(`${this.endpoint}/comments`, data, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }

  // Add Question
  addQuestion(data: any) {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    return this.http.post(`${this.endpoint}/questions`, data, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }

  // Add answer
  addAnswer(data: any) {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    return this.http.post(`${this.endpoint}/answers`, data, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }

  // Get notifications
  getNotifications(token: string | null) {
    return this.http.get(`${this.endpoint}/notifications`, {
      headers: new HttpHeaders(`Authorization: Bearer ${token}`),
    });
  }

  // Mark notification as read
  readNotification(id: string) {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    return this.http.post(
      `${this.endpoint}/notifications`,
      { id: id },
      {
        headers: new HttpHeaders(`Authorization: Bearer ${token}`),
      }
    );
  }

  // Logout!
  logout(token: any, id: any) {
    return this.http.post(
      `${this.endpoint}/logout`,
      { id: id },
      {
        headers: new HttpHeaders(`Authorization: Bearer ${token}`),
      }
    );
  }
}
