import { Router, ActivatedRoute } from '@angular/router';
import { PensamentosService } from './../pensamentos.service';
import { Pensamento } from './../pensamento/pensamento-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {  }

}
