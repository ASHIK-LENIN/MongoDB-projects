

const Task = require('../Models/task')
const asyncWrapper = require('../MiddleWare/async')
const { createCustomError } = require('../Error/custom-error')

const getAllTask = asyncWrapper(async (req, res) => {

    const task = await Task.find({});
    res.status(200).json({ task: task });
});

const createTask =  asyncWrapper(async (req, res) => {
    
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    
});

const getTask =  asyncWrapper( async (req, res, next ) => {
    
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            // return res.status(404).json({ msg: `No task with id ${taskID}` });
            // const error = new Error('Not Found');
            // error.status = 404;

            // return next(error);

            return next(createCustomError(`No task with id: ${taskID}`,404));

        }
        res.status(200).json({ task });

});


const updateTask = asyncWrapper( async (req, res,next) => {
    
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({
            _id:
                taskID
        }, req.body, {
            new: true,
            runValidators: true

        });
        if (!task) {
            // return res.status(404).json({
            //     msg: `No task with id:
            // ${taskID}`
            // const error = new Error('Not Found');
            // error.status = 404;

            // return next(error);
            return next(createCustomError(`No task with id: ${taskID}`),404)


            
        }
        res.status(200).json({ task });

     
});

const deleteTask = asyncWrapper (async (req, res, next) => {
    
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({
            _id:
                taskID
        });
        if (!task) {
            // return res.status(404).json({
            //     msg: `No task with id:
            // ${taskID}`
            // })
            
            return next(createCustomError(`No task with id: ${taskID}`,404))

            // const error = new Error('Not Found');
            // error.status = 404;

            // return next(error);


        }
        res.status(200).json({ task });

});



module.exports = {
    getAllTask,
    getTask,
    updateTask,
    deleteTask,
    createTask,
}