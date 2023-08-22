import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  nome = "Ronan sdfasdfasdf";

  listaProdutos = [
    { nome: "Vela - Lavanda", descricao: "15cm - redonda", valor: 15 },
    {
      nome: "Cristal azul",
      descricao: "quadrado - 20cm",
      valor: 35.504
    },
    {
      nome: "Cristal verde",
      descricao: "triangulo - 10cm",
      valor: 25
    },
  ];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto:any){
    this.bdtemp.addProdutoCarrinho(produto);
  }



}
