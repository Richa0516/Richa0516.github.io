import Image from 'next/image';
import { ArrowUpRight, Github, Trophy, Check } from 'lucide-react';
import type { Project } from '@/types';
function Link({href,children}:{href:string;children:React.ReactNode}) {return <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={16}/><span className="sr-only">（新しいタブで開く）</span></a>}
export function ProjectCard({project:p,index}:{project:Project;index:number}) {return <article className={'project-card project-'+index}>
  <div className={p.image?'project-art has-image':'project-art'}>{p.image?<Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 700px) 100vw, 380px"/>:<span>{p.name}</span>}</div>
  <div className="project-content">
    <div className="project-meta"><span>{p.date}</span><span className="award-badge"><Trophy size={16}/>{p.award}{!p.awardVerified?'（正式表記確認中）':''}</span></div>
    <p className="event">{p.event}{p.team?' / '+p.team:''}</p><h3>{p.name}</h3><p className="project-description">{p.description}</p>
    <section className="my-role" aria-label={p.name+'の個人担当'}><h4>My Role <span>個人担当</span></h4>{p.personalRole?<><p className="role-title">{p.personalRole.title}</p><ul>{p.personalRole.items.map(item=><li key={item}><Check size={16}/><span>{item}</span></li>)}</ul></>:<p>確認後に追記予定</p>}</section>
    <details className="project-details"><summary>作品の主な機能</summary><ul>{p.features.map(f=><li key={f}>{f}</li>)}</ul></details>
    <p className="stack-label">チーム全体の使用技術</p><div className="tags">{p.technologies.map(t=><span key={t}>{t}</span>)}</div>
    <div className="project-links"><Link href={p.github}><Github size={17}/>ソースコード</Link>{p.demo&&<Link href={p.demo}>デモ動画</Link>}</div>
  </div>
  {!!p.screenshots?.length&&<div className="project-screenshots">{p.screenshots.map(s=><figure key={s.src}><a href={s.src} target="_blank" rel="noopener noreferrer" aria-label={s.alt+'を拡大（新しいタブ）'}><Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(max-width:700px) 100vw, 600px"/></a>{s.caption&&<figcaption>{s.caption}</figcaption>}</figure>)}</div>}
</article>}
