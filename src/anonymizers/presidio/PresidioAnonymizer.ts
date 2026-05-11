import { Anonymizer } from "../anonymizer";

export class PresidioAnonymizer implements Anonymizer {
  async anonymize(text: string): Promise<string> {
    const analyzeResponse = await fetch("http://localhost:5002/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, language: "en" }),
    });

    if (!analyzeResponse.ok) {
      throw new Error(`Failed to analyze text: ${analyzeResponse.statusText}`);
    }

    const analyzedData = await analyzeResponse.json();

    const anonymizedResponse = await fetch("http://localhost:5001/anonymize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, analyzer_results: analyzedData }),
    });

    if (!anonymizedResponse.ok) {
      throw new Error(`Failed to anonymize text: ${anonymizedResponse.statusText}`);
    }

    const anonymizedData = await anonymizedResponse.json();

    return anonymizedData.text;
  }
}
