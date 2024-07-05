import { Pensamento } from './../pensamento/pensamento-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentosService } from './../pensamentos.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pensamento',
  templateUrl: './form-pensamento.component.html',
  styleUrls: ['./form-pensamento.component.css']
})
export class FormPensamentoComponent implements OnInit {

  pensamento!: Pensamento;

  @Input() editar: boolean = false;

  formulario!: FormGroup;

  constructor(
    private service: PensamentosService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if(this.editar){
      const id = this.route.snapshot.paramMap.get('id');
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.formulario = this.formBuilder?.group({
          id:[pensamento.id],
          conteudo: [pensamento.conteudo],
          autoria: [pensamento.autoria],
          modelo: [pensamento.modelo]
        });
      });
    }

    this.formulario = this.formBuilder?.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1']
    })

  }

  public cadastrarPensamento()
  {
    console.log(this.formulario);
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }

  }

  public editarPensamento()
  {
    if(this.formulario.get('id')?.value) {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  public cancelar()
  {
    this.router.navigate(['/listarPensamento']);
  }

  public habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao';
    }
    else{
      return 'botao__desabilitado';
    }
  }

}
