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
}