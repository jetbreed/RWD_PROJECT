$.ajax({
    url: 'demo_test.js',
    method: 'get',
    data: {
      p_quantity: value
    },
    success: function(response) {
     
    $('.qty-minus').closest('div').find('input').val(value);
    //   console.log(numValue);
    //   console.log(value);
    //   console.log(response);
      console.log('Ending . . .');
    //   console.log(response);
    }
  });