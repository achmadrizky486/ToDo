import './TodoCreate.css'

const TodoCreate = (props) => {
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
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" />
            <button type='submit'>Add</button>
        </form>
    )
}

export default TodoCreate;