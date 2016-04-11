var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var url=require('url')
var React = require('react')

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
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('*',function(req,res){
	match({routes,location:req.url},(error,redirectLocation,renderProps)=>{
		if(error){
			res.status(500).send(error.message);
		}else if(redirectLocation){
			res.redirect(302,redirectLocation.pathname+redirectLocation.search);
		}else if(renderProps){
			const markup=renderToString(<Provider store={store}><RouterContext {...renderProps}/></Provider>);
			console.log(markup);
			let initialState=JSON.stringify(store.getState());
			res.render('index', {markup,initialState});
		}else{
			
			let pathname=url.parse(req.url).pathname
			if(pathname=='/getUser'){
				console.log(req.params);
				Users.findByName('admin',function(err,obj){
					console.log(obj);
				});
			}
			res.status(404).send('Not Found');
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
