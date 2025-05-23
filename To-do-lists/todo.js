window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTaskElement(task);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;
        if (!task) {
            alert('Please fill out the task');
            return;
        }

        createTaskElement(task);
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        input.value = '';
    });

    function createTaskElement(task) {
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const tasks_action_el = document.createElement("div");
        tasks_action_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "delete";

        tasks_action_el.appendChild(task_edit_el);
        tasks_action_el.appendChild(task_delete_el);

        task_el.appendChild(tasks_action_el);
        list_el.appendChild(task_el);

        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "edit";
                const index = tasks.indexOf(task);
                tasks[index] = task_input_el.value;
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });
    }
});
//1G7x!Q9m#sT4jP8l^B2kW5vR1n@Z6oY3u*H
