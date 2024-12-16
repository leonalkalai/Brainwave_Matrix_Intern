$(window).on('load', function() {

    //reset form fields all window reload
    $('#hotellistform').find("select").each(function () { // there is no such thing as input[type=select] 
        this.selectedIndex = 0; // this is a <select>
       // this.prop("selectedIndex",0);
    });

    $.when(
      
    $( function() {
        
        $( "#slider-range" ).slider({
            animate: "fast",
            range: true,
            min: 0,
            max: 5000,
            //values: [ 0 , 5000 ],
            values: [ $("input[name='minprice']").val() , $("input[name='maxprice']").val() ],
            slide: function( event, ui ) {
            $( "#price-min" ).val(ui.values[ 0 ]+ "€");
            $( "#price-max" ).val(ui.values[ 1 ]+ "€");
            },
            start: function( event, ui ) {
                $( "#price-min" ).val($("#slider-range").slider( "values", 0 ) + "€");
                 $( "#price-max" ).val($("#slider-range").slider( "values", 1 ) + "€");
            },
            stop: function( event, ui ) {
                // $( "#price-min" ).val($("#slider-range").slider( "values", 0 ));
                // $( "#price-max" ).val($("#slider-range").slider( "values", 1 ));
                $( "#price-min" ).val($("#slider-range").slider( "values", 0 ) + "€");
                $( "#price-max" ).val($("#slider-range").slider( "values", 1 ) + "€");
            },
            create: function( event, ui ) {
             
            }

         
        });
         $('.search-button').click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $( "#price-min" ).val($("#slider-range").slider( "values", 0 ));
        $( "#price-max" ).val($("#slider-range").slider( "values", 1 ));
       
        $('#hotellistform').submit();
        $('#hotellistform').trigger("reset");
  
        
      });

        // $( "#price-min" ).slider( "value", $( "#price-min" ).val() );
        // $( "#price-max" ).slider( "value", $( "#price-max" ).val() );

        $( "#price-min" ).val($("#slider-range").slider( "values", 0 ) + "€");
        $( "#price-max" ).val($("#slider-range").slider( "values", 1 ) + "€");

    
  
       
    } )

    ).then(function() {
        
    });
   
    //console.log($( "#price-min" ).val()+ "€")
})



