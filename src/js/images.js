var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dhl6hc7bs', uploadPreset: 'n1uhyu9p',
    sources: [ 'local', 'url' ],
    folder: 'simple_startup'}, 
    (error, result) => {
        if (result.info.url != null) {
            var url = result.info.url;
            setBackgroundWallpaper(url);
        }
    });

document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
}, false);


function setBackgroundWallpaper(url) {
    var img = { URL: url }
    savetoLocalStorage("GUEST_WALLPPAPER", img);
}