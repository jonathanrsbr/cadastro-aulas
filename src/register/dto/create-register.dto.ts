import {
  IsString,
  MinLength,
  IsDate,
  MaxDate,
  IsNumber,
  Min,
} from 'class-validator';

type CreateRegisterDTOProps = {
  studentName: string;
  classDate: Date;
  classQuantity: number;
  hourValue: number;
};

export class CreateRegisterDTO {
  @IsString()
  @MinLength(3)
  studentName: string;

  @IsDate()
  @MaxDate(() => new Date())
  classDate: Date;

  @IsNumber()
  @Min(1)
  classQuantity: number;

  @IsNumber()
  @Min(0)
  hourValue: number;

  constructor(props: CreateRegisterDTOProps) {
    Object.assign(this, props);
  }
}
