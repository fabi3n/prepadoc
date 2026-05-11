import { describe, it, expect } from "vitest";
import { PdfExtractor } from "./PdfExtractor";
import { readFileSync } from "fs";
import path from "path";

describe("createExtractor", () => {
  it("Extract PDF File", async () => {
    const buffer = readFileSync(path.join(__dirname, "fixtures", "sample.pdf"));
    const file = new File([buffer], "sample.pdf", { type: "application/pdf" });
    const extractor = new PdfExtractor();
    const result = await extractor.extract(file);
    expect(result).toContain("Hello PrepADoc");
  });
});
