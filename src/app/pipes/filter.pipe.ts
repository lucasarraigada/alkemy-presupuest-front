import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.length < 3) return value;
    const resultOperation = [];
    for(const operation of value){
      if(operation.concept.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultOperation.push(operation);
      }
    }
    return resultOperation;
  }
}
