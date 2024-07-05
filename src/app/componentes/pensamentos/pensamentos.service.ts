import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento/pensamento-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentosService {

  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(
    private http: HttpClient
  ) { }

  public listar(pagina: number, filtro: string): Observable<Pensamento[]> {
    const itensPorPagina = 6;
    let params = new HttpParams().set('_page', pagina).set('_limit', itensPorPagina).set('q', filtro.trim().length > 2 ? filtro : '');

    return this.http.get<Pensamento[]>(this.API, { params });
  }

  public criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  public editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  public excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  public buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
