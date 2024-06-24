import React, { useState } from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";

const Assistant = () => {

    const [open, setOpen] = useState(false);
    const [allSelected, setAllSelected] = useState(false);
    const [grammarSelected, setGrammarSelected] = useState(false);
    const [recommendationsSelected, setRecommendationsSelected] = useState(false);

    // console.log('open :', open)

    // function handleClick(event) {
    //     console.log('event :', event)
    // }

    // document.addEventListener("click", handleClick);
    
  return (
    <div>
        <div className={ `ml-10 bg-slate-50 h-screen pt-8 ${open ? 'w-[700px]' : 'w-30'} transition-all duration-1600 `}>        
            <div className='flex '>
                <BsArrowRightShort className={`relative right-3 bg-white text-dark-purple text-3xl 
                    rounded-full border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`} 
                    onClick={() => setOpen(!open)} />
                <h1 className={!open && 'hidden'} ><strong>Assistant</strong></h1>
                <p className={`${open && 'hidden'} mr-2 border-2 w-20 rounded-3xl text-center`}>00/100</p>
            </div>
            
            <div className= {`${!open && 'hidden'} flex mt-10 text-slate-500`}>
                <h6 className='ml-2'>Enter at least 25 words to see score</h6>
            </div>
            
            <div className={`${!open && 'hidden scale-0'} flex mt-2 border-t-2 justify`}>

                <button key='1' className={` ${!open && 'hidden scale-0'} 
                            flex border-[1px] w-auto h-8 p-2 ml-2 mt-2 rounded-2xl justify-center items-center
                            ${ allSelected ? 'bg-purple-200 border-purple-600  shadow-lg' : 'hover:bg-slate-200'}`}
                            onClick={() => {setAllSelected(true); setGrammarSelected(false); setRecommendationsSelected(false)}}
                            >
                                All 
                                <p className='ml-2 text-purple-700'>1</p>
                </button>
                
                <button key='2' className={` ${!open && 'hidden scale-0'} 
                            flex border-[1px]  w-auto h-8 p-2 ml-2 mt-2 rounded-2xl justify-center items-center
                            ${ grammarSelected ? 'bg-red-200 border-red-600 shadow-lg' : 'hover:bg-slate-200'}`}
                            onClick={() => {setAllSelected(false); setGrammarSelected(true); setRecommendationsSelected(false)}}
                            >
                                Grammar 
                                <p className='ml-2 text-red-600'>1</p>
                </button>
                
                <button key='3' className={` ${!open && 'hidden scale-0'} 
                            flex border-[1px]  w-auto h-8 p-2 ml-2 mt-2 rounded-2xl justify-center items-center
                        ${ recommendationsSelected ? 'bg-green-200 border-green-600 shadow-lg' : 'hover:bg-slate-200'}`}
                            onClick={() => {setAllSelected(false); setGrammarSelected(false); setRecommendationsSelected(true)}}
                            >
                                Recommendations
                            <SiTicktick className='ml-2 text-green-500'/>
                </button>
            </div>

            <div className={`m-5 p-5 border-[2px] shadow-lg rounded-lg ${!open && 'hidden scale-0'} `} >
                <h6  className='text-slate-600 mt-2'>Replace with</h6>
                <p className='mt-2'> Lorem ipsum dolor <strong className='text-green-500'>sit amet consectetur,</strong> adipisicing elit. Nemo quis libero quasi saepe ipsa ut pariatur est recusandae.
                        Est saepe corrupti, <strong className='text-red-600'>maxime ipsam </strong>mollitia atque neque <span className='line-through'>similique natus</span> ducimus architecto.</p>
                <p className='mt-5 text-sm'>Lorem ipso dolor sit amet</p>
            </div>


        </div>
    </div>
  )
}

export default Assistant