function xxx(){
    var x=document.getElementsByName("x");  // 주의

    var b = x[0].checked;
    var c = x[1].checked;

    // dw(b);
    // dw(c);


    // hr();

    if(b==true){
        var z = x[0].value;
        dw(z); 
    }else if(c==true){
        var z = x[1].value;
        dw(z); 
    }

    // for(var i=0;i<x.length;i++){		
    //     // ipSexes[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻	
    //     if(x[i].checked == true){	
    //         sex = x[i].value; // 해당 라디오 버튼의 값을 변수에 저장	
    //     }	
    // }		
}