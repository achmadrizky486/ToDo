import './TodoCreate.css'

const TodoCreate = (props) => {
    // ------cegah button Submit merefresh halaman---
    const handleSubmit = (event) => {
        event.preventDefault()
        // -------------------------------------

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            /*buat angka random dari 0-100, dan hasilnya
            ditambah 1 agar tidak menemukan angka 0*/

            title: 'Learn'
        }

        props.onCreateTodo(newTodo)
        // console.log(newTodo);
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" />
            <button type='submit'>Add</button>
        </form>
    )
}

export default TodoCreate;