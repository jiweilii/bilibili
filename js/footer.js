$.ajax({
    url:"../footer.html",
    type:"get",
    success: function(result) {
        $("#footer").html(`${result}`);
        $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
    }
  });