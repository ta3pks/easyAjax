ajax{ get:function(url,callback(err,data,{yuklenen,dosyaboyutu}) ),
post:function(url,post verisi,callback(err,data,{yuklenen,dosyaboyutu}) ),
exists:function(url) }

usage by examples:

ajax.get('example.json',function(err,data,loading){
if(!err)alert(JSON.parse(data))
console.log("%i percent loaded",loading.loaded*100/loading.fileSize)
});

Usage of post is the same except adding one more post parameter into the function

ajax.post("url","fname=try&lname=tried",function(err,data,loading){  
some code here  
});
