import React, {ReactNode} from 'react';
import style from '@/styles/Layout.module.css'
import Header from './Header';
import Footer from './Footer';

interface Props {
    children? : ReactNode
}

export default function Layout({ children }: Props){
  return (
  <div className={style.container}>
        <Header/>
            { children }
        <Footer/>
      </div>
  );
}