export interface Extractor {
  extract(file: File): Promise<string>;
}
