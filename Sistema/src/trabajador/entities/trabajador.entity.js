"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabajadorEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const trabajador_actividad_entity_1 = require("../../trabajador-actividad/entities/trabajador-actividad.entity");
const acuerdo_entity_1 = require("../../acuerdo/entities/acuerdo.entity");
const informe_resumen_entity_1 = require("../../informe-resumen/entities/informe-resumen.entity");
const deficiencia_entity_1 = require("../../deficiencia/entities/deficiencia.entity");
let TrabajadorEntity = class TrabajadorEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], TrabajadorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 })
], TrabajadorEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 })
], TrabajadorEntity.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsEmail)()
], TrabajadorEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 })
], TrabajadorEntity.prototype, "cargo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => trabajador_actividad_entity_1.TrabajadorActividadEntity, (trabajadorActividadEntity) => trabajadorActividadEntity.trabajador)
], TrabajadorEntity.prototype, "listaTrabajadoresActividadTrabajador", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => acuerdo_entity_1.AcuerdoEntity, (acuerdoEntity) => acuerdoEntity.responsable)
], TrabajadorEntity.prototype, "listaResponsablesTrabajador", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => informe_resumen_entity_1.InformeResumenEntity, (informeResumenEntity) => informeResumenEntity.realizador)
], TrabajadorEntity.prototype, "listaRealizadoresTrabajador", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deficiencia_entity_1.DeficienciaEntity, (deficienciaEntity) => deficienciaEntity.responsable)
], TrabajadorEntity.prototype, "listaResponsablesDeficiencia", void 0);
TrabajadorEntity = __decorate([
    (0, typeorm_1.Entity)('trabajador')
], TrabajadorEntity);
exports.TrabajadorEntity = TrabajadorEntity;
//# sourceMappingURL=trabajador.entity.js.map