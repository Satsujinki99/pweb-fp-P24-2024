import PDFDocument from 'pdfkit';
import fs from 'fs';

export const generatePDF = (data: any, filename: string) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filename));

  doc.fontSize(20).text('Borrow Summary Report', { align: 'center' });
  doc.moveDown();

  data.forEach((record: any, index: number) => {
    doc.text(`${index + 1}. ${record.item_name} - Borrower: ${record.borrower_name}`, { align: 'left' });
    doc.moveDown();
  });

  doc.end();
};
