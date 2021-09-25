export interface MessageData {
    read(lang: string): Promise<string>;
}