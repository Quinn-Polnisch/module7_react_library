import BookForm from "./BookForm"

type Props = {
    isbn?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if ( !props.open ) return null;
  return (
    <div
        className="fixed w-full h-full flex overflow-auto z-1 justify-center align-middle"
        onClick={ props.onClose }
    >
        <div 
            className="max-w-600px w-2/5 fixed flex z-1 bg-white shadow-xl rounded"
            onClick={(e) => {
                e.stopPropagation()
            }}
        >
            <div className="w-full flex flex-col">
                <div className="flex flex-row space-apart">
                    <p className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                        onClick={props.onClose}>X</p>
                </div>
                <div className="flex p-3 m-5 flex-col items-center text-center">
                    <BookForm isbn={ props.isbn } />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal