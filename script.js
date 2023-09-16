function save(){
    var selectElement= document.getElementById('firsts')
    var selectedIndex = selectElement.selectedIndex;
    var selectedOption = selectElement.options[selectedIndex];
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
    var input1= document.getElementById('input1').value
    if(selectedText=='Youtube' && input1.includes('www.Youtube.com')){
        var x=document.getElementById('btn1');
        x.innerHTML= ('Youtube')
        x.style="background-color: rgb(222, 0, 0);";
        var p1=document.getElementById('p1')
        p1.innerHTML=('');
    }
    else if(selectedText=='Youtube' && !input1.includes('www.Youtube.com')){
        var p1=document.getElementById('p1')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else if(selectedText=='LinkedIn' && input1.includes('www.LinkedIn.com')){
        var x=document.getElementById('btn1');
        x.innerHTML= ('LinkedIn')
        var p1=document.getElementById('p1')
        p1.innerHTML=('');
        x.style="background-color: rgb(0, 132, 255);";
    }
    else if(selectedText=='LinkedIn' && !input1.includes('www.LinkedIn.com')){
        var p1=document.getElementById('p1')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else if(selectedText=='Github' && !input1.includes('www.github.com')){
        var p1=document.getElementById('p1')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else{
        var x=document.getElementById('btn1');
        x.innerHTML= ('Github')
        x.style="background:black;";
        var p1=document.getElementById('p1')
        p1.innerHTML=('');
    }
    var selectElement= document.getElementById('seconds')
    var selectedIndex = selectElement.selectedIndex;
    var selectedOption = selectElement.options[selectedIndex];
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
    if(selectedText=='Youtube' && input1.includes('www.Youtube.com')){
        var x=document.getElementById('btn2');
        x.innerHTML= ('Youtube')
        x.style="background-color: rgb(222, 0, 0);";
        var p1=document.getElementById('p2')
        p1.innerHTML=('');
    }
    else if(selectedText=='Youtube' && !input1.includes('www.Youtube.com')){
        var p1=document.getElementById('p2')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else if(selectedText=='LinkedIn' && input1.includes('www.LinkedIn.com')){
        var x=document.getElementById('btn2');
        x.innerHTML= ('LinkedIn')
        var p1=document.getElementById('p2')
        p1.innerHTML=('');
        x.style="background-color: rgb(0, 132, 255);";
    }
    else if(selectedText=='LinkedIn' && !input1.includes('www.LinkedIn.com')){
        var p1=document.getElementById('p2')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else if(selectedText=='Github' && !input1.includes('www.Github.com')){
        var p1=document.getElementById('p2')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else{
        var x=document.getElementById('btn2');
        x.innerHTML= ('Github')
        x.style="background:black;";
        var p1=document.getElementById('p3')
        p1.innerHTML=('');
    }
    var selectElement= document.getElementById('threes')
    var selectedIndex = selectElement.selectedIndex;
    var selectedOption = selectElement.options[selectedIndex];
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
    if(selectedText=='Youtube' && input1.includes('www.Youtube.com')){
        var x=document.getElementById('btn3');
        x.innerHTML= ('Youtube')
        x.style="background-color: rgb(222, 0, 0);";
        var p1=document.getElementById('p3')
        p1.innerHTML=('');
    }
    else if(selectedText=='Youtube' && !input1.includes('www.Youtube.com')){
        var p1=document.getElementById('p3')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else if(selectedText=='LinkedIn' && input1.includes('www.LinkedIn.com')){
        var x=document.getElementById('btn3');
        x.innerHTML= ('LinkedIn')
        var p1=document.getElementById('p3')
        p1.innerHTML=('');
        x.style="background-color: rgb(0, 132, 255);";
    }
    else if(selectedText=='LinkedIn' && !input1.includes('www.LinkedIn.com')){
        var p1=document.getElementById('p3')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else if(selectedText=='Github' && !input1.includes('www.github.com')){
        var p1=document.getElementById('p3')
        p1.innerHTML=('enter your link correctly');
        p1.style="color:red;";

    }
    else{
        var x=document.getElementById('btn3');
        x.innerHTML= ('Github')
        x.style="background:black;";
        var p1=document.getElementById('p3')
        p1.innerHTML=('');
    }
}
/*        function btn1(){
    var windowFeatures = "width=500,height=300";
    var input1= document.getElementById('input1').value;
    window.open(input1,"_blank",windowFeatures)
}
// Get a reference to the button element by its id
var openLinkButton = document.getElementById("openLinkButton");

// Add a click event listener to the button
openLinkButton.addEventListener("click", function() {
// Define the URL you want to open
var url =document.getElementById('input1').value;

// Open the URL in a new browser window or tab
window.open(url);
});*/

function profile(){
    var pp= document.getElementById('link5');
    pp.style='height: 400px;';
    // Get references to the input element and the div container
var imageInput = document.getElementById("img");
var imageContainer = document.getElementById("cercle");

// Add an event listener to the input element for when a file is selected
imageInput.addEventListener("change", function () {
    var selectedFile = imageInput.files[0];
    
    if (selectedFile) {
        // Create a FileReader to read the selected image file
        var reader = new FileReader();

        // Define a function to handle the file reading process
        reader.onload = function (e) {
            // Set the background of the div container to the selected image
            imageContainer.style.backgroundImage = `url(${e.target.result})`;
        };

        // Read the selected file as a data URL (base64)
        reader.readAsDataURL(selectedFile);
    } else {
        // Clear the background if no file is selected
        imageContainer.style.backgroundImage = "none";
    }
});

}

// Get references to the image and the print button

$(document).ready(function(){
    $(".profile3").click(function(){
        $(".profile-details").fadeIn();
        $("#link1").fadeOut();
        $("#link2").fadeOut();
        $("#link3").fadeOut();
        $("#addlink").fadeOut();
        $(".save1").fadeIn();
        $(".save").fadeOut();
        var pp= getElementById('link5');
        pp.style='height: 50%;';
        
        
    });
function save1() {
            let prof= document.getElementById('imgprof');
            let inputimg=document.getElementById('img');
            inputimg.onchange=function(){
                prof.src=URL.createObjectURL(inputimg.files[0])
            }
        }
    $(".save1").click(function(){
        $(".imgprof").fadeIn();
    
    });
    $(".links").click(function(){
        $(".profile-details").fadeOut();
        $("#link1").fadeIn();
        $("#link2").fadeIn();
        $("#link3").fadeIn();
        $("#addlink").fadeIn();
        $(".save").fadeIn();
        $(".save1").fadeOut();


});


$(".projects").click(function(){
$(".ml").fadeOut();
$(".aymendev").fadeIn();
});
$(".contact").click(function(){
$(".ml").fadeOut();
$(".aymendev").fadeIn();
});
$(".nl").click(function(){
$("li").fadeOut(500);
$(".ml").fadeIn();
$(".nl").fadeOut(500);
$(".aymendev").fadeIn();
});
setTimeout(function(){
$(".custom-loader").fadeToggle();
$(".loa").fadeToggle();
}, 3000);
});