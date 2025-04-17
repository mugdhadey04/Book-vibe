import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // const [allBooks, setAllBooks] = useState([]);
    
    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // },[])

    // const bookPromise = fetch('./booksData.json').then(res => res.json())

    return (
        <div>
           <h1 className='text-center text-3xl p-6'>Books loaded</h1>
           <Suspense fallback={<span>Page loading.....</span>}>
           <div className='lg:grid lg:grid-cols-3 gap-20'>
           {
            data.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
           }
           </div>
           </Suspense>
        </div>
    );
};

export default Books;