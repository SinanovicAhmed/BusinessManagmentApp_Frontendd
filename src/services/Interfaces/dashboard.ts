export interface ISingleCardData {
  data1: number;
  data2: number;
  description: string;
  title: string;
  icon: JSX.Element;
}

export interface IThreeCardData {
  data1: number;
  data2: number;
  data3: number;
  icon: JSX.Element;
}

export interface IDashboardInfo {
  employeeCount: number;
  employeesWoAccount: number;
  orderCount: number;
  productCount: number;
  productsInStock: number;
  ordersToday: number;
  ordersWeek: number;
  ordersMonth: number;
}
