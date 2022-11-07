import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'FormatDate'
})
export class FormatData implements PipeTransform {

  transform(value: string, dateformat: string = 'DD/MM/yyyy'): string {
    if (value) {
      // "2022-03-21T00:19:41.815329"
      const format: string = moment(value).format(dateformat);
      if (format == 'Invalid date') {
        const splitDate = value.includes("T") ? value.split("T")[0] : value.split(" ")[0];
        return splitDate;
      }

      return format
    }

    return " - "
  }

}
