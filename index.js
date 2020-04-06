function option1(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            document.getElementById("requested").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","Requests/option1.txt",true);
    xhttp.send();
}

function option2(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            document.getElementById("requested").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","Requests/option2.txt",true);
    xhttp.send();
}

function option3(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            document.getElementById("requested").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","Requests/option3.txt",true);
    xhttp.send();
}