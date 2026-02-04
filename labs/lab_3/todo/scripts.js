let tasks = [
  {
    id: 0,
    text: "Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax Learn Ajax ",
    isDone: true,
    isOpen: false,
  },
  {
    id: 1,
    text: "xc",
    isDone: false,
    isOpen: false,
  },
  {
    id: 2,
    text: "qp",
    isDone: false,
    isOpen: false,
  },
];

let inputValue = "";
const taskInput = document.querySelector("#taskInput");
taskInput.addEventListener("input", (e) => {
  inputValue = e.target.value;
  error.innerHTML = "";
});

const error = document.querySelector("#error");

// actions
const addTask = () => {
  if (inputValue.length <= 0) {
    error.innerHTML = "Input value cannot be empty!";
    return;
  }
  tasks = [
    ...tasks,
    {
      id: tasks[tasks.length - 1],
      text: inputValue,
      isDone: false,
    },
  ];
  taskInput.value = "";
  renderTasks();
};

const openTask = (id) => {
  tasks = tasks.map((task) =>
    task.id == id ? { ...task, isOpen: true } : task,
  );
  renderTasks();
};

const doneTask = (id) => {
  tasks = tasks.map((task) =>
    task.id == id ? { ...task, isDone: true } : task,
  );
  renderTasks();
};

const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
};

const renderTasks = () => {
  const tasksContainer = document.querySelector("#tasks");

  let res = "";
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      res += `
    <div
        class="w-full p-2 border-2 border-neutral-300 flex items-start justify-between rounded-sm"
    >
      <p 
        class="mt-0.5 ${task.isOpen ? "" : "line-clamp-3 cursor-pointer"}"
        onclick="openTask(${task.id})"
      >
      ${task.text}
      </p>
      <div class="flex space-x-2">
        <div
          onclick="doneTask(${task.id})"
          class="cursor-pointer px-2 py-0.5 bg-blue-500 text-white rounded-xs ${task.isDone === true ? "bg-neutral-500 pointer-events-none" : "cursor-pointer"}"
        >
          Done
        </div>
        <div
          onClick="deleteTask(${task.id})"
          class="cursor-pointer px-2 py-0.5 bg-red-500 text-white rounded-xs"
        >
          Delete
        </div>
      </div>
    </div>
    `;
    });
  } else {
    res = `
    <p class="text-sm text-center font-medium text-neutral-500">
      It's empty over here :(
    </p>
    `;
  }
  tasksContainer.innerHTML = res;
};
renderTasks();
