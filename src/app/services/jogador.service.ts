import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Jogador } from '../models/Jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private httpClient: HttpClient) { }
  private jogadoresUrl = 'http://localhost:8080/jogador';
  
  retrieveAllJogadores(): Observable<Jogador> {
    return this.httpClient.get<Jogador>(this.jogadoresUrl);
  }

  postJogador(jogador: Jogador): Observable<Jogador> {
      return this.httpClient.post<Jogador>(this.jogadoresUrl, jogador).pipe(take(1));
  }
}
