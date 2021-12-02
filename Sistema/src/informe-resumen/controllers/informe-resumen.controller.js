"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformeResumenController = void 0;
const common_1 = require("@nestjs/common");
let InformeResumenController = class InformeResumenController {
    constructor(informeResumenService) {
        this.informeResumenService = informeResumenService;
    }
    findAll() {
        return this.informeResumenService.findAll();
    }
    findOne(id) {
        return this.informeResumenService.findOne(id);
    }
    create(body) {
        return this.informeResumenService.create(body);
    }
    update(id, body) {
        return this.informeResumenService.update(id, body);
    }
    delete(id) {
        return this.informeResumenService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('mostrar')
], InformeResumenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('obtener/:id'),
    __param(0, (0, common_1.Param)('id'))
], InformeResumenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)())
], InformeResumenController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('editar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)())
], InformeResumenController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('eliminar/:id'),
    __param(0, (0, common_1.Param)('id'))
], InformeResumenController.prototype, "delete", null);
InformeResumenController = __decorate([
    (0, common_1.Controller)('informe_resumen')
], InformeResumenController);
exports.InformeResumenController = InformeResumenController;
//# sourceMappingURL=informe-resumen.controller.js.map