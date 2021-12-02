"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const actividad_entity_1 = require("./entities/actividad.entity");
const actividad_service_1 = require("./services/actividad.service");
const actividad_controller_1 = require("./controllers/actividad.controller");
const email_notificacion_service_1 = require("../email-notificacion/email-notificacion.service");
let ActividadModule = class ActividadModule {
};
ActividadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([actividad_entity_1.ActividadEntity]),
            email_notificacion_service_1.EmailNotificacionService,
        ],
        providers: [actividad_service_1.ActividadService, email_notificacion_service_1.EmailNotificacionService],
        controllers: [actividad_controller_1.ActividadController],
    })
], ActividadModule);
exports.ActividadModule = ActividadModule;
//# sourceMappingURL=actividad.module.js.map