import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlatoEntity} from "./plato.entity";
@Module({imports: [
        TypeOrmModule
            .forFeature(
                [
                    PlatoEntity,
                ],
                'default'
            )
    ]})
export class PlatoModule {}
