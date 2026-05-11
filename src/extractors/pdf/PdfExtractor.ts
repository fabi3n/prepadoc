import { Extractor } from "../Extractor";
import { PDFParse } from "pdf-parse";

export class PdfExtractor implements Extractor {
  async extract(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const parser = new PDFParse({ data: buffer });
    const result = await parser.getText();
    return result.text;
  }
}
