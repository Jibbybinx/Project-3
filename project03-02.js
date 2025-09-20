/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Trilla McKee
      Date:   09/20/2025

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0] = "Pale pink petals with yellow center";
captions[1] = "Deep blue petals with lighter highlights";
captions[2] = "Peach pink petals with dark center"; 
captions[3] = "Purple petals with yellow center"; 
captions[4] = "Bright yellow petals with brown center"; 
captions[5] = "Blush pink petals with a light center";
captions[6] = "Swirling gradient from orange to magenta";
captions[7] = "Deep red layers of petals";
captions[8] = "Gradient of dark to light purple petals";
captions[9] = "Powder blue with yellow-green center";
captions[10] = "Sky blue with deeper blue lines";
captions[11] = "Heart-shaped, hot pink buds";
captions[12] = "Soft blue with spikey green center";
captions[13] = "Flat red throughout";

let htmlCode = "";

for (let i = 0; i < captions.length; i++) {
  htmlCode += "<figure>";
  // Notice: no (i+1) here, because your images start at slide0.jpg
  htmlCode += "<img alt='' src='slide" + i + ".jpg' />";
  htmlCode += "<figcaption>" + captions[i] + "</figcaption>";
  htmlCode += "</figure>";
}

document.getElementById("gallery").innerHTML = htmlCode;
