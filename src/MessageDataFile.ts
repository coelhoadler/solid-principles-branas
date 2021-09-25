import { MessageData } from "./MessageData";
import fs from 'fs/promises'

export class MessaDataFile implements MessageData {
    
    async read(lang: string ): Promise<string> {
        return await (await fs.readFile(`./messages/${lang}.txt`, 'utf8'))        
    };

}