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
exports.TrabajadorActividadService = void 0;
const common_1 = require("@nestjs/common");
const trabajador_actividad_entity_1 = require("../entities/trabajador-actividad.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TrabajadorActividadService = class TrabajadorActividadService {
    constructor(trabajadorActividadRepository) {
        this.trabajadorActividadRepository = trabajadorActividadRepository;
    }
    findAll() {
        return this.trabajadorActividadRepository.find({
            relations: ['trabajador', 'actividad'],
        });
    }
    findOne(id) {
        return this.trabajadorActividadRepository.findOne({ id }, { relations: ['trabajador', 'actividad'] });
    }
    create(body) {
        const obj = this.trabajadorActividadRepository.create(body);
        return this.trabajadorActividadRepository.save(obj);
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            // const obj = this.trabajadorActividadRepository.findOne(id);
            // this.trabajadorActividadRepository.merge(await obj, body);
            // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // // @ts-ignore
            return this.trabajadorActividadRepository.update({ id: id }, body);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.trabajadorActividadRepository.delete(id);
            return true;
        });
    }
};
TrabajadorActividadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trabajador_actividad_entity_1.TrabajadorActividadEntity))
], TrabajadorActividadService);
exports.TrabajadorActividadService = TrabajadorActividadService;
//# sourceMappingURL=trabajador-actividad.service.js.map