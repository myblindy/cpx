import { Pipe, PipeTransform } from '@angular/core';
import { StatusState } from './backend';

@Pipe({
  name: 'stateToImage'
})
export class StateToImagePipe implements PipeTransform {

  transform(value: StatusState): String {
    return 'assets\\icons\\' + StatusState[value].toLowerCase() + '.png';
  }

}
