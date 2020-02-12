import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {RolUsuarioEntity} from "../rol-usuario/rol-usuario.entity";

@Entity('rol')
export class RolEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'idRol',
        comment: 'Identificador de la tabla rol',
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'nombre',
        comment: 'Nombre del rol',
    })
    nombre?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'int',
        nullable: true,
        name: 'nivel',
        comment: 'Nivel del rol',
    })
    nivel?: number;

    @OneToMany(
        type => RolUsuarioEntity, // Entidad
        rolUsuario => rolUsuario.rol, // Nombre del campo
    )
    rolUsuario: RolUsuarioEntity[];



}
