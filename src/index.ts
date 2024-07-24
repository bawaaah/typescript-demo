const input = document.getElementById("input-text") as HTMLInputElement
const submit_form = document.getElementById("task-form") as HTMLFormElement
const task_list = document.getElementById("list") as HTMLDListElement 

function addTask(task: string): void{
    const listItem = document.createElement('li')
    listItem.className = "m-1"

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'm-1'

    const taskText = document.createElement('span')
    taskText.textContent = task
    taskText.className = 'm-1'

    const delete_btn = document.createElement('button')
    delete_btn.textContent = 'DELETE'
    delete_btn.className = 'border-solid border-slate-950 border-2 rounded'
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









