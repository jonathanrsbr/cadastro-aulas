type RegisterProps = {
  id: number;
  studentName: string;
  classDate: Date;
  classQuantity: number;
  hourValue: number;
};

export class Register {
  readonly id: number;
  readonly studentName: string;
  readonly classDate: Date;
  readonly classQuantity: number;
  readonly hourValue: number;

  constructor(props: RegisterProps) {
    this.id = props.id;
    this.studentName = props.studentName;
    this.classDate = props.classDate;
    this.classQuantity = props.classQuantity;
    this.hourValue = props.hourValue;
  }
}
