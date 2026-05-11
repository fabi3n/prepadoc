import { Extractor } from "../Extractor";
import { parse } from "csv-parse/sync";

export class CsvExtractor implements Extractor {
  async extract(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const parser = parse(buffer, { bom: true });
    const result = parser.map((row) => row.join(",")).join("\n");
    return result;
  }
}
