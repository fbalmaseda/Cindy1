"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabajadorActividadEntity = void 0;
const typeorm_1 = require("typeorm");
const trabajador_entity_1 = require("../../trabajador/entities/trabajador.entity");
const actividad_entity_1 = require("../../actividad/entities/actividad.entity");
let TrabajadorActividadEntity = class TrabajadorActividadEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], TrabajadorActividadEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], TrabajadorActividadEntity.prototype, "preside", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], TrabajadorActividadEntity.prototype, "organiza_participa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trabajador_entity_1.TrabajadorEntity, (trabajadorEntity) => trabajadorEntity.listaTrabajadoresActividadTrabajador)
], TrabajadorActividadEntity.prototype, "trabajador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actividad_entity_1.ActividadEntity, (actividadEntity) => actividadEntity.listaTrabajadoresActividadActividad)
], TrabajadorActividadEntity.prototype, "actividad", void 0);
TrabajadorActividadEntity = __decorate([
    (0, typeorm_1.Entity)('trabajador_actividad')
], TrabajadorActividadEntity);
exports.TrabajadorActividadEntity = TrabajadorActividadEntity;
//# sourceMappingURL=trabajador-actividad.entity.js.map