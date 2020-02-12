import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolEntity} from "./rol.entity";
import {RolService} from "./rol.service";
import {RolController} from "./rol.controller";
import { FacturaModule } from '../factura/factura.module';
import { DetalleModule } from '../detalle/detalle.module';
import { PlatoModule } from '../plato/plato.module';
import { RestauranteModule } from '../restaurante/restaurante.module';

@Module({
  imports: [
    TypeOrmModule
        .forFeature(
            [
            ],
            'default'
        )
  ],
  controllers: [
    RolController
  ],
  providers: [
    RolService
  ],
  exports: [
    RolService
  ]
})


export class RolModule {}
