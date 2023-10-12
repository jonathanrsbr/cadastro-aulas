import { Test } from '@nestjs/testing';
import { RegisterService } from './register.service';
import { CreateRegisterDTO } from './dto/create-register.dto';
import { Register } from './entity/register.entity';
import { RegisterRepository } from './repository/register.repository';
import { InMemoryRegisterRepository } from './repository/in-memory/in-memory-register.repository';

// função que agrupa testes, é construída com arrow function
describe('RegisterService', () => {
  let registerService: RegisterService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [], // Add
      controllers: [], // Add
      providers: [
        RegisterService,
        { provide: RegisterRepository, useClass: InMemoryRegisterRepository },
      ], // Add
    }).compile();

    registerService = moduleRef.get<RegisterService>(RegisterService);
  });
  // Create a register:
  // Teste 1: Deve criar um registro com sucesso
  // Teste 2: Deve retornar um erro caso os dados estejam incorretos

  // describe é um agrupador de testes
  describe('Create Register', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2023-09-23'));
    });
    it('should create a register succesfully', async () => {
      // it é a função que vai executar o teste
      const register = new CreateRegisterDTO({
        studentName: 'Luana',
        classDate: new Date('2021-08-01'),
        classQuantity: 1.5,
        hourValue: 50,
      });

      const response = await registerService.create(register);

      expect(response).toBeDefined(); // !== undefined || null
      expect(response).toHaveProperty('id');
      expect(response).toBeInstanceOf(Register);
    });

    it('should transform the student name to uppercase', async () => {
      const register = new CreateRegisterDTO({
        studentName: 'luana',
        classDate: new Date('2021-08-01'),
        classQuantity: 1.5,
        hourValue: 50,
      });
      const response = await registerService.create(register);
      expect(response.studentName).toBe('LUANA');
    });
    it('should return an error if the data is incorrect', async () => {
      const register = new CreateRegisterDTO({
        studentName: 'Luana',
        classDate: new Date('2023-09-24'),
        classQuantity: -1.5,
        hourValue: -50,
      });
      await expect(() => registerService.create(register)).rejects.toThrow();
    });
  });

  // Update a register

  // Delite a register

  //
});
