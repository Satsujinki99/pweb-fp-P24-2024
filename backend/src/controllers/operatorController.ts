import { Request, Response } from 'express';
import Operator from '../models/operator';

export const getOperators = async (_req: Request, res: Response) => {
  try {
    const operators = await Operator.find();
    res.status(200).json(operators);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching operators', error });
  }
};

export const addOperator = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const newOperator = new Operator({ name, email });
    await newOperator.save();
    res.status(201).json(newOperator);
  } catch (error) {
    res.status(500).json({ message: 'Error adding operator', error });
  }
};

export const updateOperator = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedOperator = await Operator.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedOperator);
  } catch (error) {
    res.status(500).json({ message: 'Error updating operator', error });
  }
};

export const deleteOperator = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Operator.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting operator', error });
  }
};
