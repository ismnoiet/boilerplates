var express = require('express'),
	app     = express();

app.set('view engine','jade');
app.set('views',__dirname + '/views');

app.get('/',function(req,res){
	// req.setHeader({});
	res.render('index',{title:"title",message:'my message123'})	
});

app.listen(3000);