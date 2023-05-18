import Input from "./Input"
import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseISBN, chooseTitle, chooseAuthor, choosePublisher, chooseLength } from "../redux/slices/RootSlice"

interface BookFormProps {
    isbn?: string[]
}

function BookForm(props: BookFormProps) {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ISBN: ${typeof props.isbn}`);
        console.log(props.isbn);
        console.log(data);
        if (props.isbn && props.isbn.length > 0) {
            server_calls.update(props.isbn[0], data);
            console.log(`Updated: ${ data } ${ props.isbn }`);
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(chooseISBN(data.isbn));
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(choosePublisher(data.publisher));
            dispatch(chooseLength(data.length));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 1000)
        }
        
    }
  return (
    <div>
        <form onSubmit={(handleSubmit(onSubmit))}>
            <div className="flex flex-col align-items-center text-start justify-center">
                <div className="p-1">
                    <label htmlFor="isbn" className="p-1">ISBN</label>
                    <Input {...register('isbn')} name='isbn' placeholder="ISBN" />
                </div>
                <div className="p-1">
                    <label htmlFor="title" className="p-1">Title</label>
                    <Input {...register('title')} name='title' placeholder="Title" />
                </div>
                <div className="p-1">
                    <label htmlFor="author" className="p-1">Author</label>
                    <Input {...register('author')} name='author' placeholder="Author" />
                </div>
                <div className="p-1">
                    <label htmlFor="publisher" className="p-1">Publisher</label>
                    <Input {...register('publisher')} name='publisher' placeholder="Publisher" />
                </div>
                <div className="p-1">
                    <label htmlFor="length" className="p-1">Length</label>
                    <Input {...register('length')} name='length' placeholder="Length" />
                </div>
                <div className="align-items-center p-1 justify-center">
                    <button className="p-1 rounded bg-slate-300">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default BookForm