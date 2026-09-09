class expressError extends Error{
    constructor(message,statusCode, errorCode=null,redirectTo=null){
    super();
    this.message=message;
    this.statusCode=statusCode;
    this.errorCode=errorCode;
    this.redirectTo=redirectTo;
}}
export default expressError;