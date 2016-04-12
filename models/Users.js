var mongodb=require('./mongodb');
var Schema=mongodb.mongoose.Schema;
var UserSchema=new Schema({
	name: String,
	password: String
});

var User= mongodb.mongoose.model('User',UserSchema);
var UserDao=function(){};

UserDao.prototype.findByName=function(name,callback){
	User.findOne({name:name},function(err,obj){
		callback(err,obj);
	});
}

UserDao.prototype.addUser=function(obj,callback){
	var instance= new User(obj);
	instance.save(function(err){
		callback(err);
	});
}


module.exports=new UserDao();