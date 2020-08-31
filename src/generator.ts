export namespace DocumentGenerator {
  export abstract class PDFDocumentGenerator {
    public abstract factoryMethod(): PDFDocument;

    public someOperation(data): string {
      const documentType = this.factoryMethod();
      return `PDFDocumentGenerator: ${documentType.operation(data)}`;
    }
  }

  export class ConfirmationGenerator extends PDFDocumentGenerator {
    public factoryMethod(): PDFDocument {
      return new Confirmation();
    }
  }

  export class InvoiceGenerator extends PDFDocumentGenerator {
    public factoryMethod(): PDFDocument {
      return new Invoice();
    }
  }

  export class Confirmation implements PDFDocument {
    public operation(data): string {
      console.log(data.guest.firstName);
      return '{Result of the Confirmation}';
    }
  }

  export class Invoice implements PDFDocument {
    public operation(): string {
      return '{Result of the Invoice. This is stub for futher creation other types of pdf documents}';
    }
  }

  export interface PDFDocument {
    operation(): string;
  }

  export function generatePDFDocument(generator: PDFDocumentGenerator, data?) {
    // ...
    console.log(generator.someOperation(data));
    // ...
  }
}
