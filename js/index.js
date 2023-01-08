import { saveTask,onGetTasks } from './firebase.js'

const taskForm = document.getElementById('task-form')
const taskContainer = document.getElementById('task-container')

window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
    let Html=""
    querySnapshot.forEach((doc) => {
        
        Html+=`
        <div class="card card-body mt-2 border-primary">
            <h3>${doc.data().title}</h3>    
            <p>${doc.data().description}</p>
        </div>
        `;
    });
    taskContainer.innerHTML=Html;
});
})

//

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = document.getElementById('title').value
    const description = document.getElementById('description').value

    saveTask(title, description)  

    taskForm.reset()
})