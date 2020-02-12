import {Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {RolEntity} from "../rol/rol.entity";

@Entity('rol_usuario')

export class RolUsuarioEntity {

    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'idRolUsuario',
        comment: 'Identificador de la tabla usuario',
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'nombreUsuario',
        comment: 'Nombre de la tabla usuario',
    })
    nombreUsuario?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'nombreRol',
        comment: 'Nombre de la tabla usuario',
    })
    nombreRol?: string;

    @ManyToOne(
        type => UsuarioEntity, // Entidad
        usuario => usuario.rolUsuario, // El campo de la relacion
    )
    usuario: UsuarioEntity;

    @ManyToOne(
        type => RolEntity, // Entidad
         rol => rol.rolUsuario, // El campo de la relacion
    )
    rol: RolEntity;


}

