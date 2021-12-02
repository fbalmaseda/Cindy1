"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UebEntity = void 0;
const typeorm_1 = require("typeorm");
const actividad_entity_1 = require("../../actividad/entities/actividad.entity");
let UebEntity = class UebEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], UebEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true })
], UebEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({})
], UebEntity.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({})
], UebEntity.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actividad_entity_1.ActividadEntity, (actividadEntity) => actividadEntity.ueb)
], UebEntity.prototype, "listaActividadesUeb", void 0);
UebEntity = __decorate([
    (0, typeorm_1.Entity)('ueb')
], UebEntity);
exports.UebEntity = UebEntity;
//# sourceMappingURL=ueb.entity.js.map