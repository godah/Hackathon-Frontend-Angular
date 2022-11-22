import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Company } from 'src/models/company';

@Pipe({
  name: 'filterCompaniesPipe'
})
export class FilterCompaniesPipePipe implements PipeTransform {

  transform(value: Company[], filterText: string): Company[] {

    if(filterText.length == 0){
      return value;
    }
    var filteredName = value.filter(x => x.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));
    if(filteredName.length > 0){
      return filteredName;
    }
    var filteredOds = value.filter(x => x.objetivosOds.some(y => y.descricao.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())));
    if(filteredOds.length > 0){
      return filteredOds;
    }
    return [];
  }

}
