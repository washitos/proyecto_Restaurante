import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DetalleEntity} from "./detalle.entity";

@Module({imports: [
        TypeOrmModule
            .forFeature(
                [ DetalleEntity,
                ],
                'default'
            )
    ],})
export class DetalleModule {}
