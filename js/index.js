window.fbAsyncInit = function() {
    FB.init({
      appId      : '1096483090387118',
      xfbml      : true,
      version    : 'v2.5'
    });
 FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log('Logged in.');
  }
  else {
    FB.login();
  }
});
  };
 
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

 function myFacebookLogin() {
  FB.login(function(){
  // Note: The call will only work if you accept the permission request
  FB.api('/me/feed', 'post', {message: quoteText+"\n"+"-"+quoteAuthor});
}, {scope: 'publish_actions'}, {scope: 'publish_actions'});
}


var quoteAuthor;
var quoteText;

$(document).ready(function()
                 {  
var height=$(window).height();

  $.ajax({url:"http://api.forismatic.com/api/1.0/",data:"method=getQuote&format=jsonp&lang=en&jsonp=?",dataType:"jsonp",success:function(response)
       {
         $("#DIV").html("<p>"+response.quoteText+"</p>"+"<p>"+response.quoteAuthor+"</p>");
         quoteAuthor=response.quoteAuthor;
         quoteText=response.quoteText;
       }});

});




$("#button1").click(function()
                 {
 $.ajax({url:"http://api.forismatic.com/api/1.0/",data:"method=getQuote&format=jsonp&lang=en&jsonp=?",dataType:"jsonp",success:function(response)
       {
         $("#DIV").html("<p>"+response.quoteText+"</p>"+"<p>"+response.quoteAuthor+"</p>");
         quoteAuthor=response.quoteAuthor;
         quoteText=response.quoteText;
       }});

});