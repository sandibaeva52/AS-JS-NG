var items = 1;

var getData = () => {
            var htmlPage;
            var slider ="";
            var titleValue = title.value;
            var descriptionValue = description.value;
            var logoUrlValue = logoUrl.value;
            var mainText = document.constructor.mainText.value;
            var menu = document.constructor.menu;
            var menuDisplay=document.constructor.menuItem.value;
           var color=document.getElementById("colorTheme").value;
           var colorOfText=document.getElementById("colorText").value;
           var galleryImgUrl=document.constructor.image1;

           var li = "";
           console.log(menu);
           for(var i=0; i < menu.length; i++) {
            if(menu[i].checked) {
                li += `<li><a class="nav-constructor" href="" >${menu[i].value}</a></li>`;
            }
        }

       

            htmlPage = `<div id="main"><header><img class='logo-constructor' src='${logoUrlValue}' alt='logo'>`;
            htmlPage += `<h1 class="title-constructor">${titleValue}</h1>`;
            htmlPage += `<h2 class="description-constructor">${descriptionValue}</h2></header>`;
            // htmlPage += `<div><ul>${li}</ul></div>`;

            var imageList=[];
            var images = "";
            for (var i = 0; i < galleryImgUrl.length; i++) {
                imageList[i]=galleryImgUrl[i].value;
                images +=  `<img class ="photo-constructor" alt="gallery" src="${imageList[i]}"><br>`;
                
            }

            mainText = `<p class ="paragraph">${mainText}</p>`;

            var ul = '<ul>' + li + '</ul>';
            switch (menuDisplay) {
             case 'horizontal':
                 m = `<section id="content"><nav class="horizontal-constructor" id="navHorizontal">` + ul + `</nav>` + images + mainText + `</section></div>`;
                 break;
             case 'verticalLeft':
                 m = `<nav class="verticalLeft-constructor" id="navVerticalLeft">` + ul + `</nav><section id="content">` + images + mainText + `</section></div>`;
                 break;
             case 'verticalRight':
                 m = `<nav class="verticalRight-constructor" id="navVerticalRight"><ul>` + ul + `</nav><section id="content">` + images + mainText + `</section></div>`;
                 break;
             default:
                 m = `<section id="content"><nav id="navHorizontal">` + ul + `</nav>` + images + mainText + `</section></div>`;
         }

             htmlPage+=m;

         
    
        

            // htmlPage += `<img class='left-section' src='${images}' alt=''>`;
             
             
            //  var config={
            //      images: [],
            //      mode: 'automanual',
            //      swipeSpeed:500,
            //      swipeDelay:1000
            //  },
            //  newSlider=new Slider("Slide", config);



            
            document.body.style.backgroundColor=color;
            document.body.style.color=colorOfText;

            document.body.innerHTML = htmlPage;

}

var addImg = () => {
    items++;
    newItem = `<input type=\"url\" name=\"image1\" + ${items} + "\" size=\"100\"  placeholder=\"Введите URL изображения\" class=\"image1\" >`;
    span = document.createElement("span");
    span.innerHTML = newItem;
    gallery.insertBefore(span, btnAddImg);
    
}

var disableInput = () => {
    if(isGalleryN.value === "No") {
        image1.setAttribute("disabled","disabled")
        btnAddImg.setAttribute("disabled","disabled")
    }
}
var enableInput = () => {
    if(isGalleryY.value === "Yes") {
        image1.removeAttribute("disabled")
        btnAddImg.removeAttribute("disabled")
    }
}

    var enableTextBlock=()=> {
     if(mainTextAddY.value === "true") {
     mainText.removeAttribute("disabled");
    }
    }
    var disableTextBlock =()=>{
        if(mainTextAddN.value === "false") {
        mainText.setAttribute("disabled","disabled")
        mainText.style.opacity(0.5);

    }
    }

    

