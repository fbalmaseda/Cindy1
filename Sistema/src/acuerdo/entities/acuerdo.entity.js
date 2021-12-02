"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcuerdoEntity = void 0;
const typeorm_1 = require("typeorm");
const trabajador_entity_1 = require("../../trabajador/entities/trabajador.entity");
const actividad_entity_1 = require("../../actividad/entities/actividad.entity");
const class_transformer_1 = require("class-transformer");
let AcuerdoEntity = class AcuerdoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], AcuerdoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trabajador_entity_1.TrabajadorEntity, (trabajadorEntity) => trabajadorEntity.listaResponsablesTrabajador)
], AcuerdoEntity.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actividad_entity_1.ActividadEntity, (actividadEntity) => actividadEntity.listaResponsablesActividad)
], AcuerdoEntity.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], AcuerdoEntity.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: false })
], AcuerdoEntity.prototype, "acuerdo", void 0);
__decorate([
    (0, class_transformer_1.Transform)((x) => new Date(x)),
    (0, typeorm_1.Column)('timestamp without time zone')
], AcuerdoEntity.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], AcuerdoEntity.prototype, "verificacion", void 0);
AcuerdoEntity = __decorate([
    (0, typeorm_1.Entity)('acuerdo')
], AcuerdoEntity);
exports.AcuerdoEntity = AcuerdoEntity;
//# sourceMappingURL=acuerdo.entity.js.map