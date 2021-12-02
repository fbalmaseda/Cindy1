"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeficienciaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const deficiencia_entity_1 = require("./entities/deficiencia.entity");
const deficiencia_service_1 = require("./services/deficiencia.service");
const deficiencia_controller_1 = require("./controllers/deficiencia.controller");
let DeficienciaModule = class DeficienciaModule {
};
DeficienciaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([deficiencia_entity_1.DeficienciaEntity])
        ],
        providers: [deficiencia_service_1.DeficienciaService],
        controllers: [deficiencia_controller_1.DeficienciaController]
    })
], DeficienciaModule);
exports.DeficienciaModule = DeficienciaModule;
//# sourceMappingURL=deficiencia.module.js.map