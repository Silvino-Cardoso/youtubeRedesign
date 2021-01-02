function getVideos(){
    var subscriptionsVideosElement = document.querySelector('.subscriptions-videos-container');

    var url = "https://www.googleapis.com/youtube/v3/search";

    $.ajax({
        url: url,
        method: "GET",
        data: 
        {
            part: "snippet",
            key: "AIzaSyAAymqLomWlNef477DYcQ5uOcUfCby6PEE",
            q: "frontend"
        },
        success: function(response){

            for( i = 0 ; i < response.items.length; i++){

            var subscriptionsVideosDiv = document.createElement('div');
                subscriptionsVideosDiv.setAttribute('class','subscriptions-videos' );
            var novoVideo = document.createElement('img');
            novoVideo.setAttribute('src',`${response.items[i].snippet.thumbnails.medium.url}`);
            
            var descriptionElement = document.createElement('h5');
            var description = response.items[i].snippet.title;
            var descriptionText = document.createTextNode(description);
            descriptionElement.appendChild(descriptionText);

            
            subscriptionsVideosDiv.appendChild(novoVideo)
            subscriptionsVideosDiv.appendChild(descriptionElement)
            subscriptionsVideosElement.appendChild(subscriptionsVideosDiv)
            console.log(response)
        }}
    })
}

getVideos();