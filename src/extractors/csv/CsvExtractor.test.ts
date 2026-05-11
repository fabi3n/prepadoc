import { describe, it, expect } from "vitest";
import { CsvExtractor } from "./csvExtractor";
import { readFileSync } from "fs";
import path from "path";

describe("createExtractor", () => {
  it("Extract CSV File", async () => {
    const buffer = readFileSync(path.join(__dirname, "fixtures", "sample.csv"));
    const file = new File([buffer], "sample.scv", { type: "application/csv" });
    const extractor = new CsvExtractor();
    const result = await extractor.extract(file);
    expect(result).toContain("Hello PrepADoc");
  });
});
