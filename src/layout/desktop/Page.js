import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Page =({children}) =>{
    return(
        <>
            
            <Header/>
            <main className="main-content">{children}</main>
            <Footer />
        </>
    )
}

export default Page;