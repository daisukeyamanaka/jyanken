

/*じゃんけんロジック*/
$("#gu_btn").on('click',function(){   
const min = 0;
const max = 2;
const randomNumber=Math.floor(Math.random()*(max-min+1))+min;
if(randomNumber=== 0){
  $("#com_hand").text('グー');
  $("#result").text('あいこ');
  enemyData["hp"] = enemyData["hp"] - 100;
  document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
  document.getElementById("attackPoint").textContent = "ダメージ数："+ 100;

} else if(randomNumber === 1) {
  $("#com_hand").text('チョキ');
  $("#result").text('勝利');
  enemyData["hp"] = enemyData["hp"] - 150;
  document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
  document.getElementById("attackPoint").textContent = "ダメージ数："+150;
 
   
} else if(randomNumber === 2) {
  $("#com_hand").text('パー');
  $("#result").text('敗北');
  enemyData["hp"] = enemyData["hp"] - 50;
  document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
  document.getElementById("attackPoint").textContent = "ダメージ数："+50;
  playerData["hp"] = playerData["hp"] - 150;
  document.getElementById("currentPlayerHp").textContent = playerData["hp"];
}

 //0未満にしない処理
 if(playerData["hp"] <=0){
  playerData["hp"] = 0;
  $("#com_hand").text('');
  document.getElementById("currentPlayerHp").textContent = playerData["hp"];
  document.getElementById("wilderness").width = "0%";
  document.getElementById("video1").style.display = "block"
    var v = document.getElementById("video1");
    v.load();
    v.play();
 
 }




     //0未満にしない処理
if(enemyData["hp"] <=0){
    enemyData["hp"] = 0;
    $("#com_hand").text('');
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent="瀕死"
    document.getElementById("wilderness").width = "0%";
    document.getElementById("video").style.display = "block"
    var v = document.getElementById("video");
    v.load();
    v.play();
   }

});
$("#cho_btn").on('click',function(){   
  const min = 0;
  const max = 2;
  const randomNumber=Math.floor(Math.random()*(max-min+1))+min;
  if(randomNumber=== 0){
    $("#com_hand").text('グー');
    $("#result").text('敗北');
    enemyData["hp"] = enemyData["hp"] - 1;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数："+ 1;
    playerData["hp"] = playerData["hp"] - 500;
    document.getElementById("currentPlayerHp").textContent = playerData["hp"];
  
  } else if(randomNumber === 1) {
    $("#com_hand").text('チョキ');
    $("#result").text('あいこ');
    enemyData["hp"] = enemyData["hp"] - 5;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数："+5;
     
  } else if(randomNumber === 2) {
    $("#com_hand").text('パー');
    $("#result").text('勝利');
    enemyData["hp"] = enemyData["hp"] - 500;
    document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
    document.getElementById("attackPoint").textContent = "ダメージ数："+500;
 
  }
  
   //0未満にしない処理
   if(playerData["hp"] <=0){
    playerData["hp"] = 0;
    $("#com_hand").text('');
    document.getElementById("currentPlayerHp").textContent = playerData["hp"];
    document.getElementById("wilderness").width = "0%";
    document.getElementById("video1").style.display = "block"
    var v = document.getElementById("video1");
    v.load();
    v.play();
    
   }


  
  
       //0未満にしない処理
  if(enemyData["hp"] <=0){
      enemyData["hp"] = 0;
      $("#com_hand").text('');
      document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
      document.getElementById("attackPoint").textContent="瀕死"
      document.getElementById("wilderness").width = "0%";
      document.getElementById("video").style.display = "block"
      var v = document.getElementById("video");
      v.load();
      v.play();
     }
  
  });
  
  $("#par_btn").on('click',function(){   
    const min = 0;
    const max = 2;
    const randomNumber=Math.floor(Math.random()*(max-min+1))+min;
    if(randomNumber=== 0){
      $("#com_hand").text('グー');
      $("#result").text('勝利');
      enemyData["hp"] = enemyData["hp"] - 290;
      document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
      document.getElementById("attackPoint").textContent = "ダメージ数："+ 290;
    
    
    } else if(randomNumber === 1) {
      $("#com_hand").text('チョキ');
      $("#result").text('敗北');
      enemyData["hp"] = enemyData["hp"] - 40;
      document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
      document.getElementById("attackPoint").textContent = "ダメージ数："+40;
      playerData["hp"] = playerData["hp"] - 290;
      document.getElementById("currentPlayerHp").textContent = playerData["hp"];
       
    } else if(randomNumber === 2) {
      $("#com_hand").text('パー');
      $("#result").text('あいこ');
      enemyData["hp"] = enemyData["hp"] - 10;
      document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
      document.getElementById("attackPoint").textContent = "ダメージ数："+10;
    }
    
      //0未満にしない処理
     if(playerData["hp"] <=0){
      playerData["hp"] = 0;
      $("#com_hand").text('');
      document.getElementById("currentPlayerHp").textContent = playerData["hp"];
      document.getElementById("wilderness").width = "0%";
      document.getElementById("video1").style.display = "block"
      var v = document.getElementById("video1");
      v.load();
      v.play();
      
      
     }
  

    
    
         //0未満にしない処理
    if(enemyData["hp"] <=0){
        enemyData["hp"] = 0;
        $("#com_hand").text('');
        document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
        document.getElementById("attackPoint").textContent="瀕死"
        document.getElementById("wilderness").width = "0%";
        document.getElementById("video").style.display = "block"
        var v = document.getElementById("video");
        v.load();
        v.play();
       }
    
    });
   


/*プレイヤー情報*/
const playerData = {
    name: "フリーザ　　ギニュー特戦隊",　
    hp: 1999
  
}
const enemyData ={
    name:"孫悟空",
    hp: 1999
}
document.getElementById("currentPlayerHp").textContent = playerData["hp"];
document.getElementById("playerName").textContent = playerData["name"];
document.getElementById("enemyName").textContent = enemyData["name"];
document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
document.getElementById("maxEnemyHp").textContent = enemyData["hp"];