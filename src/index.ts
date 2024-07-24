const input = document.getElementById("input-text") as HTMLInputElement
const submit_form = document.getElementById("task-form") as HTMLFormElement
const task_list = document.getElementById("list") as HTMLDListElement 

function addTask(task: string): void{
    const listItem = document.createElement('li')
    listItem.className = 'flex items-center justify-between p-2 border border-gray-300 rounded mb-2 bg-white shadow-sm'
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'mr-2'

    const taskText = document.createElement('span')
    taskText.textContent = task
    taskText.className = 'flex-1'

    const delete_btn = document.createElement('button')
    delete_btn.textContent = 'DELETE'
    delete_btn.className = 'bg-red-500 text-white rounded px-2 py-1 text-xs font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'    
    delete_btn.addEventListener('click', (e) => {
        task_list.removeChild(listItem)
    })

    listItem.appendChild(checkbox)
    listItem.appendChild(taskText)
    listItem.appendChild(delete_btn)
    
    task_list.appendChild(listItem)
}

submit_form.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = input.value.trim()
    if(task){
        addTask(task)
        input.value=''
    }
})









