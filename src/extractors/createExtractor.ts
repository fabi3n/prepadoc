import { Extractor } from "./Extractor";
import { PdfExtractor } from "./pdf/PdfExtractor";
import { DocxExtractor } from "./docx/DocxExtractor";

export function createExtractor(file: File): Extractor {
  if (file.type === "application/pdf") {
    return new PdfExtractor();
  } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    return new DocxExtractor();
  } else {
    throw new Error(`Ce type de fichier ${file.type} n'est pas pris en charge.`);
  }
}
