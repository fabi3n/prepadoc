export interface Anonymizer {
  anonymize(text: string): Promise<string>;
}
