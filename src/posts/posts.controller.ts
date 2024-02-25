import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { RequestLogDocument } from '../modules/request-log/request-log.shema'; // Importa el tipo de documento del esquema de registro de solicitudes

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<RequestLogDocument[]> {
    // Usa el tipo de documento del esquema de registro de solicitudes
    return this.postsService.getAllPosts();
  }
  @Post()
  async createPost(@Body() datos:any){
    try {
        return this.postsService.createPost(datos);
    } catch (err) {
        throw new HttpException("no se pudo crear el post",HttpStatus.BAD_REQUEST);
    }
  }

}
