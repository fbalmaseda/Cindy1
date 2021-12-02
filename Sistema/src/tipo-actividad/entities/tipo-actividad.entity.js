"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoActividadEntity = void 0;
const typeorm_1 = require("typeorm");
const actividad_entity_1 = require("../../actividad/entities/actividad.entity");
let TipoActividadEntity = class TipoActividadEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], TipoActividadEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true })
], TipoActividadEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actividad_entity_1.ActividadEntity, (actividadEntity) => actividadEntity.tipoActividad)
], TipoActividadEntity.prototype, "listaActividadesTipoActividad", void 0);
TipoActividadEntity = __decorate([
    (0, typeorm_1.Entity)('tipo_actividad')
], TipoActividadEntity);
exports.TipoActividadEntity = TipoActividadEntity;
//# sourceMappingURL=tipo-actividad.entity.js.map