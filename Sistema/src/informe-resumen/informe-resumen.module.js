"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformeResumenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const informe_resumen_entity_1 = require("./entities/informe-resumen.entity");
const informe_resumen_service_1 = require("./services/informe-resumen.service");
const informe_resumen_controller_1 = require("./controllers/informe-resumen.controller");
let InformeResumenModule = class InformeResumenModule {
};
InformeResumenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([informe_resumen_entity_1.InformeResumenEntity])
        ],
        providers: [informe_resumen_service_1.InformeResumenService],
        controllers: [informe_resumen_controller_1.InformeResumenController]
    })
], InformeResumenModule);
exports.InformeResumenModule = InformeResumenModule;
//# sourceMappingURL=informe-resumen.module.js.map