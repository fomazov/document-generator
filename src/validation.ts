import { PDFDocument, formData } from './typings';

export interface General {
  release: (a?: PDFDocument, b?: formData) => string | never;
}

export interface Hr {
  doc: PDFDocument;
  y: number;
  color?: string;
  lineWidth?: number;
  length?: number;
}

export interface Header {
  doc: PDFDocument;
  hotelName: string;
}

export interface BookingInfo {
  doc: PDFDocument;
  checkedInAt: string;
  checkedOutAt: string;
  yValue: number;
}

export interface DocumentPhoto {
  doc: PDFDocument;
  documentPhoto: string;
}
