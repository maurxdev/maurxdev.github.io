var token = '3122746583.3cce06d.db4fe985584f4ac79583b71b16a22f69', // learn how to obtain it below
    userid = 3122746583, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 6; // how much photos do you want to get

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
            $('.cards').append('<a target="_blank" href="'+ data.data[x].link +'"> '+
            '<div class="card"  title="'+ data.data[x].caption.text + '" '+
            ' style="background: url('+ data.data[x].images.low_resolution.url +') center / cover;">'+
            '<h6 class="legenda"><i class="material-icons">location_on</i>'+ data.data[x].location.name +'</h6></div></a>');
            // data.data[x].images.thumbnail.url - URL of image 150х150
			// data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});
