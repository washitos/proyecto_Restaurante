import {IsDate, IsEmail, IsNotEmpty, IsNumberString, IsString, Max, MaxLength, Min, MinLength} from "class-validator";

export class UsuarioCreateDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    apellido: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    contrasena: string;

    @IsNotEmpty()
    @IsString()
    fechaNacimiento: string;

    @IsNotEmpty()
    @IsEmail()
    @MinLength(10)
    @MaxLength(35)
    correoElectronico: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(10)
    cedula: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(25)
    direccionDomicilio: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(4)
    @MaxLength(10)
    codigoPostal: string;

}
