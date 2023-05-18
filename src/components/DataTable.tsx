import Modal from "./Modal";
import { server_calls } from "../api/server";
import { useGetData } from "../customHooks/FetchData";
import { useState } from "react";
import { DataGrid, GridColDef} from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'isbn', headerName: 'ISBN', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'publisher', headerName: 'Publisher', flex: 1 },
    { field: 'length', headerName: 'Length', flex: 1 },
    
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { bookData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([]);    

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const deletData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`);
        setTimeout( () => {window.location.reload() }, 1000);
        
    }

    return (
        <>
            <Modal 
                isbn={selectionModel}
                open={open}
                onClose={handleClose}
            />
            {/* control buttons */}
            <div className="flex flex-row">
                <div>
                    <button 
                        className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                        onClick={() => handleOpen()}
                    >
                        Add a Book
                    </button>
                    <button 
                        className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                        onClick={handleOpen}
                    >
                        Update a Book
                    </button>
                    <button 
                        className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                        onClick={deletData}
                    >
                        Delete a Book
                    </button>
                </div>
            </div>

            {/* data table */}

            <div className={ open ? "hidden" : "container mx-5 my-5 flex flex-col" }
                style={{ height: 400, width: '100%'}}
            >
                <h2 className="p-3 bg-slate-300 my-3 rounded">My Books</h2>
                <DataGrid
                    rows={bookData}
                    columns={columns}
                    getRowId={(row) => row.isbn}
                    rowsPerPageOptions={[5]}
                    checkboxSelection={true}
                    onSelectionModelChange={ (item:any) => {
                        setSelectionModel(item)
                    }}
                />
            </div>
        </>
    )
}

export default DataTable