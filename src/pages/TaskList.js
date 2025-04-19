import React from 'react';

function TaskList() {
    const tasks = [
        { id: 1, name: 'Finish React Project' },
        { id: 2, name: 'Clean the house' },
        { id: 3, name: 'Buy groceries' },
    ];

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
