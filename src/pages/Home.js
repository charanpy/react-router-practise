import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import Fr from '../components/Fr';
export default function Home() {
    return (
        <div>
           <Hero hero="defaultHero">
               <Banner title="Luxurious rooms" subtitle="deluxe rooms starts at $200">
                   <Link to="/rooms" className="btn-primary">
                       Rooms
                   </Link>
               </Banner>
           </Hero>
           <Services />
         <Fr/>
        </div>
    )
}
