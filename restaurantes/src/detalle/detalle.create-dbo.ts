import {IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength} from "class-validator";

export class DetalleCreateDbo {
    @IsNotEmpty()
    @IsNumberString()
    cantidad: string;

    @IsNotEmpty()
    @IsNumberString()
    totalDetalle: string;

}
