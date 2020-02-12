import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {FacturaEntity} from "../factura/factura.entity";
import {PlatoEntity} from "../plato/plato.entity";

@Entity('detalle')

export class DetalleEntity {

    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id_detalle',
        comment: 'Identificador de la tabla detalle',
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'float',
        nullable: false,
        name: 'cantidad',
        comment: 'Cantidad de plato en el detalle',
    })
    cantidad?: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'float',
        nullable: false,
        name: 'totalDetalle',
        comment: 'Precio por cantidad',
    })
    totalDetalle?: number;

    @ManyToOne(
        type => FacturaEntity, // Entidad
        factura => factura.detalle, // El campo de la relacion
    )
    factura: FacturaEntity;

    @OneToOne(
        type => PlatoEntity, // Entidad
        plato => plato.detalle, // Nombre del campo
    )
    @JoinColumn()
    plato: PlatoEntity[];

}
