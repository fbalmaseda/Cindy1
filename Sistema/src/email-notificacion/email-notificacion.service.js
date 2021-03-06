"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.EmailNotificacionService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
// 1- install nodemailer, package if not installed (type in cmd) : npm install nodemailer
//
// 2- go to https://myaccount.google.com/lesssecureapps and turn on Allow less secure apps.
let EmailNotificacionService = class EmailNotificacionService {
    enviarNotificacion(objeto, crudOperacion) {
        return __awaiter(this, void 0, void 0, function* () {
            const transporter = (0, nodemailer_1.createTransport)({
                service: 'gmail',
                auth: {
                    user: 'notificaciones.actividades@gmail.com',
                    pass: 'tesis_tony123',
                },
            });
            let subjet = crudOperacion == 'CREAR'
                ? 'Nueva Actividad'
                : 'Actualizaci??n de Actividad';
            subjet += ' (Fecha: ' + objeto.fecha_hora + ')';
            let info = crudOperacion == 'CREAR'
                ? 'Tiene una nueva actividad el d??a: '
                : 'Se actualiz?? la actividad para el d??a: ';
            info += objeto.fecha_hora;
            const mailOptions = {
                from: 'any@any.com',
                to: objeto.correo,
                subject: subjet,
                html: '<h1>NOTIFICACION ACTIVIDAD</h1><h4>' + info + '</h4>',
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err)
                    console.log(err);
                else
                    console.log(info);
            });
        });
    }
};
EmailNotificacionService = __decorate([
    (0, common_1.Injectable)()
], EmailNotificacionService);
exports.EmailNotificacionService = EmailNotificacionService;
//# sourceMappingURL=email-notificacion.service.js.map