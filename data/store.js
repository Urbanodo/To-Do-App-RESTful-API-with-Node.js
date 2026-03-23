let tasks = [];
let idCounter = 1;

module.exports = {
    getTasks: () => tasks,

    getTaskById: (id) => tasks.find(t => t.id === id),

    addTask: (title) => {
        const newTask = {
            id: idCounter++,
            title,
            completed: false
        };
        tasks.push(newTask);
        return newTask;
    },

    updateTask: (id, data) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return null;

        if (data.title !== undefined) task.title = data.title;
        if (data.completed !== undefined) task.completed = data.completed;

        return task;
    },

    deleteTask: (id) => {
        const index = tasks.findIndex(t => t.id === id);
        if (index === -1) return false;

        tasks.splice(index, 1);
        return true;
    }
};