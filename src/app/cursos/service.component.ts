import { Injectable } from '@angular/core';

/**
 * name
 */

/*@Component({
  selector: 'my-app',
  template: ``,            

})*/
@Injectable()
export class CursosService {

getCursos(){
    return ['Angular2', 'Java', 'Ext JS', 'JavaScript'];
   }
}