var wordsInvalid = ['zoom','channel','galvanize','mcsp','garrett','ross','incompetent','unfunny'];
var username = document.getElementById('name')
var post = document.getElementById('post')
var btn = document.getElementById('submit')

btn.addEventListener('click', function(event){
    event.preventDefault()
    addPost()
})

function addPost(){
    
   var htmlDiv = document.getElementById('postDiv')
   var name = document.createElement('div')
   var comment = document.createElement('p')
   comment.textContent = post.value 
   name.textContent = username.value
   var comArr = comment.textContent
   htmlDiv.appendChild(name)
  
       for (let j = 0; j < wordsInvalid.length; j++) {
        if(comArr.includes(wordsInvalid[j]) === true){
            comArr.replace(wordsInvalid[j],wordsInvalid[j][0] + '----')
            name.appendChild(comment)
        }
           
       }

  
 

   
   

}
function looping(){
    for(let i = 0;i < wordsInvalid.length;i++){
        
    }
}