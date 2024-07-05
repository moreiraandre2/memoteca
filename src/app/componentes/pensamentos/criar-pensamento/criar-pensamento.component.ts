import { Router } from '@angular/router';
import { Pensamento } from './../pensamento/pensamento-interface';
import { PensamentosService } from './../pensamentos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
