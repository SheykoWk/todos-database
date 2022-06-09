const todosDB = {
    1 : [
        {
            id: 1,
            title: 'Junta equipo de desarrollo',
            description: 'Junta con el equipo para ver la integracion de testing e2e en el class center',
            due_date: '06/17/2022',
            user_id: 1,
            completed: false
        },
        {
            id: 2,
            title: 'All hands con el equipo de academlo',
            description: '',
            due_date: '06/09/2022',
            user_id: 1,
            completed: false
        }
    ],
    2: [
        {
            id: 1,
            title: 'Acabar mi portafolio',
            description: 'agregarle metodo de contacto',
            due_date: '06/17/2022',
            user_id: 2,
            completed: false
        },
        {
            id: 2,
            title: 'mejorar mi linkedin',
            description: 'agregarle metodo de contacto',
            due_date: '06/17/2022',
            user_id: 2,
            completed: false
        }
    ]
}

const getAllTodos = (userId) => {
    return todosDB[userId]
}



module.exports = {
    getAllTodos
}