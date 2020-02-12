import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Max,
    MaxLength,
    Min,
    MinLength
} from "class-validator";

export class RolCreateDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(3)
    nivel: number;

}
