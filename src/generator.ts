export namespace DocumentGenerator {
  const fs = require('fs');
  const PDFDocument = require('pdfkit');
  const moment = require('moment');

  const fontFamily: string = 'ArialUnicode';
  const boldFontFamily: string = 'ArialUnicode-Bold';

  export abstract class PDFDocumentGenerator {
    public abstract documentType(): PDFDocument;

    public initializePDFDocument(data): string {
      const dt = this.documentType();

      const doc = new PDFDocument({ size: 'A4', margin: 50 });
      doc.registerFont(
        'ArialUnicode',
        require('path').resolve(
          __dirname,
          '../../public/assets/fonts/ArialUnicode.ttf',
        ),
      );
      doc.registerFont(
        'ArialUnicode-Bold',
        require('path').resolve(
          __dirname,
          '../../public/assets/fonts/ArialUnicode-Bold.ttf',
        ),
      );

      return `PDFDocumentGenerator: ${dt.release(doc, data)}`;
    }
  }

  export class ConfirmationGenerator extends PDFDocumentGenerator {
    public documentType(): PDFDocument {
      return new Confirmation();
    }
  }

  export class InvoiceGenerator extends PDFDocumentGenerator {
    public documentType(): PDFDocument {
      return new Invoice();
    }
  }

  export class Confirmation implements PDFDocument {
    private generateHeader({ doc, data }) {
      doc
        .font(boldFontFamily, 22)
        .fillColor('#444444')
        .text(data.hotel.name, 50, 57)
        .fontSize(10)
        .text(moment(new Date()).format('MMM DD, YYYY'), 200, 62, {
          align: 'right',
        })
        .font(fontFamily, 15)
        .text('Online check in confirmation', 50, 85)
        .moveDown();
    }

    public release(doc?, data?): any {
      console.log(data.guest.firstName);

      this.generateHeader({ doc, data });

      doc.end();
      doc.pipe(fs.createWriteStream('./public/documents/confirmation.pdf'));

      return '{Result of the Confirmation}';
    }
  }

  export class Invoice implements PDFDocument {
    public release(doc?, data?): any {
      return '{Result of the Invoice. This is stub for futher creation other types of pdf documents}';
    }
  }

  export interface PDFDocument {
    release(): any;
  }

  export function generatePDFDocument(
    generator: PDFDocumentGenerator,
    data?,
  ): void {
    console.log(generator.initializePDFDocument(data));
  }
}
