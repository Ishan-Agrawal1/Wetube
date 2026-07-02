const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next)
    } catch (error) {
        let statusCode = error.statusCode || error.code || 500;
        if (typeof statusCode !== 'number' || statusCode < 100 || statusCode > 599) {
            statusCode = 500;
        }
        res.status(statusCode).json({
            success : false,
            message: error.message
        })
    }

}

export { asyncHandler } 

// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next))
//         .catch((err) => next(err))
//     }
// }