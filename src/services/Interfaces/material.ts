export interface IMaterial {
  _id: string;
  material_name: string;
  min_quantity: number;
  quantity: number;
  unit_of_measure: "kg" | "L" | "m" | "m²";
}
