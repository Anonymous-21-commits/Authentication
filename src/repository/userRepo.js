const User = require('../models/user');
class UserRepo {
    createUser = async (user) => {
        try {
            return await User.create(user);
        } catch (err) {
            console.log(err);
             throw err;
        }
    }
    async getByEmail(mail){
       try{
          return User.findOne({mail:mail});
       }catch(err){
        throw err;
       }
    }
}
module.exports=UserRepo;