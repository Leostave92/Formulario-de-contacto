
function validarFormulario (e) {

 const $input = document.querySelectorAll("form [data-required]");

 $input.forEach(input => {
   
     let $pattern = input.pattern || input.dataset.pattern;
       
         if ($pattern || input.value !==""){

             let regex = new RegExp($pattern)

             if (!regex.exec(input.value)){

              
                 if (input.id !== "sopport"){
                    
                     if(input.nextSibling.id !== input.id){
                        input.classList.add("error")
                        const $span = document.createElement("span");
                        $span.id = input.id;
                        $span.textContent = input.title;
                        $span.setAttribute("data-name",input.id)
                        $span.classList.add("msError")
                        input.insertAdjacentElement("afterend",$span)
                        }
                       
                    }else{

                        alert("hola")
                    }
                        
                }
         
            }
           buscarCheckAceptar(input);
           buscarInputQueryType(input);
    })
   
}

function crearSpan (input){

    const $span = document.createElement("span");
    $span.id = input.id;
    $span.textContent = input.title;
    $span.classList.add("msError")
    input.insertAdjacentElement("afterend",$span)
   
}
function buscarCheckAceptar (input){
    if (input.id === "aceptar"){
        if(document.getElementsByName("aceptar")[0].checked === false){
            if(input.nextSibling.id !== input.id){

                crearSpan(input);
            }
        }
    
       
    }
}

function buscarInputQueryType(input){
    if (input.id === "sopport1"){
        if(document.getElementsByName("query")[0].checked === false && document.getElementsByName("query")[1].checked === false){
            
            if(input.nextSibling.id !== input.id){
                crearSpan(input);
            }
          
        }else{
            const $span = document.querySelector("form [data-name]")
            if($span){
                $span.style.display ="none";
                console.log(document.querySelector("form [data-name]"));
                console.log(input);
            }
         
        }

    }
}

function radioColor(){
    const $inputQuery = document.getElementsByName("query");
    for(let i = 0; i < $inputQuery.length; i++){

    if($inputQuery[i].checked === true){
        $inputQuery[i].parentElement.style.backgroundColor = "var(--Green_200_lighter)";
        if($inputQuery[1].parentElement.nextSibling.id === $inputQuery[1].parentElement.id){
            $inputQuery[1].parentElement.nextSibling.style.display ="none"
        }



    }

    if($inputQuery[i].checked === false){
        $inputQuery[i].parentElement.style.backgroundColor = "white";
    }
   
}
}

document.addEventListener("click",(e) => {
    if(e.target.matches(".btn_submit")){
        validarFormulario(e)
        
    }

    if (e.target.matches(".radios")){
        radioColor();
    }

})