
app.get('/loadMore',function(req,res){
   var index=req.query.page;
    var len=req.query.length;
    var data=[];
    for(var i=0;i<len;i++){
        data.push('ÐÂÎÅ'+(parseInt(index)+i));
    }
    res.send({
        status:0,
        data:data
    })
});