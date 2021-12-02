"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UebModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ueb_entity_1 = require("./entities/ueb.entity");
const ueb_service_1 = require("./services/ueb.service");
const ueb_controller_1 = require("./controllers/ueb.controller");
let UebModule = class UebModule {
};
UebModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ueb_entity_1.UebEntity]),
        ],
        providers: [ueb_service_1.UebService],
        controllers: [ueb_controller_1.UebController]
    })
], UebModule);
exports.UebModule = UebModule;
//# sourceMappingURL=ueb.module.js.map