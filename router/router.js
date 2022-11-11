const app = require(`express`).Router()
const auth = require(`../middleware/authentication`)
const authorizedUser = require(`../middleware/authorization.user`)
const authorizationAdmin = require(`../middleware/authorizes.admin`)

//#region register
const registerValidation = require(`../middleware/register.validation`)
const registerController = require(`../controller/user/register`)
app.post(`/register`,registerValidation,registerController)
//#endregion

//#region login
const loginValidation= require(`../middleware/login.validation`)
const loginController = require(`../controller/user/login`)
app.post(`/login`,loginValidation,loginController)
//#endregion
 
//#region update
const updateController = require(`../controller/user/update`)
app.put(`/update`,auth,authorizationAdmin,updateController)
//#endregion

//#region delete
const deleteController = require(`../controller/user/delete`)
app.delete(`/delete`,deleteController)
//#endregion

//#region users
const usersController = require(`../controller/user/users`)
app.get(`/users`,auth,authorizationAdmin,usersController)
//#endregion

//#region create product
const productControl = require(`../controller/product/createproduct`)
app.post(`/create`,auth,authorizationAdmin,productControl)
//#endregion

//#region edit product
const editControl = require(`../controller/product/edit`)
app.put(`/edit`,auth,authorizationAdmin,editControl)
//#endregion

//#region get all product
const allProduct = require(`../controller/product/products`)
app.get(`/products`,allProduct)
//#endregion

//#region delete product
const deleteControl = require(`../controller/product/delete`)
app.delete(`/deleteProduct`,auth,authorizationAdmin,deleteControl)
//#endregion

//#region get a product
const singleProductControl = require(`../controller/product/product`)
app.get(`/product`,singleProductControl)
//#endregion

//#region order
const orderControl = require(`../controller/order/createOrder`)
app.post(`/createOrder`,auth,authorizedUser,orderControl)
//#endregion

//#region update order
const orderUpdate = require(`../controller/order/update`)
app.put(`/orderUpdate`,auth,authorizedUser,orderUpdate)
//#endregion

//#region delete order
const orderDelete = require(`../controller/order/delete`)
app.delete(`/orderDelete`,auth,authorizedUser,orderDelete)
//#endregion

//#region get a single order
const singleOrder = require(`../controller/order/order`)
app.get(`/order`,auth,authorizedUser,singleOrder)
//#endregion

//#region get all order
const allOrder = require(`../controller/order/orders`)
app.get(`/orders`,auth,authorizationAdmin,allOrder)
//#endregion


module.exports = app