import { CreateRegisterDTO } from '../dto/create-register.dto';
import { Register } from '../entity/register.entity';

export abstract class RegisterRepository {
  abstract create(CreateDto: CreateRegisterDTO): Promise<Register>;
  abstract findAll(): Promise<Register[]>;
}

// Estruturas
// Interface, não possui métodos implementados, só pode ser implementada

// Abstratact
