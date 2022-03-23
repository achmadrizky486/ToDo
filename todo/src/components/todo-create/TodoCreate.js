import './TodoCreate.css'
import { useState } from 'react'

const TodoCreate = (props) => {
    const [getInputNewTodo, setInputNewTodo] = useState('')


    // ------cegah button Submit merefresh halaman---
    const handleSubmit = (event) => {
        event.preventDefault()
        // -------------------------------------
        const newTodo = {
            // id: Math.floor(Math.random()) + 1,
            /*buat angka random dari 0-100, dan hasilnya
            ditambah 1 agar tidak menemukan angka 0*/

            id: new Date().valueOf(), //nemu di https://stackoverflow.com/questions/8012002/create-a-unique-number-with-javascript-time
            title: 'Learn'
        }

        props.onCreateTodo(newTodo)
        console.log(newTodo);
    }

    const handleInputNewTodo = (event) => {
        setInputNewTodo(event.target.value)
        console.log(getInputNewTodo)
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputNewTodo} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default TodoCreate;