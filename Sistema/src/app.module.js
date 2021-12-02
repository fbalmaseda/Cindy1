"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
//import { Module } from '@nestjs/common';
const usuario_module_1 = require("./usuario/usuario.module");
//import { TypeOrmModule } from '@nestjs/common';
const actividad_module_1 = require("./actividad/actividad.module");
const ueb_module_1 = require("./ueb/ueb.module");
const acuerdo_module_1 = require("./acuerdo/acuerdo.module");
const deficiencia_module_1 = require("./deficiencia/deficiencia.module");
const informe_resumen_module_1 = require("./informe-resumen/informe-resumen.module");
const tipo_actividad_module_1 = require("./tipo-actividad/tipo-actividad.module");
const trabajador_module_1 = require("./trabajador/trabajador.module");
const trabajador_actividad_module_1 = require("./trabajador-actividad/trabajador-actividad.module");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
// console.log('DATABASE', process.env.PG_NESTJS_DATABASE);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '127.0.0.1',
                port: 5432,
                username: 'postgres',
                password: 'new123',
                database: 'bd_tesis_tony',
                autoLoadEntities: true,
                synchronize: true,
            }),
            usuario_module_1.UsuarioModule,
            actividad_module_1.ActividadModule,
            ueb_module_1.UebModule,
            acuerdo_module_1.AcuerdoModule,
            deficiencia_module_1.DeficienciaModule,
            informe_resumen_module_1.InformeResumenModule,
            tipo_actividad_module_1.TipoActividadModule,
            trabajador_module_1.TrabajadorModule,
            trabajador_actividad_module_1.TrabajadorActividadModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map