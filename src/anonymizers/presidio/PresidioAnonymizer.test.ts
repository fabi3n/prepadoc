import { describe, it, expect, vi, beforeEach } from "vitest";
import { PresidioAnonymizer } from "./PresidioAnonymizer";

describe("PresidioAnonymizer", () => {
  beforeEach(() => {
    global.fetch = vi.fn(); // reset avant chaque test
  });

  it("anonymise un texte", async () => {
    // ici on dit ce que fetch retourne pour CE test
    (global.fetch as ReturnType<typeof vi.fn>)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [{ entity_type: "PERSON", start: 0, end: 8, score: 0.85 }],
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          text: "<PERSON> lives in <LOCATION>",
          items: [
            { start: 18, end: 28, entity_type: "LOCATION", text: "<LOCATION>", operator: "replace" },
            { start: 0, end: 8, entity_type: "PERSON", text: "<PERSON>", operator: "replace" },
          ],
        }),
      });

    const anonymizer = new PresidioAnonymizer();
    const result = await anonymizer.anonymize("John Doe lives in Paris");

    expect(result).toBe("<PERSON> lives in <LOCATION>");
  });

  it("gère les erreurs d'analyse", async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      statusText: "Internal Server Error",
    });

    const anonymizer = new PresidioAnonymizer();

    await expect(anonymizer.anonymize("John Doe lives in Paris")).rejects.toThrow("Failed to analyze text: Internal Server Error");
  });
});
