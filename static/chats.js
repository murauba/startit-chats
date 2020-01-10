console.log("konsole");
const refr=1000;

async function lasit(){
    const ret = await fetch('chat/lasi');
    const dataObject=await ret.json();
    raadiChataRindas(dataObject);
    await new Promise(resolve =>setTimeout(resolve, refr));
    await lasit();
}

function showsimple(dati){
    const newline="</br>";
    let chats = "";
    let chatadiv=document.getElementById("chats");
    for (let rinda of dati['chats']){
        chats=chats+rinda+newline;
    }
    chatadiv.innerHTML=chats;
}

async function sutit(){
    let zinasElem=document.getElementById('zina');
    let zina=zinasElem.value;
    zinasElem.value="";
    const ret=await fetch('chat/suuti',{
        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"chats":zina})

        }
    
    );
    const dataObject=await ret.json();
    raadiChataRindas(dataObject);
}

let ievade=document.getElementById("zina");
ievade.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        sutit();
    }
})





function raadiChataRindas(dati) {
    const chatUL = document.getElementById("chat");
    // novaacam ieprieksheejo saturu
    while (chatUL.firstChild) {
        chatUL.firstChild.remove();
    }
    for (let rinda of dati["zina"]) {
      chatLI = izveidoJaunuRindu(rinda.message);
      chatUL.appendChild(chatLI);
    }
    // noskrolleejam uz leju pie peedeejaa chata texta
    var chatScrollBox = chatUL.parentNode;
    chatScrollBox.scrollTop = chatScrollBox.scrollHeight;
  }
  
  
  function izveidoJaunuRindu(zinja) { 
    let newLI = document.createElement("li");
    newLI.className = "left clearfix"
    let newDiv = document.createElement("div"); 
    newDiv.className = "chat-body clearfix"
    let newContent = document.createTextNode(zinja); 
    newLI.appendChild(newDiv); 
    newDiv.appendChild(newContent); 
    return newLI;
  }