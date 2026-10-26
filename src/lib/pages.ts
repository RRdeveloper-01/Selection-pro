import fs from 'node:fs';
import path from 'node:path';
export const pageHtml = (name: string) => fs.readFileSync(path.join(process.cwd(), 'src/content', `${name}.html`), 'utf8');
