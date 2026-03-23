const store = require('../data/store');
const { sendJSON, parseBody } = require('../utils/helpers');

// GET /tasks
const getAllTasks = (req, res) => {
    sendJSON(res, 200, store.getTasks());
};

// GET /tasks/:id
const getTask = (req, res, id) => {
    const task = store.getTaskById(id);

    if (!task) {
        return sendJSON(res, 404, { error: 'Task not found' });
    }

    sendJSON(res, 200, task);
};

// POST /tasks
const createTask = (req, res) => {
    parseBody(req, (err, data) => {
        if (err) return sendJSON(res, 400, { error: err });

        if (!data.title) {
            return sendJSON(res, 400, { error: 'Title is required' });
        }

        const newTask = store.addTask(data.title);
        sendJSON(res, 201, newTask);
    });
};

// PUT /tasks/:id
const updateTask = (req, res, id) => {
    parseBody(req, (err, data) => {
        if (err) return sendJSON(res, 400, { error: err });

        const updated = store.updateTask(id, data);

        if (!updated) {
            return sendJSON(res, 404, { error: 'Task not found' });
        }

        sendJSON(res, 200, updated);
    });
};

// DELETE /tasks/:id
const deleteTask = (req, res, id) => {
    const success = store.deleteTask(id);

    if (!success) {
        return sendJSON(res, 404, { error: 'Task not found' });
    }

    res.writeHead(204);
    res.end();
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};