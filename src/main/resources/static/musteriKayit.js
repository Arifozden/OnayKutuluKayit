$(function (){
    tumArabalariGetir();
});

function tumArabalariGetir(){
    $.get("/arabalariGetir",function (arabalar){
        duzenleArabalar(arabalar);
    });
}

function duzenleArabalar(arabalar){
    let yaz="<table class='table table-striped'>";
    for (const araba of arabalar){
        yaz+="<tr>"+
            "<td>"+araba.marka+" "+araba.model+"</td>"+
            "<td><input type='checkbox' name='seciliArabalar[]' value='"+araba.marka+"'/></td>"+
            "</tr>";
    }
    yaz+="</table>";
    $("#arabalar").html(yaz);
}

function musteriKayit(){
    let arabalar="";
    const arabaArray=$("input[name='seciliArabalar[]']:checked");
    for(let seciliAraba of arabaArray){
        arabalar+=seciliAraba.defaultValue+" ";
    }

    const musteri ={
        isim : $("#isim").val(),
        soyisim : $("#soyisim").val(),
        arabaMarka : arabalar
    };
    const url="/musteriKayit";
    $.post(url,musteri,function (){
        window.location.href='/';
    });
}