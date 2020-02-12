import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RolUsuarioEntity} from "../rol-usuario/rol-usuario.entity";
import {Res} from "@nestjs/common";
import {PlatoEntity} from "../plato/plato.entity";

@Entity('restaurante')
export class RestauranteEntity {

    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id_restaurante',
        comment: 'Identificador de la tabla restaurante',
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'nombre',
        comment: 'Nombre de la tabla restaurante',
    })
    nombre?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'direccion',
        comment: 'Direccion de la tabla restaurante',
    })
    direccion?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'telefono',
        comment: 'Telefono de la tabla restaurante',
    })
    telefono?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'apellido',
        comment: 'Descripcion de la tabla restaurante',
    })
    descripcion?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'horarioAtencion',
        comment: 'Horario de atencion del restaurante',
    })
    horarioAtencion?: string;

    @OneToMany(
        type => PlatoEntity, // Entidad
        plato => plato.restaurante, // Nombre del campo
    )
    plato: PlatoEntity[];




}
