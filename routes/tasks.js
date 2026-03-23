const url = require('url');
const controller = require('../controllers/tasksController');

const handleRoutes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    // GET /tasks
    if (method === 'GET' && path === '/tasks') {
        return controller.getAllTasks(req, res);
    }

    // GET /tasks/:id
    if (method === 'GET' && path.startsWith('/tasks/')) {
        const id = parseInt(path.split('/')[2]);
        return controller.getTask(req, res, id);
    }

    // POST /tasks
    if (method === 'POST' && path === '/tasks') {
        return controller.createTask(req, res);
    }

    // PUT /tasks/:id
    if (method === 'PUT' && path.startsWith('/tasks/')) {
        const id = parseInt(path.split('/')[2]);
        return controller.updateTask(req, res, id);
    }

    // DELETE /tasks/:id
    if (method === 'DELETE' && path.startsWith('/tasks/')) {
        const id = parseInt(path.split('/')[2]);
        return controller.deleteTask(req, res, id);
    }

    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
};

module.exports = handleRoutes;

if (method === 'GET' && path === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: 'API is running' }));
}