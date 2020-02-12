
import {RolService} from './rol.service';
import {RolEntity} from './rol.entity';
import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Req, Res,
    Session,
} from '@nestjs/common';
import {validate} from "class-validator";
import {RolCreateDto} from "./rol.create-dbo";

@Controller('rol')

export class RolController {
    constructor(
        private readonly _rolService: RolService,
    ) {
    }

    @Post()
    async crearUnRol(
        @Body() rol: RolEntity,
        @Res() res,
    ): Promise<void> {
        const rolCreateDTO = new RolCreateDto();
        rolCreateDTO.nombre = rol.nombre;
        rolCreateDTO.nivel = rol.nivel;

        const errores = await validate(rolCreateDTO);
        if (errores.length > 0) {
            res.redirect(
                '/rol/ruta/crear-rol?error=Error validando',
            );
            // throw new BadRequestException('Error validando');
        } else {
            try {
                await this._rolService
                    .crearRol(
                        rol,
                    );
                res.redirect(
                    '/rol/ruta/mostrar-rol?mensaje=El rol se creo correctamente',
                );
            } catch (error) {
                console.error(error);
                res.redirect(
                    '/rol/ruta/crear-rol?error=Error del servidor',
                );
            }

        }

    }
}
