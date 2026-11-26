import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {return {rules:{userAgent:'*',allow:'/'},sitemap:'https://richa0516.github.io/sitemap.xml'};}
