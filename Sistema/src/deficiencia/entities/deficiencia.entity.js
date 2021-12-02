"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeficienciaEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const informe_resumen_entity_1 = require("../../informe-resumen/entities/informe-resumen.entity");
const trabajador_entity_1 = require("../../trabajador/entities/trabajador.entity");
let DeficienciaEntity = class DeficienciaEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], DeficienciaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => informe_resumen_entity_1.InformeResumenEntity, (informeResumenEntity) => informeResumenEntity.listaInformeResumenDeficiencia)
], DeficienciaEntity.prototype, "informeResumen", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: false })
], DeficienciaEntity.prototype, "deficiencia", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: false })
], DeficienciaEntity.prototype, "medidas", void 0);
__decorate([
    (0, class_transformer_1.Transform)((x) => new Date(x)),
    (0, typeorm_1.Column)('timestamp without time zone')
], DeficienciaEntity.prototype, "fecha_cumplimiento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trabajador_entity_1.TrabajadorEntity, (trabajadorEntity) => trabajadorEntity.listaResponsablesDeficiencia)
], DeficienciaEntity.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], DeficienciaEntity.prototype, "verificacion", void 0);
DeficienciaEntity = __decorate([
    (0, typeorm_1.Entity)('deficiencia')
], DeficienciaEntity);
exports.DeficienciaEntity = DeficienciaEntity;
//# sourceMappingURL=deficiencia.entity.js.map