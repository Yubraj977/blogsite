import React from 'react'
import img from '../assets/react.svg'
import char from '../assets/char.jpg'
function Post() {
  return (
   <div className='w-full lg:w-4/6 mt-16 font-poppi'>
   <div className='top flex gap-2'>
   <div className='profile border h-6 w-6 rounded-full border-brown-200'><p><img src={img} alt="" /></p></div>

    <div className='user font-sans font-bold'><p>Yubraj Khatri</p></div>
    <div className='Date opacity-50'><p >jan 9</p></div>
   </div>

   <div className='middle mt-2 flex gap-2'>
    <div className="left mr-16">
        <div className="title font-[inherit]"><h1>The More You Love Yourself, the Less You Will Need Others To.</h1></div>
        <div className="discription  hidden lg:block font-serif"><p>There was a guy I knew in university. He was always in good spirits and made the most of any situation thrown at him. In all the time I spent around him, I never once caught sight of him complaining about anything. He was so laid back and easy to get along with.</p></div>
        <div className='last flex  justify-between mt-2'>
            <div className="left flex gap-2">
            <div className="category bg-slate-200  border rounded-full p-1">self love</div>
            <div className="min read">5 min read</div>
             </div>
            <div className="right flex gap-2 ">
            <div className="save "><p className='text-2xl'><ion-icon name="bookmark-outline"></ion-icon></p></div>
            <div className="ignore"><p className='text-2xl'><ion-icon name="remove-circle-outline"></ion-icon></p></div>
            <div className="more"><p className='text-2xl'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></p></div>
            </div>

   </div>

    </div>
    <div className="right  w-60"><img src={char} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
   </div>


  
   </div>
  )
}

export default Post