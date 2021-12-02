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
exports.ActividadController = void 0;
const common_1 = require("@nestjs/common");
let ActividadController = class ActividadController {
    constructor(trabajadorService) {
        this.trabajadorService = trabajadorService;
    }
    findAll() {
        return this.trabajadorService.findAll();
    }
    findOne(id) {
        return this.trabajadorService.findOne(id);
    }
    create(body) {
        return this.trabajadorService.create(body);
    }
    update(id, body) {
        return this.trabajadorService.update(id, body);
    }
    delete(id) {
        return this.trabajadorService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('mostrar')
], ActividadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('obtener/:id'),
    __param(0, (0, common_1.Param)('id'))
], ActividadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)())
], ActividadController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('editar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)())
], ActividadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('eliminar/:id'),
    __param(0, (0, common_1.Param)('id'))
], ActividadController.prototype, "delete", null);
ActividadController = __decorate([
    (0, common_1.Controller)('actividad')
], ActividadController);
exports.ActividadController = ActividadController;
//# sourceMappingURL=actividad.controller.js.map