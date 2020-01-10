console.log("konsole");
const refr=5000

async function lasit(){
    const ret = await fetch('chat/lasi');
    const dataObject=await ret.json();
    showsimple(dataObject);
}

function showsimple(dati){
    const newline="</br>";
    let chats = "";
    let chatadiv=document.getElementById("chats");
    for (let rinda of dari['chats']){
        chats=chats+rinda+newline;
    }
    chatadiv.innerHTML=chats;
}