ajax{
get:function(url,callback(err,data,{yuklenen,dosyaboyutu}) ),  
post:function(url,post verisi,callback(err,data,{yuklenen,dosyaboyutu}) ),  
exists:function(url)  }  

orneklerle kullanimi:

ajax.get('deneme.json',function(err,data,loading){  
if(!err)alert(JSON.parse(data))  
console.log("yuzde %i yuklendi",loading.loaded*100/loading.fileSize)  
});

post icin de kullanim tamamen ayni sekilde sadece urlden sonra name value degeri aliyor post etmek istediginiz veriyi yazmaniz gerekiyor 

son olarak exists fonksiyonu serverda bir dosyanin var olup olmadigini tespit edip boolean bir deger donduruyor
