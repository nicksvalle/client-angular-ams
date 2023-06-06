import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../client';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients : Client[] = [];
  isEditing : boolean = false;



  constructor (private ClientService: ClientService,  private formBuilder : FormBuilder, private router: Router){

  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.ClientService.getClients().subscribe(
      {
          next : data => this.clients = data
      }
    );
  }


 create(){
  this.router.navigate(['createClient'])
 }

  edit(client : Client){
    this.router.navigate(['clientDetails', client.id])
  }

  delete(client : Client){
    this.ClientService.delete(client).subscribe({
      next: () => this.loadClients()
    })
  }





}



