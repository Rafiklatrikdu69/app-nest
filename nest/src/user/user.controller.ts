/* eslint-disable */
import { Controller, Get, Post, Body, Patch, Param, Delete, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  private sessionData: Record<string, any>;

  constructor(private readonly userService: UserService) {
 
  }

  @Post("/create-user")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/get/:id/:password')
  findOne(@Param('id') id: string,@Param('password') password: string) {
    return this.userService.findOne(id,password);
  }

  @Get('/session')
  getSession() {
    return this.sessionData;
  }

  @Post('/session/:id')
  addSession(@Session() session: Record<string, any>, @Param('id') id: string) {
    session.myData = { id: id };
    this.sessionData = session;
   return {session:"demmarrage de la session !"}
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  @Delete('/session/remove')
  removeSession() {
    this.sessionData= null;
  }
}
