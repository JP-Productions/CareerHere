const AuthController = {};

AuthController.setCookie = async (req, res, next) => {
    try{
        if(res.locals.id){
        res.cookie('secret', res.locals.id, {expire : new Date(Date.now() + 20 * 60 * 1000), secure : true, httpOnly : true}); 
        };
        return next();
    } catch (error) {
        console.log(`err in setCookie ${err}`);
    }
};

AuthController.checkCookie = async (req, res, next) => {
    try {
        if(req.cookies.secret){
            res.locals.id = req.cookies.secret;
            console.log('res.locals.id based of req.cookie.secret: ', res.locals.id)
            return next();
        } else{
            return res.redirect('/');
        }
    } catch (error) {
        return next(error);
    }
}

module.exports = AuthController;