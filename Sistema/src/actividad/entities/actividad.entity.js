"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const ueb_entity_1 = require("../../ueb/entities/ueb.entity");
const tipo_actividad_entity_1 = require("../../tipo-actividad/entities/tipo-actividad.entity");
const trabajador_actividad_entity_1 = require("../../trabajador-actividad/entities/trabajador-actividad.entity");
const acuerdo_entity_1 = require("../../acuerdo/entities/acuerdo.entity");
const informe_resumen_entity_1 = require("../../informe-resumen/entities/informe-resumen.entity");
let ActividadEntity = class ActividadEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], ActividadEntity.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Transform)((x) => new Date(x)),
    (0, typeorm_1.Column)('timestamp without time zone')
], ActividadEntity.prototype, "fecha_hora", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ueb_entity_1.UebEntity, (uebEntity) => uebEntity.listaActividadesUeb)
], ActividadEntity.prototype, "ueb", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_actividad_entity_1.TipoActividadEntity, (tipoActividadEntity) => tipoActividadEntity.listaActividadesTipoActividad)
], ActividadEntity.prototype, "tipoActividad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], ActividadEntity.prototype, "notificar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => trabajador_actividad_entity_1.TrabajadorActividadEntity, (trabajadorActividadEntity) => trabajadorActividadEntity.actividad)
], ActividadEntity.prototype, "listaTrabajadoresActividadActividad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => acuerdo_entity_1.AcuerdoEntity, (acuerdoEntity) => acuerdoEntity.actividad)
], ActividadEntity.prototype, "listaResponsablesActividad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => informe_resumen_entity_1.InformeResumenEntity, (informeResumenEntity) => informeResumenEntity.actividad)
], ActividadEntity.prototype, "listaRealizadoresActividad", void 0);
ActividadEntity = __decorate([
    (0, typeorm_1.Entity)('actividad')
], ActividadEntity);
exports.ActividadEntity = ActividadEntity;
//# sourceMappingURL=actividad.entity.js.map