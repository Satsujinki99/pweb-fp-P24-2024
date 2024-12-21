import { Request, Response } from 'express';
import { 
    createBorrowRecord, 
    fetchAllEquipment, 
    fetchBorrowedItems 
} from '../services/borrowService';

// Form Peminjaman Barang
export const bookEquipment = async (req: Request, res: Response) => {
    try {
        const data = await createBorrowRecord(req.body);
        res.status(201).json({ success: true, message: "Borrow record created", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create record", error });
    }
};

// Data Semua Barang
export const getAllEquipment = async (req: Request, res: Response) => {
    try {
        const data = await fetchAllEquipment();
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch equipment", error });
    }
};

// Data Barang yang Dipinjam
export const getBorrowedItems = async (req: Request, res: Response) => {
    try {
        const data = await fetchBorrowedItems();
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch borrowed items", error });
    }
};
