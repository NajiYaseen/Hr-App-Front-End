export interface IEmployee {
  id: string;
  name: string;
  email: string;
  address: string;
  departmentId: string;
}

export interface ILeave {
  leaveID: string;
  type: string;
  leaveFrom: string;
  leaveTo: string;
  note: string;
  numberOfDays: string;
}

export interface IClaim {
  expenseId: string;
  date: string;
  description: string;
  total: string;
  status: string;
  expenseClaimDetail: any[];
}