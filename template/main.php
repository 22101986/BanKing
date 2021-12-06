
<main id="main" class="opacity-50" >

<?php require "data/accounts.php";
  
  for($i = 0; $i <=2; $i++) {

  echo  '<div class=" d-flex  align-items-center block" style="width:350px;margin:2px;padding:2px">
    
    <table class="table m-2 p-2">
      <thead>
        <tr>
          <th>' . $accountInfos[$i]["owner"] .  '</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>compte</th>
          <td>' . $accountInfos[$i]["name"] . '</td>
          <td>' . $accountInfos[$i]["number"] . '</td>
        </tr>
        <tr>
          <th>solde</th>
          <td>' . $accountInfos[$i]["amount"] . '</td>
          <td>€</td>
          
        </tr>
        <th>dernière opération</th>
        <td style="color: white;">' . $accountInfos[$i]["last_operation"] . '</td>
      </tr>
      </tbody>
      
    </table>';
    
  }

?>

    

  </main>
