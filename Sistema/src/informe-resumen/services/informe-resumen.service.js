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
exports.InformeResumenService = void 0;
const common_1 = require("@nestjs/common");
const informe_resumen_entity_1 = require("../entities/informe-resumen.entity");
const typeorm_1 = require("@nestjs/typeorm");
let InformeResumenService = class InformeResumenService {
    constructor(informeResumenRepository) {
        this.informeResumenRepository = informeResumenRepository;
    }
    findAll() {
        return this.informeResumenRepository.find({
            relations: ['realizador', 'actividad'],
        });
    }
    findOne(id) {
        return this.informeResumenRepository.findOne({ id }, { relations: ['realizador', 'actividad'] });
    }
    create(body) {
        const obj = this.informeResumenRepository.create(body);
        return this.informeResumenRepository.save(obj);
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            // const obj = this.informeResumenRepository.findOne(id);
            // this.informeResumenRepository.merge(await obj, body);
            // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // // @ts-ignore
            return this.informeResumenRepository.update({ id: id }, body);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.informeResumenRepository.delete(id);
            return true;
        });
    }
};
InformeResumenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(informe_resumen_entity_1.InformeResumenEntity))
], InformeResumenService);
exports.InformeResumenService = InformeResumenService;
//# sourceMappingURL=informe-resumen.service.js.map