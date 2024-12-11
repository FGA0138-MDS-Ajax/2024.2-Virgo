import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsEnum,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(['AGRONOMO', 'AGRICULTOR'], {
    message: 'valid role required',
  })
  role: 'AGRONOMO' | 'AGRICULTOR';

  id?: string;

  @ValidateIf((o) => o.role === 'AGRONOMO')
  @IsString()
  crea?: string;

  @ValidateIf((o) => o.role === 'AGRONOMO')
  @IsString()
  cpf?: string;
}
