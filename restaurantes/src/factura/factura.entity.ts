import {Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RolEntity} from "../rol/rol.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {DetalleEntity} from "../detalle/detalle.entity";

@Entity('factura')

export class FacturaEntity {

    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id_factura',
        comment: 'Identificador de la tabla factura',
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'fecha',
        comment: 'Fecha de la tabla factura',
    })
    fecha?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'numero',
        comment: 'Numero de la factura',
    })
    numero?: string;

    @ManyToOne(
        type => UsuarioEntity, // Entidad
        usuario => usuario.factura, // El campo de la relacion
    )
    usuario: UsuarioEntity;

    @OneToMany(
        type => DetalleEntity, // Entidad
        detalle => detalle.factura, // Nombre del campo
    )
    detalle: DetalleEntity[];

}
