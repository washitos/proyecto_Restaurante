import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsuarioModule } from './usuario/usuario.module';
import { RolUsuarioModule } from './rol-usuario/rol-usuario.module';
import { RolModule } from './rol/rol.module';
import {DetalleModule} from "./detalle/detalle.module";
import {FacturaModule} from "./factura/factura.module";
import {PlatoModule} from "./plato/plato.module";
import {RestauranteModule} from "./restaurante/restaurante.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsuarioModule,
    RolUsuarioModule,
    RolModule,
    FacturaModule,
    DetalleModule,
    PlatoModule,
    RestauranteModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
