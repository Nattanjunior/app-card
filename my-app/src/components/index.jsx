import '../components/index.css'
import ImageSofa from '../assets/image2.png'
import GifSofa from '../assets/sofagif.gif'
import Exit from '../assets/Exit.png'
import Deg from '../assets/Vector.png'
import { useState } from 'react'

export default function Card(){

return (
    <>

     <div className='container'>
      <div className='Images'>
        <img src={Deg} alt=""  className='deg'/>
        <img src={ImageSofa} alt="" />
      </div>

       <div className='details'>
        <p className='codigo'>CÓDIGO: 42404</p>
        <h1>Sofá Margot II - Rosé</h1>
        <p className='preco'>R$ 4.000</p>
        <button> ADICIONAR À CESTA</button>
       </div>
     </div> 

    
    </>
)
}