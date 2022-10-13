const CreateError = (msg, status) => {
    const err = new Error();
    err.message = msg;
    err.statusCode = status;
}

export default CreateError;