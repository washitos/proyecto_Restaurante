import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {DeleteResult, Like, MoreThan, Repository} from "typeorm";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity) // Inyectar Dependencias
        private _repositorioUsuario: Repository<UsuarioEntity>
    ) {
    }

    crearUsuario(usuario: UsuarioEntity) {
        return this._repositorioUsuario
            .save(usuario);
    }

}
