import { Request, Response } from 'express';
import Borrow from '../models/borrow';

export const getBorrows = async (_req: Request, res: Response) => {
  try {
    const borrows = await Borrow.find();
    res.status(200).json(borrows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching borrow records', error });
  }
};

export const addBorrow = async (req: Request, res: Response) => {
  try {
    const { item_name, amount, borrow_date, return_date, borrower_name, officer_name } = req.body;
    const newBorrow = new Borrow({ item_name, amount, borrow_date, return_date, borrower_name, officer_name });
    await newBorrow.save();
    res.status(201).json(newBorrow);
  } catch (error) {
    res.status(500).json({ message: 'Error adding borrow record', error });
  }
};
