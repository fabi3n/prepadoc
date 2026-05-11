import { describe, it, expect } from "vitest";
import { createExtractor } from "./createExtractor";
import { PdfExtractor } from "./pdf/PdfExtractor";
import { DocxExtractor } from "./docx/DocxExtractor";

describe("createExtractor", () => {
  it("File type not supported ", () => {
    const file = new File([], "sample.pdf", { type: "application/jojo" });
    expect(() => createExtractor(file)).toThrow(`Ce type de fichier ${file.type} n'est pas pris en charge.`);
  });

  it("PDF Extractor created", () => {
    const file = new File([], "sample.pdf", { type: "application/pdf" });
    const monExtractor = createExtractor(file);
    expect(monExtractor).toBeInstanceOf(PdfExtractor);
  });

  it("Docx Extractor created", () => {
    const file = new File([], "sample.docx", { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const monExtractor = createExtractor(file);
    expect(monExtractor).toBeInstanceOf(DocxExtractor);
  });
});
