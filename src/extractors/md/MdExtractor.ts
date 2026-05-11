import { Extractor } from "../Extractor";

export class MdExtractor implements Extractor {
  async extract(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const result = buffer.toString("utf-8");
    return result;
  }
}
