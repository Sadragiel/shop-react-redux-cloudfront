import * as Yup from 'yup';

export type Product = {
  name: string,
  price: number,
  cutieId: string,
  art: string,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
