"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
let UsuarioEntity = class UsuarioEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 })
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 })
], UsuarioEntity.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true })
], UsuarioEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false })
], UsuarioEntity.prototype, "contrasenna", void 0);
UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)('usuario')
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map