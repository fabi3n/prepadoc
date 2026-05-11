import { describe, it, expect } from "vitest";
import { XlsxExtractor } from "./XlsxExtractor";
import { readFileSync } from "fs";
import path from "path";

describe("createExtractor", () => {
  it("Extract Xlsx File", async () => {
    const buffer = readFileSync(path.join(__dirname, "fixtures", "sample.xlsx"));
    const file = new File([buffer], "sample.xlsx", { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const extractor = new XlsxExtractor();
    const result = await extractor.extract(file);
    expect(result).toContain("Hello PrepADoc");
  });
});
