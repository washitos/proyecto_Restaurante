import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioService} from "./usuario.service";

@Module({
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    UsuarioEntity
                ],
                'default'
            )
    ],
    controllers: [

    ],
    providers: [
        UsuarioService
    ],
    exports: [
        UsuarioService
    ]
})


export class UsuarioModule {}
