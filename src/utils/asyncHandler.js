const asyncHandler=(requestHandlerFun)=>{
      return (req,res,next)=>{
        Promise.resolve(requestHandlerFun(req,res,next)).catch((error)=>next(error))
      }
};

export {asyncHandler};