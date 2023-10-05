import { IMaterial } from "./material";

export interface IProduct {
  _id: string;
  product_name: string;
  product_desc: string;
  materials_needed: Array<{
    material: IMaterial;
    quantity: number;
  }>;
  quantity: number;
}

export interface IProductPost {
  product_name: string;
  product_desc: string;
  materials_needed: Array<{
    material: string;
    quantity: number;
  }>;
}

export interface IMaterialProductPost {
  material: string;
  quantity: number;
}

export interface ICreateProduct {
  product_id: string;
  materials_needed: Array<{
    material_id: string;
    quantity: number;
  }>;
}
