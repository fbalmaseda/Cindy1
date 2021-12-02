"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabajadorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const trabajador_entity_1 = require("./entities/trabajador.entity");
const trabajador_service_1 = require("./services/trabajador.service");
const trabajador_controller_1 = require("./controllers/trabajador.controller");
let TrabajadorModule = class TrabajadorModule {
};
TrabajadorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([trabajador_entity_1.TrabajadorEntity])
        ],
        providers: [trabajador_service_1.TrabajadorService],
        controllers: [trabajador_controller_1.TrabajadorController]
    })
], TrabajadorModule);
exports.TrabajadorModule = TrabajadorModule;
//# sourceMappingURL=trabajador.module.js.map