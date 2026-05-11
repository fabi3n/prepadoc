import { Extractor } from "../Extractor";
import * as mammoth from "mammoth";

export class DocxExtractor implements Extractor {
  async extract(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  }
}
