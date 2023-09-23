import { IMaterial, IMaterialOrderPost } from "./material";
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
}

export interface IOrderDB {
  _id: string;
  supplier_id: string;
  ordered_materials: Array<{
    material_id: string;
    quantity: number;
  }>;
  order_status: string;
  expected_arrival: Date;
}

export interface IOrderStatus {
  id: string;
  status: string;
}

export interface IOrderMaterials {
  material_id: string;
  quantity: number;
}

export interface IOrderPost {
  supplier_id: string;
  order_status: string;
  expected_arrival: string;
  ordered_materials: IMaterialOrderPost[];
}
