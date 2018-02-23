function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
        
        var language = getParameterByName("language").toUpperCase();
        var nombre = getParameterByName("name")   
        

var booksArray = [
    //NEW
                { 
                    id:46,
                    EN:"The<br>Wallet",
                    ES:"La<br> Cartera",
                    url:"https://yogome.com/play.yogome.com/booksapp/46/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:40,
                    EN:"Eagle<br>Doesn't Give Up",
                    ES:"Eagle y el<br> árbol de los cometas",
                    url:"https://yogome.com/play.yogome.com/booksapp/40/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:4,
                    EN:"Many<br>Beautiful Things",
                    ES:"Cosas <br>Hermosas",
                    url:"https://yogome.com/play.yogome.com/booksapp/4/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:10,
                    EN:"Walking <br>to School",
                    ES:"Camino a <br>la escuela",
                    url:"https://yogome.com/play.yogome.com/booksapp/10/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:12,
                    EN:"The Candy <br>Tree",
                    ES:"El árbol de <br>los dulces",
                    url:"https://yogome.com/play.yogome.com/booksapp/12/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:15,
                    EN:"Arthurius’ <br>Home",
                    ES:"El hogar de <br>Arthurius",
                    url:"https://yogome.com/play.yogome.com/booksapp/15/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:20,
                    EN:"Please",
                    ES:"Por favor",
                    url:"https://yogome.com/play.yogome.com/booksapp/20/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:23,
                    EN:"Thank You",
                    ES:"Gracias",
                    url:"https://yogome.com/play.yogome.com/booksapp/23/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:24,
                    EN:"Justice's Toys",
                    ES:"Los objetos <br>de Justice",
                    url:"https://yogome.com/play.yogome.com/booksapp/24/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:25,
                    EN:"Every item <br>in it's place",
                    ES:"Cada cosa <br>en su lugar",
                    url:"https://yogome.com/play.yogome.com/booksapp/25/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:33,
                    EN:"Hero",
                    ES:"Héroe",
                    url:"https://yogome.com/play.yogome.com/booksapp/33/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:8,
                    EN:"Dispute in the <br>ice and fire reign",
                    ES:"Pelea en la región <br>de hielo y fuego",
                    url:"https://yogome.com/play.yogome.com/booksapp/8/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:9,
                    EN:"The Mood Ring",
                    ES:"El anillo de <br>las emociones",
                    url:"https://yogome.com/play.yogome.com/booksapp/9/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:3,
                    EN:"Don't be<br> Afraid...",
                    ES:"No tengas<br> miedo de...",
                    url:"https://yogome.com/play.yogome.com/booksapp/3/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:35,
                    EN:"Here Comes<br> Ignorantia",
                    ES:"¡Ahí viene <br>Ignorantia!",
                    url:"https://yogome.com/play.yogome.com/booksapp/35/",
                    new:false,
                    lock:false
                    
                },
    //OLD
                { 
                    id:22,
                    EN:"The Monster",
                    ES:"El Monstruo",
                    url:"https://yogome.com/play.yogome.com/booksapp/22/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:21,
                    EN:"The River",
                    ES:"El Río",
                    url:"https://yogome.com/play.yogome.com/booksapp/21/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:16,
                    EN:"The Christmas<br> Present",
                    ES:"El regalo<br> de navidad",
                    url:"https://yogome.com/play.yogome.com/booksapp/16/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:27,
                    EN:"Eagle learns<br>about Christmas",
                    ES:"Eagle entiende<br>la navidad",
                    url:"https://yogome.com/play.yogome.com/booksapp/27/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:6,
                    EN:"I am<br> Angry",
                    ES:"Estoy<br> Enojada",
                    url:"https://yogome.com/play.yogome.com/booksapp/6/",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:13,
                    EN:"Quiet <br>space",
                    ES:"El espacio <br> ideal",
                    url:"https://yogome.com/play.yogome.com/booksapp/13/",
                    new:false,
                    lock:false
                    
                }
          ]
          
          for(i=0;i<=booksArray.length-1;i++){
              
              
              $("#container-books").append('<li id="book'+ i +'"class="responsiveGallery-item"></li>');
              
              if(booksArray[i].new){
                  $("#container-books").find("#book" + i).append('<div class="new-ribbon"></div>');
              }
              
              $("#book" + i).attr("number",i);
              
              if(language == "ES"){
                   $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1ES.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                    console.log(i +  ": " + booksArray[i].lock);
                  
                    if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
//                  $("#book" + i).click(function(){
//                        window.open(booksArray[$(this).attr("number")].url + "?language=" + language , "_blank"); 
//                  });
                  
                  $("#book" + i).click(function(){
                        if(nombre){
                          window.open(booksArray[$(this).attr("number")].url + "#" + language  +"/"+ nombre+"/", "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + "#" + language  + "/&name=Yogome", "_self"); 
                      }
                  });
                  
              }else if(language == "EN"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1EN.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
//                  $("#book" + i).click(function(){
//                        window.open(booksArray[$(this).attr("number")].url + "?language=" + language , "_blank"); 
//                  });
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        if(nombre){
                          window.open(booksArray[$(this).attr("number")].url + language +"/"+ nombre+"/", "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + language  + "/&name=Yogome", "_self"); 
                      } 
                  });
              }else{
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1EN.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
//                  $("#book" + i).click(function(){
//                        window.open(booksArray[$(this).attr("number")].url + "?language=ES", "_blank"); 
//                  });
                  
                  $("#book" + i).click(function(){
                        if(nombre){
                          window.open(booksArray[$(this).attr("number")].url + "#ES/" + nombre+"/", "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + "#ES"  + "/&name=Yogome", "_self"); 
                      } 
                  });
              }

              $("#container-books").find("#book" + i).append('<div class="bookStar"><img src="assets/images/books/EstrellaEmpty.png"/></div><div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
          
               if(language == "ES"){
                $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].ES +'</h2>');
               }else if(language == "EN"){
                   $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].EN +'</h2>');     
                    }else{
                     $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].ES +'</h2>');   
                }
          
          }
          
    