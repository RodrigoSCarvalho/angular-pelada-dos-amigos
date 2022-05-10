import { Component, OnInit } from '@angular/core';
import { Jogador } from '../models/Jogador';
import { JogadorService } from '../services/jogador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _jogadorService: JogadorService) { }

  jogadores: Jogador[] = [];

  ngOnInit(): void {
    this.retrieveAllJogadores();
  }

  retrieveAllJogadores(): void {
    this._jogadorService.retrieveAllJogadores().subscribe({
      next: (jogador: any)=>{
      this.jogadores = jogador;
    },error: (err) => {
      alert('Error :'+ err);
    },}

    );
  }

}
