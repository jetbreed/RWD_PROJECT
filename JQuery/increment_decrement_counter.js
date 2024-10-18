jQuery(document).ready(function() {

  jQuery('.qty-minus').on('click', function(e) {
    // e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
      value = value - 1;
    } else {
      value = 1;
    }
      
    $input.val(value);

    $.ajax({
      url: 'demo_test.js',
      method: 'get',
      data: {
        p_quantity: value
      },
      success: function(response) {
       
      // $('.qty-minus').closest('div').find('input').val(value);
      //   console.log(numValue);
        console.log(value);
        // console.log(response);
        // console.log('Ending . . .');
      //   console.log(response);
      }
    });
  });


  jQuery('.qty-plus').on('click', function(e) {
    // e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }

    $input.val(value);
    
    $.ajax({
      url: 'demo_test.html',
      method: 'get',
      data: {
        p_quantity: value
      },
      success: function(response) {
       
        // $('.qty-minus').closest('div').find('input').val(value);
        // console.log(numValue);
        // console.log(value);
        // console.log(response);
        // console.log('Ending . . .');
        // console.log(response);
      }
    });
  });

})
