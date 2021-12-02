"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotificacionModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const common_1 = require("@nestjs/common");
const email_notificacion_service_1 = require("./email-notificacion.service");
const path_1 = require("path");
let EmailNotificacionModule = class EmailNotificacionModule {
};
EmailNotificacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
                // or
                transport: {
                    host: 'smtp.example.com',
                    secure: false,
                    auth: {
                        user: 'user@example.com',
                        pass: 'topsecret',
                    },
                },
                defaults: {
                    from: '"No Reply" <noreply@example.com>',
                },
                template: {
                    dir: (0, path_1.join)(__dirname, 'templates'),
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
        providers: [email_notificacion_service_1.EmailNotificacionService],
        exports: [email_notificacion_service_1.EmailNotificacionService], // 👈 export for DI
    })
], EmailNotificacionModule);
exports.EmailNotificacionModule = EmailNotificacionModule;
//# sourceMappingURL=email-notificacion.module.js.map