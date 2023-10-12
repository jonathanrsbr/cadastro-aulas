import { Injectable } from '@nestjs/common';
import { Register } from '../../entity/register.entity';
import { RegisterRepository } from '../register.repository';
import { CreateRegisterDTO } from '../../dto/create-register.dto';

@Injectable()
export class InMemoryRegisterRepository implements RegisterRepository {
  private registers: Register[] = [];
  private idCounter = 1;

  async create(data: CreateRegisterDTO): Promise<Register> {
    const register = new Register({ ...data, id: this.idCounter });

    this.registers.push(register);
    this.idCounter++;
    return register;
  }
}
