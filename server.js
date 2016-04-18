var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var url=require('url')
var React = require('react')
var cookieParser = require('cookie-parser');
var cookieSession=require('cookie-session');
var session = require('express-session');
var reactRouter=require('react-router')
var match=reactRouter.match
var RouterContext=reactRouter.RouterContext
import { renderToString } from 'react-dom/server'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
var express=require('express');
var app = new express()
var port = 8000
var routes=require('./routes')
var path=require('path');
var compiler = webpack(config)
var Users=require('./models/Users');
var connect = require('connect');

var SessionStore = require("session-mongoose")(connect);
var sessioin_store = new SessionStore({
	url: "mongodb://localhost/tododb",
	interval: 120000
});
let store = configureStore({
todos:[{
	id:0,
	completed:false,
	text:'Use Redux',
	editing:false
}],
filter:'show_all',
login_out:''});

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(session({
secret : 'login',
store: sessioin_store,
resave:false,
saveUninitialized:true,
cookie: { maxAge: 900000 }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*',function(req,res){
	match({routes,location:req.url},(error,redirectLocation,renderProps)=>{
	if(req.session.user){
		console.log('test2-session-='+req.session.user.name);
	}
	console.log('get server');
		if(error){
			res.status(500).send(error.message);
		}else if(redirectLocation){
			res.redirect(302,redirectLocation.pathname+redirectLocation.search);
		}else if(renderProps){
			const markup=renderToString(<Provider store={store}><RouterContext {...renderProps}/></Provider>);
			let initialState=JSON.stringify(store.getState());
			res.render('index', {markup,initialState});
		}else{
			let pathname=url.parse(req.url).pathname
			if(pathname=='/getUser'){
				if(!req.query.name){
					res.set({'Content-Type':'text/json','Encodeing':'utf8'});
					res.send({status:'OK',des:'参数缺失'});					
				}else{
					Users.findByName(req.query.name,function(err,obj){
						res.set({'Content-Type':'text/json','Encodeing':'utf8'});
						res.send({status:'OK',user:obj});
					});					
				}

			}else if(pathname=='/doLogin'){
				if(!req.query.name){
					res.set({'Content-Type':'text/json','Encodeing':'utf8'});
					res.status(200).send({status:'error',des:'用户名为空'});					
				}else{
					Users.findByName(req.query.name,function(err,obj){
						res.set({'Content-Type':'text/json','Encodeing':'utf8'});
						if(obj.name==req.query.name&&obj.password==req.query.password){
							req.session.user={
								name:obj.name
							};
							res.status(200).send({status:'OK',des:'login'});

						}else{
							res.send({status:'error',des:'用户名或密码错误'});
						}
						
					});					
				}				
			}else{
				res.status(404).send('Not Found');
			}
		}
	});	
})
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
