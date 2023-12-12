
const Item = require('../Models/item')
const asyncWrapper = require('../Middleware/async')
const {createCustomError} = require('../ErrorController/customError');

const getAllItems = asyncWrapper(async (req, res) => {

    const item = await Item.find({});
    res.status(200).json({ item: item });
});


const createItem =  asyncWrapper(async (req, res) => {
    
        const item = await Item.create(req.body)
        res.status(201).json({ item });
    
});

const getItem =  asyncWrapper( async (req, res,next ) => {
    
        const { id: itemID } = req.params;
        const item = await Item.findOne({ _id: itemID });
        if (!item) {
            // return res.status(404).json({ msg: `No task with id ${itemID}` });
            return next(createCustomError(`No item with id: ${itemID}`,404))


        }
        res.status(200).json({ item });

       

    
});

const updateItem = asyncWrapper(async (req, res, next) => {
    const { id: itemID } = req.params;
    const item = await Item.findOneAndUpdate({
      _id: itemID,
    });
  
    if (!item) {
      // return res.status(404).json({
      //   msg: `No item with id: ${itemID}`,
      // });
      return next(createCustomError(`No item with id: ${itemID}`,404))

    }
  
    res.status(200).json({ item });
  });
  

const deleteItem = asyncWrapper (async (req, res, next) => {
    
        const { id: itemID } = req.params;
        const item = await Item.findOneAndDelete({
            _id:
                itemID
        });
        if (!item) {
            // return res.status(404).json({
            //     msg: `No task with id:
            // ${itemID}`
            // })
            return next(createCustomError(`No item with id: ${itemID}`,404))

        }
        res.status(200).json({ item });

});



module.exports = {
    getAllItems,
    getItem,
    updateItem,
    deleteItem,
    createItem,
}