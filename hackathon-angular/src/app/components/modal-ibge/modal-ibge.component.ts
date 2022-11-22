import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IBGEService } from 'src/app/services/ibge.service';
import { IBGE } from 'src/models/ibge';

@Component({
  selector: 'app-modal-ibge',
  templateUrl: './modal-ibge.component.html',
  styleUrls: ['./modal-ibge.component.css']
})
export class ModalIBGEComponent implements OnInit {

  public data: IBGE[] = [];
  constructor(public dialogRef: MatDialogRef<ModalIBGEComponent>,
    private ibgeService: IBGEService) { }

  ngOnInit(): void {
    this.ibgeService.getIBGENoticias().subscribe(res => {
      this.data = res.items
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

