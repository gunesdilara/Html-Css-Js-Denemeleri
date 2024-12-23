function kontrol(){
    var netSayisi= document.getElementById("netler").value;
    if(netSayisi<0){
        document.getElementById("ekran").innerText="Geçersiz sayı!";
    }
    else if(netSayisi<10){
        document.getElementById("ekran").innerText="Net sayınız ortalamanın altında";
    }
    else if(netSayisi<25){
        document.getElementById("ekran").innerText="Net sayınız ortalamaya yakın";
    }
    else if(netSayisi<=40){
        document.getElementById("ekran").innerText="Net sayınız ortalamanın üstünde";
    }
    else{
        document.getElementById("ekran").innerText="Geçersiz Sayı!";
    }
}

function hangiGun(){
    var tarih= new Date();
    var gun= tarih.getDay();
    switch(gun){
        case 0:
            alert("pazar");
            break;
        case 1:
            alert("pazartesi");
            break;
        case 2:
            alert("salı");
            break;
        case 3:
            alert("çarşamba");
            break;
        case 4:
            alert("perşembe");
            break;
        case 5:
            alert("cuma");
            break;
        case 6:
            alert("cumartesi");
            break;            
    }
}

