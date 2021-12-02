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
exports.DeficienciaService = void 0;
const common_1 = require("@nestjs/common");
const deficiencia_entity_1 = require("../entities/deficiencia.entity");
const typeorm_1 = require("@nestjs/typeorm");
let DeficienciaService = class DeficienciaService {
    constructor(deficienciaRepository) {
        this.deficienciaRepository = deficienciaRepository;
    }
    findAll() {
        return this.deficienciaRepository.find({
            relations: ['responsable', 'informeResumen'],
        });
    }
    findOne(id) {
        return this.deficienciaRepository.findOne({ id }, { relations: ['responsable', 'informeResumen'] });
    }
    create(body) {
        const obj = this.deficienciaRepository.create(body);
        return this.deficienciaRepository.save(obj);
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            // const obj = this.deficienciaRepository.findOne(id);
            // this.deficienciaRepository.merge(await obj, body);
            // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // // @ts-ignore
            return this.deficienciaRepository.update({ id: id }, body);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.deficienciaRepository.delete(id);
            return true;
        });
    }
};
DeficienciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(deficiencia_entity_1.DeficienciaEntity))
], DeficienciaService);
exports.DeficienciaService = DeficienciaService;
//# sourceMappingURL=deficiencia.service.js.map