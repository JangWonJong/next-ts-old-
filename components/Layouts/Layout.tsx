import React, {ReactNode} from 'react';
import style from '@/styles/Layout.module.css'
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav'

interface Props {
    children? : ReactNode
}

export default function Layout({ children }: Props){
  return (
  <div className={style.container}>
        <Header/>
          <Nav/>
            { children }
        <Footer/>
      </div>
  );
}