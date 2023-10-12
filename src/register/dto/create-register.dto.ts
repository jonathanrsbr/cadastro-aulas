type CreateRegisterDTOProps = {
  studentName: string;
  classDate: Date;
  classQuantity: number;
  hourValue: number;
};

export class CreateRegisterDTO {
  studentName: string;
  classDate: Date;
  classQuantity: number;
  hourValue: number;

  constructor(props: CreateRegisterDTOProps) {
    Object.assign(this, props);
  }
}
