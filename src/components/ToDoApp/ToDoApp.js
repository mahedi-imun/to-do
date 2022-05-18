import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import ToDoDocument from './ToDoDocument';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToDoApp = () => {
    const { register, handleSubmit, reset } = useForm();
    const { data: documents, isLoading,refetch } = useQuery('todo', () => fetch('https://apptasktodo.herokuapp.com/to-do').then(res => res.json()))
    if (isLoading) {
        return <p>Loading..</p>
    }
    const onSubmit = data => {
        const docs = {
            name: data.taskName,
            description: data.description
        }
        fetch('https://apptasktodo.herokuapp.com/to-do', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(docs)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset()
                    refetch()
                }
            })

    };
 
    return (
        <div className='flex justify-center mt-5'>
            <div className="card w-3/4 bg-base-100 shadow-xl">
                <h3 className=' text-2xl font-bold'>To-do</h3>
                <div className="card-body">
                    <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                        <input required type="text"
                            {...register("taskName")}
                            placeholder=" task name" class="input input-bordered input-success w-full " />
                        <textarea required
                            {...register("description")}
                            class="textarea textarea-success w-full mt-5 " placeholder="description"></textarea>
                        <input type='submit' value='add' class="btn btn-sm float-left mt-5 " />
                    </form>

                    <div className='grid'>

                        {
                            documents.map((document, index) => <ToDoDocument
                                index={index}
                                key={document._id}
                                document={document}
                                refetch={refetch}
                            >
                            </ToDoDocument>)
                        }

                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default ToDoApp;