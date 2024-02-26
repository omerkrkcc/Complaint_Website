let input = document.getElementById("inputText");
        let list= document.getElementById("list");
        let minimalValue = 3;
        let listNum = 0;


  

addList=()=>{


    let firmaadi=$("#firmaadi").val();
    

    let baslik=$("#baslik").val();
   
    // get
    let inputText = filterList(input.value);
    // set 
   if (inputText) {
    list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
            <div class="row row1">
                
                <div style="text-align:left;" class="col-8">
                    <span class=" h1" id="text${listNum}"> ${firmaadi} </span>
                </div> <br><br>

                <div  style="text-align:left;" class="col-8">
                    <span class=" h2" id="text${listNum}"> ${baslik} </span>
                </div> <br><br>

                <div  style="text-align:left;" class="col-8">
                    <span class=" h4" id="text${listNum}"> ${inputText} </span>
                </div>


        </div>    
                </li> <hr>  `  ;
        input.value=" ";
        
        
        listNum++;

   }
}

$(function(){
    $(".eklemeeventi").click(function(){
        $("#baslik").val(" ");
        $("#firmaadi").val(" ");
    });
});
done=(listId)=>{ 
    let checkbox = document.getElementById(`check${listId}`);
    let current = document.getElementById(`text${listId}`);
    let classExit=current.classList.contains("text-decoration-line-through");
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
    }else{
        current.classList.add("text-decoration-line-through");
    }
    
}

filterList=(x)=>{
       if (x) {
            if (x.length >= minimalValue) {
                return x;
            }
            else{
                alert("En az 3 harfli olmalı.")
            }
       }
       else{
            return false;
       }
}

editList=(listId)=>{
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("Düzenle?",currentText.innerHTML);
    if (filterList(newText)) {
        currentText.innerHTML = newText; 
    }
}

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
       let deleteComfirm = confirm(`Silmek istediğinizden emin misiniz? ${current}`);
    if (deleteComfirm) {
         let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
    }
    else{
        console.log("deleted");
    }
};

$(function(){
    $(".sil").click(function(){
       $(this).parent().parent().parent().fadeOut(1000);
       $("#input").hide();
       //alert("Şikayet Silindi");

    });
});




document.getElementById("input").style.display="none";
$(function(){
    $(".duzenle1").click(function(){
        var x="";
        x=$(".icerik1").text();
        $("#input").show(700);
        $("#textbox").val(x);

        $("#button1").click(function(){
            
            var tarih = new Date();
            
  
            var y="";
            y=$("#textbox").val();
            $(".icerik1").text(y);
            alert("Şikayet Düzenlendi");
            $("#input").hide(1000);
            $("#tarih").text(tarih.toDateString());
            

        });
       

    });
});

document.getElementById("input2").style.display="none";
$(function(){
    $(".duzenle2").click(function(){
        var x="";
        x=$(".icerik2").text();
        $("#input2").show(700);
        $("#textbox2").val(x);

        $("#button2").click(function(){
            var tarih = new Date();
            var y="";
            y=$("#textbox2").val();
            $(".icerik2").text(y);
            alert("Şikayet Düzenlendi");
            $("#input2").hide(1000);
            $("#tarih2").text(tarih.toDateString());
            

        });


    });
});


document.getElementById("input3").style.display="none";
$(function(){
    $(".duzenle3").click(function(){
        var x="";
        x=$(".icerik3").text();
        $("#input3").show(700);
        $("#textbox3").val(x);

        $("#button3").click(function(){
            var tarih = new Date();
            var y="";
            y=$("#textbox3").val();
            $(".icerik3").text(y);
            alert("Şikayet Düzenlendi");
            $("#input3").hide(1000);
            $("#tarih3").text(tarih.toDateString());
            

        });

    });
});



document.getElementById("input4").style.display="none";
$(function(){
    $(".duzenle4").click(function(){
        var x="";
        x=$(".icerik4").text();
        $("#input4").show(700);
        $("#textbox4").val(x);

        $("#button4").click(function(){
            var tarih = new Date();
            var y="";
            y=$("#textbox4").val();
            $(".icerik4").text(y);
            alert("Şikayet Düzenlendi");
            $("#input4").hide(1000);
            $("#tarih4").text(tarih.toDateString());
            

        });

    });
});


document.getElementById("input5").style.display="none";
$(function(){
    $(".duzenle5").click(function(){
        var x="";
        x=$(".icerik5").text();
        $("#input5").show(700);
        $("#textbox5").val(x);

        $("#button5").click(function(){
            var tarih = new Date();
            var y="";
            y=$("#textbox5").val();
            $(".icerik5").text(y);
            alert("Şikayet Düzenlendi");
            $("#input5").hide(1000);
            $("#tarih5").text(tarih.toDateString());
            

        });

    });
});


document.getElementById("input6").style.display="none";
$(function(){
    $(".duzenle6").click(function(){
        var x="";
        x=$(".icerik6").text();
        $("#input6").show(700);
        $("#textbox6").val(x);

        $("#button6").click(function(){
            var tarih = new Date();
            var y="";
            y=$("#textbox6").val();
            $(".icerik6").text(y);
            alert("Şikayet Düzenlendi");
            $("#input6").hide(1000);
            $("#tarih6").text(tarih.toDateString());
            

        });

    });
});



document.getElementById("eskisikayetler").style.display="none";

$(".getir").click(function(){
    $("#eskisikayetler").show(1000);
    $("#oncekisikayetler").show(1000);
});






