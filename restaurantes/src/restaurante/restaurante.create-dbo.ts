import {IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength} from "class-validator";

export class RestauranteCreateDbo {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    direccion: string;

    @IsNotEmpty()
    @IsNumberString()
    telefono: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(180)
    descripcion: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    horarioAtencion: string;
}
