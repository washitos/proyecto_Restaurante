import {IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from "class-validator";

export class PlatoCreateDbo {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    precio: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(80)
    descripcion: string;
}
