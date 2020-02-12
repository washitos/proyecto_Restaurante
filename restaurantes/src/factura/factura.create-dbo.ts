import {IsDate, IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength} from "class-validator";

export class FacturaCreateDbo {
    @IsNotEmpty()
    @IsDate()
    fecha: string;

    @IsNotEmpty()
    @IsNumberString()
    numero: string;
}
