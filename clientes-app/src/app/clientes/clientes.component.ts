import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] =[
    {id: 3, nombre: 'Hector', apellido: 'BecMe', email: 'yo@hectorbecme.com', createAt: '2020,08,25'},
    {id: 4, nombre: 'Hector4', apellido: 'BecMe', email: 'yo@hectorbecme.com', createAt: '2020,08,25'},
    {id: 5, nombre: 'Hector5', apellido: 'BecMe', email: 'yo@hectorbecme.com', createAt: '2020,08,25'},
    {id: 6, nombre: 'Hector6', apellido: 'BecMe', email: 'yo@hectorbecme.com', createAt: '2020,08,25'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
