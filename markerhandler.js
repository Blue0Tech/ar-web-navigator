AFRAME.registerComponent('markerhandler',{
    init: function() {
        let youtubeRef = document.getElementById('youtube');
        youtubeRef.addEventListener('markerFound',(e)=>{
            window.location.assign('https://youtube.com/');
        });
        let facebookRef = document.getElementById('facebook');
        facebookRef.addEventListener('markerFound',(e)=>{
            window.location.assign('https://facebook.com/');
        });
        let twitterRef = document.getElementById('twitter');
        twitterRef.addEventListener('markerFound',(e)=>{
            window.location.assign('https://twitter.com/');
        });
        let spotifyRef = document.getElementById('spotify');
        spotifyRef.addEventListener('markerFound',(e)=>{
            window.location.assign('https://spotify.com/');
        });
        let instagramRef = document.getElementById('instagram');
        instagramRef.addEventListener('markerFound',(e)=>{
            window.location.assign('https://instagram.com/');
        });
        let googleRef = document.getElementById('google');
        googleRef.addEventListener('markerFound',(e)=>{
            window.location.assign('https://google.com/');
        });
    }
});