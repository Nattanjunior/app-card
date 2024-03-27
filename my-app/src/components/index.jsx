import '../components/index.css'
import ImageSofa from '../assets/image2.png'
import GifSofa from '../assets/sofagif.gif'
import Exit from '../assets/Exit.png'
import Deg from '../assets/Vector.png'
import { useState, useTransition } from 'react'

export default function Card(){
    const [imageStatic, setImageStatic] = useState(true)
    const [gif,setGif] = useState(false)
    const [style,setStyle] = useState({})
    const handleGifImage = ()=>{
        setImageStatic(false)
        setGif(true)
        setStyle({
            width:"450px"
        })
        if(gif){
        setImageStatic(true)
        setGif(false)
        }
    }

return (
    <>

     <div className='container'>
      <div className='Images'>
        <img src={imageStatic? Deg: Exit} alt=""  className='deg' onClick={handleGifImage} />
        <img src={imageStatic? ImageSofa: GifSofa} alt=""style={imageStatic? {} : style} />
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