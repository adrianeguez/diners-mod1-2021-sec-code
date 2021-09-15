import { IsAlphanumeric, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";


export class UsuarioDto {

    @IsOptional()
    @IsString()
    @IsAlphanumeric()
    @MinLength(3)
    @MaxLength(10)
    nombre: string;
    
    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    @MinLength(3)
    @MaxLength(10)
    apellido: string;
}