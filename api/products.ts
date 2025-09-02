import dbData from './db.json';
import type { ProductType } from '../src/types';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface DbType {
  products: ProductType[];
}

const db: DbType = dbData;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const products = db.products;

    const { id } = req.query;

    if (id) {
      const product = products.find((p) => p.id === id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: `Product with id ${id} not found` });
      }
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
