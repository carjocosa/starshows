import fs from 'fs';
import path from 'path';

export default function Page(){
  try{
    const p = path.join(process.cwd(),'app','page.html');
    const html = fs.existsSync(p) ? fs.readFileSync(p,'utf8') : '';
    const body = html.split('<body')[1]?.split('</body>')[0]?.replace(/^[^>]*>/,'') || html;
    if(body) return <div dangerouslySetInnerHTML={{__html: body}} />;
  }catch{}
  return <div className="p-10 text-center">Starshows — cargando...</div>;
}
