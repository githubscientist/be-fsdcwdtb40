const todos = [
    {
        "createdAt": "2026-02-18T20:38:44.599Z",
        "title": "Deployment meeting on 19th Feb at 9PM IST",
        "description": "There are few deployment issues that needs to be discussed Right.",
        "isCompleted": true,
        "id": "5"
    },
    {
        "createdAt": "2026-02-19T10:03:04.517Z",
        "title": "Buy Groceries today",
        "description": "Grocery list\n- vegetables\n- fruits\n- eggs",
        "isCompleted": true,
        "id": "6"
    },
    {
        "createdAt": "2026-02-19T02:25:24.042Z",
        "title": "File the income tax returns before Mar 31st",
        "description": "The income tax for the financial year 2024-2025 needs to be filed before Mar 31st.",
        "isCompleted": false,
        "id": "7"
    },
    {
        "createdAt": "2026-02-20T06:18:45.907Z",
        "title": "To Revise Front end before Front end Project ",
        "description": "Before going to Front end Project revision is must",
        "isCompleted": true,
        "id": "8",
        "status": false
    }
];

const todoController = {
    getAllTodos: (req, res) => {
        res.json(todos);
    },
}

module.exports = todoController;