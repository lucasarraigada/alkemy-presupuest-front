import { Component, OnInit } from '@angular/core';

//IMPORT SERVICE
import { OperationsService } from '../../service/operations.service';

@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.css'],
  providers: [OperationsService]
})
export class OperationsListComponent implements OnInit {
  operations: any = [];
  balance: any;
  filterOperation: any = '';
  operationsType: any = [];
  operationIncome: any = [];
  operationExpense: any = [];

  constructor(private _operationService: OperationsService) {}

  ngOnInit(): void {
    this.getAllOperations();
    this.getBalance();
    this.getOperationType();
  }

  
  getOperationType() {
    this._operationService.getAllOperationsType().subscribe(
      (response) => {
        this.operationsType = response;
        for(var i = 0; i < this.operationsType.length; i++){
          this.operationsType[i].description;
          if(this.operationsType[i].description == "Incomes"){
            this.operationIncome.push(this.operationsType[i].description);
          } else {
            this.operationExpense.push(this.operationsType[i].description);
          }
        }
      }, (error) => {}
    );
  }

  getAllOperations() {
    this._operationService.getAllOperations().subscribe(
      (response) => {
        this.operations = response;
      },
      (error) => {

    });
  }

  getBalance(){
    this._operationService.getBalance().subscribe(
      response => {
        this.balance = response;
      }, error => {

      }
    )
  }

  deleteOperation(id){
    this._operationService.deleteOperation(id).subscribe(
      response => {
        this.getAllOperations();
        this.getBalance();
      }, error => {

      }
    )
  }
}
