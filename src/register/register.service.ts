import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/create-register.dto';
import { RegisterRepository } from './repository/register.repository';
import { validate } from 'class-validator';

@Injectable()
export class RegisterService {
  constructor(private readonly repository: RegisterRepository) {}

  async create(createRegisterDto: CreateRegisterDTO) {
    const dataValid = await validate(createRegisterDto);

    if (dataValid.length > 0) {
      throw new BadRequestException(
        dataValid
          .map((error) => {
            const { constraints } = error;

            const errors = Object.values(constraints);

            return errors;
          })
          .flat(),
      );
    }
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

  async findAll() {
    return await this.repository.findAll();
  }
}
