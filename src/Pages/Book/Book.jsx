import React from 'react';
import { IoIosStarOutline } from "react-icons/io";

const Book = ({ singleBook }) => {

    const { bookName, image, author, rating, tags, category, yearOfPublishing } = singleBook;

    return (

        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='p-10 bg-[#F3F3F3] m-9 rounded-xl'>
                <img className='h-[200px] '
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex gap-5 mb-2'>
                {
                    tags.map((tag) => <button className='btn bg-yellow-50 text-green-400 rounded-xl'>{tag}</button>)
                }
                </div>
                <h2 className="text-xl font-medium">
                    {bookName}
                <p className='badge'>Published: {yearOfPublishing}</p>
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-between">
                    <div className="mt-4">{category}</div>
                    <div>
                        <div className="badge mt-4">{rating}</div>
                        <div className="badge mt-4"><IoIosStarOutline size={20} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;