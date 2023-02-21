const express= require ('express')
const routes = express.Router()
const {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct}= require('../controllers/productController')
const userCtr=require('../controllers/userController')
const verifyToken=require('./verifyToken')
//-------------------user----------------------------
routes.post('/register',userCtr.register)
routes.post('/login',userCtr.login)
routes.get('/test',verifyToken,userCtr.test)

routes.route('/products').get(getAllProducts)
routes.route('/products/:idproduct').get(getProductById)
routes.route('/addproduct').post(verifyToken,addProduct)
routes.route('/update/:idproduct').patch(updateProduct)
routes.route('/delete/:idproduit').delete(verifyToken,deleteProduct)

module.exports= routes
