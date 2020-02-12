import {Column, Entity, Index, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {FacturaEntity} from "../factura/factura.entity";
import {DetalleEntity} from "../detalle/detalle.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {RestauranteEntity} from "../restaurante/restaurante.entity";

@Entity('plato')
export class PlatoEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id_plato',
        comment: 'Identificador de la tabla plato',
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'nombre',
        comment: 'Nombre de la tabla plato',
    })
    nombre?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'float',
        nullable: true,
        name: 'precio',
        comment: 'Precio de la tabla plato',
    })
    precio?: number;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'descripcion',
        comment: 'Descripcion de la tabla plato',
    })
    descripcion?: number;

    @OneToOne(
        type => DetalleEntity, // Entidad
        detalle => detalle.plato, // El campo de la relacion
    )
    detalle:  DetalleEntity;

    @ManyToOne(
        type => RestauranteEntity, // Entidad
        restaurante => restaurante.plato, // El campo de la relacion
    )
    restaurante: RestauranteEntity;

}
