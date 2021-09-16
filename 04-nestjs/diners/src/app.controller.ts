import { BadRequestException, Body, Controller, Get, 
  Headers, 
  HttpCode, InternalServerErrorException, Post, Query } from '@nestjs/common';
import { validate } from 'class-validator';
import { AppService } from './app.service';
import { UsuarioDto } from './dto/usuario.dto';
// import { } from ''

@Controller() // decoradores -> funciones
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get') // http://localhost:3000/get
  get(){
    return 'Hola mundo GET'
  }
  // import { Controller, Get, Post, Headers } from '@nestjs/common';
  @Post('post') // http://localhost:3000/post
  @HttpCode(200) // Ok
  async post(
    @Query() parametrosConsulta,
    @Body() parametrosCuerpo,
    @Headers() cabeceras
  ){
    try{
      // import { UsuarioDto } from './dto/usuario.dto';
      const usuarioDto = new UsuarioDto();
      usuarioDto.nombre = cabeceras.nombre;
      usuarioDto.apellido = cabeceras.apellido;
      // import { validate } from 'class-validator';
      const arregloErrores = await validate(usuarioDto)
      if(arregloErrores.length > 0){
        console.log(JSON.stringify(arregloErrores));
        throw new BadRequestException('Error validacion');
      } else {
        return 'HOLA POST VALIDADO';
      }
    }catch(error){
      console.log(error);
      if(error.status){
        if(error.status === 400){
          throw new BadRequestException('Error validando');
        }else{
          throw new InternalServerErrorException();
        }
      }else{
        throw new InternalServerErrorException();
      }
    }
  }

}





