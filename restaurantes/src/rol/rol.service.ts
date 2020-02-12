import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {RolEntity} from "./rol.entity";
import {DeleteResult, Like, MoreThan, Repository} from "typeorm";

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(RolEntity) // Inyectar Dependencias
        private _repositorioRol: Repository<RolEntity>
    ) {
    }

    crearRol(rol: RolEntity) {
        return this._repositorioRol
            .save(rol);
    }

}
