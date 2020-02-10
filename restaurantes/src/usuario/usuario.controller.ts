
import {UsuarioService} from './usuario.service';
import {UsuarioEntity} from './usuario.entity';
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
import {UsuarioCreateDto} from "./usuario.create-dbo";

@Controller('usuario')

export class UsuarioController {
    constructor(
        private readonly _usuarioService: UsuarioService,
    ) {
    }

    @Post()
    async crearUnUsuario(
        @Body() usuario: UsuarioEntity,
        @Res() res,
    ): Promise<void> {
        const usuarioCreateDTO = new UsuarioCreateDto();
        usuarioCreateDTO.nombre = usuario.nombre;
        usuarioCreateDTO.apellido = usuario.apellido;
        usuarioCreateDTO.contrasena = usuario.contrasena;
        usuarioCreateDTO.fechaNacimiento = usuario.fechaNacimiento;
        usuarioCreateDTO.correoElectronico = usuario.correoElectronico;
        usuarioCreateDTO.cedula = usuario.cedula;
        usuarioCreateDTO.direccionDomicilio = usuario.direccionDomicilio;
        usuarioCreateDTO.codigoPostal = usuario.codigoPostal;
        const errores = await validate(usuarioCreateDTO);
        if (errores.length > 0) {
            res.redirect(
                '/usuario/ruta/crear-usuario?error=Error validando',
            );
            // throw new BadRequestException('Error validando');
        } else {
            try {
                await this._usuarioService
                    .crearUsuario(
                        usuario,
                    );
                res.redirect(
                    '/usuario/ruta/mostrar-usuarios?mensaje=El usuario se creo correctamente',
                );
            } catch (error) {
                console.error(error);
                res.redirect(
                    '/usuario/ruta/crear-usuario?error=Error del servidor',
                );
            }

        }

    }
}
