import { Injectable } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/create-register.dto';
import { RegisterRepository } from './repository/register.repository';

@Injectable()
export class RegisterService {
  constructor(private readonly repository: RegisterRepository) {}

  async create(createRegisterDto: CreateRegisterDTO) {
    const { studentName, classDate, classQuantity, hourValue } =
      createRegisterDto;

    const savedRegister = await this.repository.create({
      studentName: studentName.toUpperCase(),
      classDate,
      classQuantity,
      hourValue,
    });

    return savedRegister;
  }
}
