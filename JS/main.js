function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  $(document).ready(function(){
   $(".content").each(function(){
     var cnt =$(this),
     countTo = cnt.attr("data-count");
     $({countNum:cnt.text()}).animate({
       countNum:countTo
     },
     {
       duration:5000,
       easing:'linear',
       step:function(){
         cnt.text(Math.floor(this.countNum));
       },
       complete:function(){
         cnt.text(this.countNum)
       }
     }
     );


   });
  });

  $(document).ready(function(){
    $(".moon-night").click(function(){
      $("#bdy").css("background-color","#000")
      $(".moon").css("display","inline-block")
      $(".moon-night").css("display","none")

    });
    $(".moon").click(function(){
      $("#bdy").css("background-color","#fff")
      $(".moon").css("display","none")
      $(".moon-night").css("display","inline-block")

    })
  })

  AOS.init();
