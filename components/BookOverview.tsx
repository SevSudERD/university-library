import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import BookCover from './BookCover'

const BookOverview = ({
     title, 
     author, 
     genre, 
     rating, 
     total_copies, 
     available_copies, 
     description, 
     color, 
     cover
}: Book) => {
  return (
    <section className='book-overview'>
     <div className='flex flex-1 flex-col gap-5'>
          <h1>{title}</h1>
     
     <div className='book-info'>
          <p>
               By <span className='font-semibold text-light-200'>{author}</span>
          </p>
          <p>
               By <span className='font-semibold text-light-200'>{genre}</span>
          </p>
     <div className='flex flex-row gap-1'>
          <Image 
            src="/icons/star.svg" 
            alt="star" 
            width={16} 
            height={16} 
            unoptimized
          />
          <p>{rating}</p>
     </div>
          <p>
               By <span className='font-semibold text-light-200'>{total_copies}</span>
          </p>
          <p>
               By <span className='font-semibold text-light-200'>{available_copies}</span>
          </p>

     </div>
     <p className='book-description'>{description}</p>
     </div>

     <Button className='book-overview_btn'>
          <Image 
            src="/icons/book.svg" 
            alt='book' 
            width={20}  
            height={20} 
            unoptimized
          />
          <p className='font-bebas-neue text-xl text-dark-100'>Borrow</p>
     </Button>

     <div className='relative flex flex-1 justify-center'>
          <div className='relative'>
               <BookCover 
                 variant="wide" 
                 className="z-10" 
                 coverColor={color} 
                 coverImage={cover} 
               />
          </div>
     </div>
    </section>
  )
}

export default BookOverview
