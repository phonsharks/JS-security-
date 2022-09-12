//ascii tablosuna göre 97-65 arasında oynama olmaktado.26 Rakamım ise alfabede var olan değeri göstermekte

const GetRandomLower=()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

const GetRandomUpper=()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

const GetRandomNumber=()=>{
    return String.fromCharCode(Math.floor(Math.random()*10)+48); 
}

const GetRandomSymbol=()=>{
    const symbols="!'^+%&/^%&'&$>>£@½>£$>£>"
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const RandomFunctiton={GetRandomLower,GetRandomNumber,GetRandomSymbol,GetRandomUpper};

const GeneratePassword=()=>{
    const length=25;
    let GeneratedPassword=""
    for(let z=0;z<length;z++){
        // burada sonda bulunmakta olan () fonksiyon olduğumuzu belirtmekte
        GeneratedPassword+=Object.values(RandomFunctiton)[Math.floor(Math.random()*4)]();
    }
    return GeneratedPassword;
}

const SpanResult=document.getElementById("result");
const GenerateButton=document.getElementById("generate");

GenerateButton.addEventListener("click",()=>{
    SpanResult.innerText=GeneratePassword()
})
