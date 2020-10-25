import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//IMPORT SERVICE
import { OperationsService } from '../../service/operations.service';

@Component({
  selector: 'app-operations-form',
  templateUrl: './operations-form.component.html',
  styleUrls: ['./operations-form.component.css'],
})
export class OperationsFormComponent implements OnInit {
  operation: any = {
    id: null,
    concept: null,
    amount: null,
    date: null,
    operationType: null,
  };
  operationsType: any = [];
  operationType: number;
  edit: boolean = false;
  titleAdd;
  titleEdit;

  constructor(
    private _operationService: OperationsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.titleAdd = 'Add Operation';
    this.titleEdit = 'Edit Operation';
    this.getOperationType();
    this.getOneOperation();
  }

  getOneOperation() {
    const params = this._activatedRoute.snapshot.params;
    if (params.id) {
      this._operationService.getOneOperation(params.id).subscribe(
        (data) => {
          console.log(data)
          this.operation = data;
          this.edit = true;
        },
        (error) => {}
      );
    }
  }

  getOperationType() {
    this._operationService.getAllOperationsType().subscribe(
      (response) => {
        this.operationsType = response;
      },
      (error) => {}
    );
  }

  createOperation() {
    delete this.operation.id;
    delete this.operation.date;
    this.operation.operationType = this.operationType;
    this._operationService.createOperation(this.operation).subscribe(
      (response) => {
        this._router.navigate(['/operations-list']);
      },
      (error) => {}
    );
  }

  updateOperation(id, operation) {
    this._operationService.updateOperation(id, operation).subscribe(
        (response) => {
          this._router.navigate(['/operations-list']);
        },
        (error) => {}
      );
  }
}
