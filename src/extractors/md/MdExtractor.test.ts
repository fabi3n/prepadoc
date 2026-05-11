import { describe, it, expect } from "vitest";
import { MdExtractor } from "./MdExtractor";
import { readFileSync } from "fs";
import path from "path";

describe("createExtractor", () => {
  it("Extract Txt File", async () => {
    const buffer = readFileSync(path.join(__dirname, "fixtures", "sample.md"));
    const file = new File([buffer], "sample.md", { type: "text/plain" });
    const extractor = new MdExtractor();
    const result = await extractor.extract(file);
    expect(result).toContain("Hello PrepADoc");
  });
});
