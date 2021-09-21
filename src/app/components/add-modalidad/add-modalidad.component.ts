import { Component, OnInit } from '@angular/core';
import { Deporte } from 'src/app/models/deporte.model';
import { Modalidad } from 'src/app/models/modalidad.model';
import { DeporteService } from 'src/app/services/deporte.service';
import { ModalidadService } from 'src/app/services/modalidad.service';

@Component({
  selector: 'app-add-modalidad',
  templateUrl: './add-modalidad.component.html',
  styleUrls: ['./add-modalidad.component.css']
})
export class AddModalidadComponent implements OnInit {

  deportes : Deporte[]=[];

  modalidad:Modalidad={
    deporte:{
      idDeporte:0
    }
  }

  constructor(private deporteService:DeporteService,
      private modalidadService:ModalidadService) {
      deporteService.listaDeporte().subscribe(
        (deportes)=>this.deportes=deportes
      );
   }


   registra(){
    this.modalidadService.registraModalidad(this.modalidad).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error =>{
        console.log(error);
      }
    )
   }


  ngOnInit(): void {
  }

}
