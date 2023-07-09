export interface IMaterial {
  _id?: string;
  material_name: string;
  min_quantity: number | null;
  quantity: number | null;
  unit_of_measure: string;
}
