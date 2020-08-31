export namespace DocumentGenerator {
  export abstract class PDFDocumentGenerator {
    public abstract factoryMethod(): PDFDocument;

    public someOperation(): string {
      const documentType = this.factoryMethod();
      return `PDFDocumentGenerator: ${documentType.operation()}`;
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
    public operation(): string {
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

  export function generatePDFDocument(generator: PDFDocumentGenerator) {
    // ...
    console.log(generator.someOperation());
    // ...
  }
}
