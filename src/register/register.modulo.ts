import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.crontroller';

@Module({
  imports: [],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
