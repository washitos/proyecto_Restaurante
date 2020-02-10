import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id_web',
        comment: 'Identificador de la tabla usuario',
    })
    id: number;
//commit test
    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'nombre',
        comment: 'Nombre de la tabla usuario',
    })
    nombre?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'apellido',
        comment: 'Apellido de la tabla usuario',
    })
    apellido?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'contrasena',
        comment: 'Nombre de la tabla usuario',
    })
    contrasena?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'fechaNacimiento',
        comment: 'Fecha de Nacimiento usuario',
    })
    fechaNacimiento?: string;

    @Index({
        unique: true,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'correoElectronico',
        comment: 'Correo Electronico de la tabla usuario',
    })
    correoElectronico?: string;

    @Index({
        unique: true,
    })
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'cedula',
        comment: 'Cedula de la tabla usuario',
    })
    cedula?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'direccionDomicilio',
        comment: 'Direccion de domicilio de la tabla usuario',
    })
    direccionDomicilio?: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'codigoPostal',
        comment: 'Codigo Postal de la tabla usuario',
    })
    codigoPostal?: string;

}
