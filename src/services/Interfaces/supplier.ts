export interface ISupplier {
  _id: string;
  supplier_name: string;
  UID: number;
  VAT: number;
  phone_number: string;
  contact_person: string;
  email_adress: string;
  starting_date: string;
  ending_date: string;
}

export interface ISupplierPost {
  supplier_name: string;
  UID: number | null;
  VAT: number | null;
  phone_number: string;
  contact_person: string;
  email_adress: string;
  starting_date: string;
}
