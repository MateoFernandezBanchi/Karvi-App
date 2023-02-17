import React from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
export const FavoriteButton = ({favorite, setFavorite}) => {
  return (
    <div className='absolute top-5 right-5 bg-white rounded-full p-2 cursor-pointer' onClick={()=> setFavorite(!favorite)}
    data-testid='favorite-button'
    >
        {
            favorite ?
            <AiFillHeart className='text-blue-500 text-lg' /> :
            <AiOutlineHeart className='text-blue-500 text-lg'/>
        }
    </div>
  )
}
