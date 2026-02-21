import React from 'react'
import { Notebook, NotebookIcon } from 'lucide-react'
import { Link } from 'react-router'



const BookNotFound = () => {

  return (
    <div className='flex flex-col items-center justify-center py-16 space-y6 max-w-md mx-auto text-center'>
        <div className='bg-primary/10 rounded-full p-8'>
        <NotebookIcon className='size-10 text-primary' />
            </div>

            <h3 className='text-2xl font-bold'>No Books Yet</h3>
            <p className='text-base-content/70'>
            Ready to add books? Add first book to the BOOKSTORE</p>

            <Link to='/create' className='btn btn-primary'>Add First Book to the Book Store</Link>
            
      
    </div>
  )
}

export default BookNotFound
