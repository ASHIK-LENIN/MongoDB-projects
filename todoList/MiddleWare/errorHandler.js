
const { CustomApiError } = require('../Error/custom-error')

const errorHandlerMiddleWare = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).json(

           { msg: err.message}
        );

        //  res.status(500).json({ msg : 'Something went wrong, try again later...' })

    };
    return res
        .status(500)
        .json({ msg: 'Something went wrong, please try again later' });
}


module.exports = errorHandlerMiddleWare;