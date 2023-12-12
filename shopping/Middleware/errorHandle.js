
const  {CustomApiError } =require('../ErrorController/customError')

const errorHandlerMiddleWare = (err, req, res, next) =>{

    if(err instanceof CustomApiError) {
        return res.status(err.statusCode).json({
            msg: err.message
        });
    };



    //  res.status(500).json({ msg : 'Something went wrong, try again later...' })

    // return res.status(err.status).json({
    //     msg: err.message
    // });

    return res
    .status(500)
    .json({ msg: 'Something went wrong'})
    
}


module.exports = errorHandlerMiddleWare;