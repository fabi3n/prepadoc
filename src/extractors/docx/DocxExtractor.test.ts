import { describe, it, expect } from "vitest";
import { DocxExtractor } from "./DocxExtractor";
import { readFileSync } from "fs";
import path from "path";

describe("createExtractor", () => {
  it("Extract Docx File", async () => {
    const buffer = readFileSync(path.join(__dirname, "fixtures", "sample.docx"));
    const file = new File([buffer], "sample.docx", { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const extractor = new DocxExtractor();
    const result = await extractor.extract(file);
    expect(result).toContain("Hello PrepADoc");
  });
});
