import db from '../utils/db-connection';

export const createBorrowRecord = async (borrowData: any) => {
    // Insert logic to create borrow record in database
    const [result] = await db.query('INSERT INTO borrow SET ?', [borrowData]);
    return result;
};

export const fetchAllEquipment = async () => {
    // Fetch all equipment data
    const [rows] = await db.query('SELECT * FROM equipment');
    return rows;
};

export const fetchBorrowedItems = async () => {
    // Fetch borrowed items data
    const [rows] = await db.query('SELECT * FROM borrow');
    return rows;
};
