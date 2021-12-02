"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoActividadService = void 0;
const common_1 = require("@nestjs/common");
const tipo_actividad_entity_1 = require("../entities/tipo-actividad.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TipoActividadService = class TipoActividadService {
    constructor(tipoActividadRepository) {
        this.tipoActividadRepository = tipoActividadRepository;
    }
    findAll() {
        return this.tipoActividadRepository.find();
    }
    findOne(id) {
        return this.tipoActividadRepository.findOne(id);
    }
    create(body) {
        const obj = this.tipoActividadRepository.create(body);
        return this.tipoActividadRepository.save(obj);
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            // const obj = this.tipoActividadRepository.findOne(id);
            // this.tipoActividadRepository.merge(await obj, body);
            // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // // @ts-ignore
            return this.tipoActividadRepository.update({ id: id }, body);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tipoActividadRepository.delete(id);
            return true;
        });
    }
};
TipoActividadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_actividad_entity_1.TipoActividadEntity))
], TipoActividadService);
exports.TipoActividadService = TipoActividadService;
//# sourceMappingURL=tipo-actividad.service.js.map