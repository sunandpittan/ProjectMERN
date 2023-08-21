const express = require("express");
const router = express.Router();
const bookCrud = require("../Controller/bookCrud");
const Signin = require("../Controller/signIn");
const Signup = require("../Controller/signUp");
const teammemberCrud = require("../Controller/teammemberCrud");
const orderCrud = require("../Controller/orderCrud");
const cartCrud = require("../Controller/cartCrud");

router.route("/addbook").post(bookCrud.createBook);
router.route("/viewbooks").get(bookCrud.getBooks);
router.route("/viewbook/:id").get(bookCrud.getBook);
router.route("/updatebook/:id").put(bookCrud.updateBook);
router.route("/deletebook/:id").delete(bookCrud.deleteBook);

router.route("/signin").post(Signin);
router.route("/signup").post(Signup);

router.route("/addteammember").post(teammemberCrud.createTeammember);
router.route("/viewteammembers").get(teammemberCrud.getTeammembers);
router.route("/viewteammember/:id").get(teammemberCrud.getTeammember);
router.route("/updateteammember/:id").put(teammemberCrud.updateTeammember);
router.route("/deleteteammember/:id").delete(teammemberCrud.deleteTeammember);

router.route("/addorder").post(orderCrud.createOrder);
router.route("/vieworders").get(orderCrud.getOrders);
router.route("/vieworder/:id").get(orderCrud.getOrder);
router.route("/updateorder/:id").put(orderCrud.updateOrder);
router.route("/deleteorder/:id").delete(orderCrud.deleteOrder);

router.route("/addtocart").post(cartCrud.createCart);
router.route("/viewcart/:id").get(cartCrud.getCart);
router.route("/updatecart/:id").put(cartCrud.updateCart);
router.route("/deletecart/:id").delete(cartCrud.deleteCart);

module.exports = router;
