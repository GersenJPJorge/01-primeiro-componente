"use strict";
/**
 * name
 */
/*@Component({
  selector: 'my-app',
  template: ``,

})*/
var CursosService = (function () {
    function CursosService() {
    }
    CursosService.prototype.getCursos = function () {
        return ['Angular2', 'Java', 'Ext JS', 'JavaScript'];
    };
    return CursosService;
}());
exports.CursosService = CursosService;
//# sourceMappingURL=service.component.js.map