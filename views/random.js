var random_images_array = ["https://cdn.discordapp.com/attachments/671170382010515466/722943187718635520/ELY7FRcXUAAb1pK.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/722946412026789918/6rxud0q5zwc31.jpg"];

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}