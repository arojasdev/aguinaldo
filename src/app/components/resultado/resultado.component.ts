import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  aguinaldo: number;

  constructor(private route: ActivatedRoute) {
    this.aguinaldo = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void { 
  }

}
