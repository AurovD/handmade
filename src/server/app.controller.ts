import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { UseInterceptors } from '@nestjs/common';
import { ParamsInterceptor } from './params.interceptor';
import { ConfigInterceptor } from './config.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/')
  // @Render('index')
  // @UseInterceptors(ParamsInterceptor, ConfigInterceptor)
  // public home() {
  //   console.log("khljjkhkhkhk");
  //   return {};
  // }
  //
  // @Get(':id')
  // @Render('[id]')
  // @UseInterceptors(ParamsInterceptor, ConfigInterceptor)
  // public blogPost() {
  //   console.log("idhjj");
  //   return {};
  // }
  // @Get('/api/blog-posts')
  // public listBlogPosts() {
  //   console.log("jjgljgljgjlgl");
  //   return this.appService.getBlogPosts();
  // }
  //
  // @Get('/api/blog-posts/:id')
  // public getBlogPostById(@Param('id', new ParseIntPipe()) id: number) {
  //   return this.appService.getBlogPost(id);
  // }
}
