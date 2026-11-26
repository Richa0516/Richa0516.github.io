import type { Metadata } from 'next';
import { site } from '@/lib/site';
import './globals.css';
export const metadata: Metadata = { metadataBase:new URL(site.url),title:site.title,description:site.description,alternates:{canonical:'/'},openGraph:{title:site.title,description:site.description,url:site.url,type:'website',locale:site.locale,images:[{url:'/images/og.png',width:1200,height:630,alt:'Keita Matsui — AI & Software Engineering'}]},twitter:{card:'summary_large_image',title:site.title,description:site.description,images:['/images/og.png']},icons:{icon:'/icon.svg'} };
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="ja" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:`try{let t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch{}`}}/>{children}</body></html>}
