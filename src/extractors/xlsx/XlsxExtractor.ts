import { Extractor } from "../Extractor";
import * as XLSX from "xlsx";

export class XlsxExtractor implements Extractor {
  async extract(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const workbook = XLSX.read(buffer);
    const result = workbook.SheetNames.map((nomFeuille) => `--- Sheet: ${nomFeuille} ---\n${XLSX.utils.sheet_to_csv(workbook.Sheets[nomFeuille]) as string}`).join("\n\n");
    return result;
  }
}
