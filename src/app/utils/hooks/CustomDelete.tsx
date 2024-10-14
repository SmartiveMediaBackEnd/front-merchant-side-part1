import { useState } from "react";

export const UseDeleteItem=()=>{
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
	const [custom_Id, setCustomId] = useState('');


    const handelId=(id:string)=>{
        setCustomId(id);
    }
    const handelDeleteItem = (id:string) => {
		setOpenDeleteDialog(true);
		handelId(id)
	};

	const handelCloseDeleteDialog = () => {
        setCustomId("")
		setOpenDeleteDialog(false);
	};
    const handelOpenDialog=()=>{
        setOpenDeleteDialog(true);  
    }
    return{
        openDeleteDialog,
        custom_Id,
        handelDeleteItem,
        handelCloseDeleteDialog,
        handelId,
        handelOpenDialog
    }

}