import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolUsuarioEntity} from "./rol-usuario.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature(
                [
                    RolUsuarioEntity,
                ],
                'default'
            )
    ]
})
export class RolUsuarioModule {
}
