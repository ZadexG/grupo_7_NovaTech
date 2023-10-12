const controller = {
    index(req, res) {
        res.render('./users/index');
    },
    login(req, res) {
        res.render('./users/login');
    },
    productCart(req,res){
        res.render('./users/productCart')
    },
    register(req,res){
        res.render('./users/register')
    },
    productDetail(req,res) {
        res.render('./users/productDetail')
    },
    createEdit(req,res){
        res.render("./users/createEdit")
    }
};

module.exports = controller;