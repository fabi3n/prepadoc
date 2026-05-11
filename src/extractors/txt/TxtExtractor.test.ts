import { describe, it, expect } from "vitest";
import { TxtExtractor } from "./TxtExtractor";
import { readFileSync } from "fs";
import path from "path";

describe("createExtractor", () => {
  it("Extract Txt File", async () => {
    const buffer = readFileSync(path.join(__dirname, "fixtures", "sample.txt"));
    const file = new File([buffer], "sample.txt", { type: "text/plain" });
    const extractor = new TxtExtractor();
    const result = await extractor.extract(file);
    expect(result).toContain("Hello PrepADoc");
  });
});
