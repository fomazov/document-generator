import { DocumentGenerator } from './generator';
import data from './data.json';

//const counter: string = data.hotel.name;
//console.log(counter);

const args: string[] = process.argv.slice(2);
const arg: string = args.toString();

// I use factory pattern to allow generation a few pdf document types in future
switch (arg) {
  case 'confirmation':
    console.log('Application launched in the confirmation generator mode.');
    DocumentGenerator.generatePDFDocument(
      new DocumentGenerator.ConfirmationGenerator(),
      data,
    );
    break;
  case 'invoice':
    console.log('Application launched in the invoice generator mode.');
    DocumentGenerator.generatePDFDocument(
      new DocumentGenerator.InvoiceGenerator(),
      data,
    );
    break;
  default:
    console.log(
      'Please use a single parameter: confirmation or invoice to start this application',
    );
}
