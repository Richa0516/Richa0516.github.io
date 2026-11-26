'use client';
import {useState} from 'react';
import {Sun,Moon,Menu,X} from 'lucide-react';
import {navigation} from '@/data/profile';
export function Header(){const [open,setOpen]=useState(false);const [notice,setNotice]=useState('');function toggleTheme(){const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch{}setNotice(t==='dark'?'ダークモードに切り替えました':'ライトモードに切り替えました')}
return <header className="header"><a className="brand" href="#home" aria-label="トップへ">km<span>.</span></a><nav className={open?'nav open':'nav'} aria-label="メインナビゲーション">{navigation.map(([id,label])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="header-actions"><button className="icon-button theme" onClick={toggleTheme} aria-label="カラーテーマを切り替える"><Sun className="sun" size={19}/><Moon className="moon" size={19}/></button><button className="icon-button mobile-menu" aria-label={open?'メニューを閉じる':'メニューを開く'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div><span role="status" className="sr-only">{notice}</span></header>}
