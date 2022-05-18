import React from 'react';
import { toast } from 'react-toastify';

const ToDoDocument = ({ document,refetch}) => {
    const { name, description,_id,complete } = document;
    const handleComplete = ()=>{
        const url =`https://apptasktodo.herokuapp.com/to-do/${_id}`
        fetch(url,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount >0){
                refetch()
                toast.success('complete')
            }
        })

    };
    const handleDelete = ()=>{
        const url =`https://apptasktodo.herokuapp.com/to-do/${_id}`
        fetch(url,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                refetch()
                toast.error('deleted')
            }
        })

    }
    return (
        <div className=' col-12 flex justify-end h-10 items-center px-5 bg-slate-400 rounded-lg mt-5 text-black'>
                <h3 className={complete? 'text-xl line-through decoration-emerald-600':' text-xs'}>{name}</h3>
                <p className={complete? 'text-xl line-through decoration-emerald-600':' text-xs'}>{description}</p>
                 <button onClick={()=>handleComplete()} className={ complete? 'btn btn-xs btn-primary mr-2 btn-disabled' : 'btn btn-xs btn-primary mr-2'}>complete</button>
                <button 
                onClick={()=>handleDelete()}
                className='btn btn-xs btn-warning '>delete</button>
        </div>

    );
};

export default ToDoDocument;


