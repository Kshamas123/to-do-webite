document.querySelector('.add_task').addEventListener('click',function(e){
    const ele=document.querySelector('.content')
    if(ele.style.display === 'none'|| ele.style.display === '')
    ele.style.display = 'block';

})
document.querySelector('.task_submit').addEventListener('click',function(e){
    const eve=document.querySelector('.task_content')
    const tasksDiv = document.createElement('div');
    const taskList = document.querySelector('.task-list');
    tasksDiv.className="tasks"
    tasksDiv.textContent = eve.value;
    taskList.appendChild(tasksDiv);
    const ele = document.querySelector('.content');
    ele.style.display = 'none';
    eve.value = "";
})


document.querySelector('.task-list').addEventListener('click',function(e){
    e.target.style.backgroundColor='red';
})

document.querySelector('.cancel').addEventListener('click', function(e) {
    const alltasks = document.querySelectorAll('.tasks');
    alltasks.forEach(task => {
        const taskStyle = window.getComputedStyle(task);
        if (taskStyle.backgroundColor === 'rgb(255, 0, 0)') {
            // Change the background color to the new color
            task.style.backgroundColor = 'rgb(246, 169, 169)';
        }
    });
});

document.querySelector('.delbut').addEventListener('click', function(e) {
    const alltasks = document.querySelectorAll('.tasks');
    alltasks.forEach(task => {
        const taskStyle = window.getComputedStyle(task);
        if (taskStyle.backgroundColor === 'rgb(255, 0, 0)') {
            // Change the background color to the new color
            task.remove()
        }
    });
});