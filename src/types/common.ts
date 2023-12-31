export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface Name {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IAdmin {
  // id: string;
  // name: Name;
  // gender: string;
  // managementDepartment: string;
  // email: string;
  // contactNo: string;
  // emergencyContactNo: string;
  // dateOfBirth: string;
  // bloodGroup: string;
  // designation: string;
  // presentAddress: string;
  // permanentAddress: string;
  // createdAt: string;
  // updatedAt: string;
  // __v: number;
}
