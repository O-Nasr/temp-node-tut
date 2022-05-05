const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user == 'omar'){
        req.user = {name: 'omar', id: 1};
        next();
    }else{
        res.status(401).send('Unauthorize');
    }
}

module.exports = authorize;