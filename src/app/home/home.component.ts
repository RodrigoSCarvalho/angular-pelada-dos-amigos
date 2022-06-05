import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { Jogador } from '../models/Jogador';
import { JogadorService } from '../services/jogador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _jogadorService: JogadorService) {
    
   }

  @ViewChild('jogador') inputJogador: any;
  jogadores: Jogador[] = [];
  players: string[] = [];
 
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

  onClick(nome: string): void {
    if("" == nome || nome == " "){
      
    }
    else{
      
    if (this.players.length < 20){
      this.players.push(nome);      
    }
    if(this.players.length == 20){
      this.inputJogador.nativeElement.setAttribute('readonly', true,)
      this.inputJogador.nativeElement.setAttribute('placeholder', "Todos os 20 jogadores foram inseridos!");
    }
    this.inputJogador.nativeElement.value = '';
  }
}

  definirPotes(): void {
    for (let jogador in this.players) {
      this._jogadorService.postJogador({id: 0, nome: this.players[jogador]}).subscribe();
      console.log(jogador)
    }
  }

}
