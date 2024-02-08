/* eslint-disable */
import { Injectable, Session } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private sessionData: Record<string, any>;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string,password: string){
    return await this.userRepository.findOne({ where: { name: id ,password:password} });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  getSessionData() {
    return this.sessionData;
  }

  setSessionData(session: Record<string, any>) {
    this.sessionData = session;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
