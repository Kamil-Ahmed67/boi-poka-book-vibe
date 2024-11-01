import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToWishList } from "../../utility/addToDB";

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const selectedBook = data.find(book => book.bookId === id)
    const { bookId: selectedBokId, image } = selectedBook;
    const handleMarkAsRead = (id) => {
        /**
         * 1.understand what to store or save=>bookId
         * 2.Where to store:database
         * 3.array,list,collection
         * 4.check if the book already in the readList or not
         * 5.if not add the book to the array/list/collection
         * 6.if yes do not add the book
         */
        addToStoredReadList(id);
    }
    const handleWishList=(id)=>{
        addToWishList(id);
    }
    return (
        <div className="py-12">
            <h2>Book Details:{selectedBokId}</h2>
            <img className="w-36" src={image} alt="" srcset="" />
            <br />
            <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline mr-6 btn-accent">Mark as Read</button>
            <button onClick={()=> handleWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
        </div>
    );
};

export default BookDetail;