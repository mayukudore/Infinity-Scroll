





const imageContainer = document.getElementById('images')

let myArray = [];

function generateMorePictures(){

    window.addEventListener('scroll', ()=> {
        if((window.scrollY + window.innerHeight) >= 
            document.documentElement.scrollHeight){
            generatePictures();
        }

    })

       
    


}

function getImages(){
myArray.forEach((element) => { 
   
    let img = document.createElement('img');
   img.setAttribute('src', element.download_url);

   let anchor = document.createElement('a');
   anchor.href ='#';
   anchor.appendChild(img);
   imageContainer.appendChild(anchor)
})
}
const apiKey = 'FR_s81GGRP_VNY0m5VkPpVgNR25vPy4_AwdtgdVzfOo'
                                        

 let splashUrl = 'https://picsum.photos/v2/list?page=2&limit=100'

async function generatePictures () {
try {
    const response = await fetch(splashUrl);
    if (response.status === 200) {
        myArray = await response.json();
        console.log(myArray)
        
 getImages();
      
    }
    
    
} catch (error) {
    
}

}
generatePictures();
generateMorePictures();
