"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformeResumenEntity = void 0;
const typeorm_1 = require("typeorm");
const trabajador_entity_1 = require("../../trabajador/entities/trabajador.entity");
const actividad_entity_1 = require("../../actividad/entities/actividad.entity");
const class_transformer_1 = require("class-transformer");
const deficiencia_entity_1 = require("../../deficiencia/entities/deficiencia.entity");
let InformeResumenEntity = class InformeResumenEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], InformeResumenEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trabajador_entity_1.TrabajadorEntity, (trabajadorEntity) => trabajadorEntity.listaRealizadoresTrabajador)
], InformeResumenEntity.prototype, "realizador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actividad_entity_1.ActividadEntity, (actividadEntity) => actividadEntity.listaRealizadoresActividad)
], InformeResumenEntity.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], InformeResumenEntity.prototype, "nombre", void 0);
__decorate([
    (0, class_transformer_1.Transform)((x) => new Date(x)),
    (0, typeorm_1.Column)('timestamp without time zone')
], InformeResumenEntity.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: false })
], InformeResumenEntity.prototype, "valoracion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], InformeResumenEntity.prototype, "tiene_deficiencia", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: false })
], InformeResumenEntity.prototype, "recomendaciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], InformeResumenEntity.prototype, "calificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], InformeResumenEntity.prototype, "nombre_controlado", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false })
], InformeResumenEntity.prototype, "cargo_controlado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deficiencia_entity_1.DeficienciaEntity, (deficienciaEntity) => deficienciaEntity.informeResumen)
], InformeResumenEntity.prototype, "listaInformeResumenDeficiencia", void 0);
InformeResumenEntity = __decorate([
    (0, typeorm_1.Entity)('informe_resumen')
], InformeResumenEntity);
exports.InformeResumenEntity = InformeResumenEntity;
//# sourceMappingURL=informe-resumen.entity.js.map