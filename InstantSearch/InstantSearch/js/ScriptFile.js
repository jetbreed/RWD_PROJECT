   
 
 
var app = angular.module("instantSearch", []);

 

app.filter('searchFor', function(){

 

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

 
		angular.forEach(arr, function(item){

			if(item.Name.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

 

function InstantSearchController($scope){

 

	$scope.items = [
    	{
			Name: 'Andy',
			PhoneNo: '8787878789' ,
            image: 'image/img9.jpg'
	
			 
		    },

        {   Name: 'Amy',
			PhoneNo: '8889687475' ,
 	        image: 'image/img11.jpg'
		},
        {
			Name: 'Batty',
			PhoneNo: '9037878789' ,
            image: 'image/img13.jpg'
			 
		},
		{
			Name: 'Catty',
			PhoneNo: '7897687475' ,
            image: 'image/img12.jpg'
	
			 
		},
               
		{
			Name: 'Catrina',
			PhoneNo: '237878789' ,
            image: 'image/img8.jpg'
				 
		},
		{
			Name: 'Deniel',
			PhoneNo: '666678789' ,
            image: 'image/img15.jpg'
			 
		},
		{
			Name: 'Jolina',
			PhoneNo: '6669878789' ,
            image: 'image/img14.jpg'
			 
		},
		{
			Name: 'Jack',
			PhoneNo: '7897687475' ,
			image:  'image/img2.jpg'
	
		} ,
		{
		    Name: 'Mandy',
			PhoneNo: '8887687475', 
			image: 'image/img4.jpg'
	
		},
        
		{
			Name: 'Parker',
			PhoneNo: '999878789' ,
            image: 'image/img7.jpg'
			 
		},
    	{
			Name: 'Peter',
			PhoneNo: '9634687475', 
		    image: 'image/img1.jpg'
	
		},
	
		{
			Name: 'Ronney',
			PhoneNo: '90997687475' ,
            image: 'image/img10.png'
	
			 
		},


		{
			Name: 'Robbin',
			PhoneNo: '666678789' ,
            image: 'image/img3.jpg'
			 
		},

         {
			
			Name: 'Tim',
			PhoneNo: '9997687499' ,
		    image: 'image/img3.jpg'
	
		},
		

        	{
			Name: 'Wimmi',
			PhoneNo: '89897687475' ,
            image: 'image/img5.png'
	
		 
		}


	];

}
 