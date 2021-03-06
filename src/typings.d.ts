import PDFDocument from 'pdfkit';

export type PDFDocument = typeof PDFDocument;

export type Hotel = {
  name: string;
};

export type Booking = {
  checkedInAt: string;
  checkedOutAt: string;
};

type Guest = {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  documentType: string;
  documentNumber: string;
  documentPhoto: string;
};

export type formData = {
  hotel: Hotel;
  booking: Booking;
  guest: Guest;
};

declare module '*.json' {
  export const value: formData;
  export default value;
}
