import fs from 'fs';
import path from 'path';

export default function Page(){
  const html = fs.readFileSync(path.join(process.cwd(),'app','page.html'),'utf8');
  const body = html.split('<body')[1]?.split('</body>')[0]?.replace(/^[^>]*>/,'') || html;
  return <div dangerouslySetInnerHTML={{__html: body}} />;
}
