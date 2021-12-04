export const accessControlAllowOriginMiddleware = (
    req: any,
    res: any,
    next: any,
) => {
    console.log('middleware');
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
};
