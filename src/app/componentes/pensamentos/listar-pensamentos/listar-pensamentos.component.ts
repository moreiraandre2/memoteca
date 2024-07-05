import { PensamentosService } from './../pensamentos.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento-interface';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  constructor(private service: PensamentosService) { }

  listaPensamentos: Pensamento[] = [];
  haMaisPensamentos: boolean = true;
  paginaAtual: number = 1;
  filtro: string = '';

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    });
  }

  public carregarMais() {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  public pesquisarPensamento() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }

}
