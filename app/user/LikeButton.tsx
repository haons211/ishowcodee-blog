'use client'
import {useState} from 'react'


export default function LikeButton() {
    const [liked, setLiked] = useState(false)
    // This is a client component
    // It can be used to handle user interactions
    // such as liking a product
    return (
        <button onClick={()=> setLiked(!liked)} className="bg-blue-500 text-white px-4 py-2 rounded">
            {liked ? '❤️ Đã thích' : '🤍 Thích'}
        </button>
    )
}