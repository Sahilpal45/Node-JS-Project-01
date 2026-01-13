const express=require("express");
const router=express.Router();
const {handleAllusers,
    handlegetUserByid,
    handleupdateUserByid,
    handledleleteUserByid,
    handleCreateNewUser,
}=require("../Controllers/user.js");

router.route("/")
.get(handleAllusers)
.post(handleCreateNewUser)


router.route("/:id")
.get(handlegetUserByid)
.patch(handleupdateUserByid)
.delete(handledleleteUserByid)

module.exports=router;
