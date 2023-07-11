import { IMaterial } from "./material";
import { ISupplier } from "./supplier";

export interface IOrder {
  _id: string;
  supplier_id: ISupplier;
  ordered_materials: Array<{
    material_id: IMaterial;
    quantity: number;
  }>;
  order_status: string;
  expected_arrival: Date;
  __v: 0;
}
