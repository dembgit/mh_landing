function animation(size) {
    if (size.matches) { // If media query matches
        $("#player").click(function() {
            console.log("click") // Only for testing purposes //
            $("#content").animate({
                opacity: "0"
            }, 1000);
            $("#video").show().animate({
                display: "flex",
                opacity: "1"
            }, 1000);
        })
    } else {
        $("#btn_desktop").click(function() {
            console.log("click") // Only for testing purposes //
            $("#content").animate({
                opacity: "0"
            }, 1000);
            $("#video").show().animate({
                display: "flex",
                opacity: "1"
            }, 1000);
        })
    }
  }
  
  var size = window.matchMedia("(max-width: 666px)")
  animation(size) // Call listener function at run time

