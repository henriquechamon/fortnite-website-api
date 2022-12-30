<?php

use FortniteApi\FortniteApi;

require_once __DIR__ . '/vendor/autoload.php';
$mensagem = "";
$api = new FortniteApi("de1dd3d8-274b-42fe-a32e-9c08507ef5be");
if(isset($_POST['search'])) {
    if(!empty($_POST['skin'])) {
        $resposta = addslashes($_POST['skin']);

$teste = $api->cosmetics->searchAsync(["Name" => $resposta]);

$response = $teste->await();

$ip =  $_SERVER['REMOTE_ADDR'];
echo "<pre>";
//print_r($response);
echo "</pre>";
        if(isset($response)) {
            

             
            $image = $response->images["icon"]->url;
            $description = $response->description;
            $raridade = $response->rarity;
            $att = $response->lastUpdate;
            $set = $response->set;
           $type = $response->type;
        } else { 
            $mensagem = "Item inexistente, tente colocar o nome em ingles!";
        }
    }
}
?>

<!DOCTYPE html>
<html>

<head>

    <title>YuppiNite - Cosmeticos @henriqdarene</title>
 <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_Kfd-9KbrFtQXAoDRw6ZPVs8v6nXyNOqsIEVG3s7rcoc0QAEEbSts_x_nbIcKvzaCmA&usqp=CAU">
    <link rel="stylesheet" href="style.css">
    <link rel="manifest" href="img/site.webmanifest">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script type="module" defer src="cosmeticos.js"></script>
    <script defer src="jquery-3.6.0.js"></script>
    
</head>

<body>

    <div class="menu">

        <a id="link" href="/"> Loja </a>

        <a id="link" href="#"> Cosmeticos </a>
        
        <a id="link" href="https://discord.gg/rywRAUHDQg"> Discord Oficial</a>
    </div>
    <header>
        <h1>Insira o nome do seu item.</h1>
        <h4> Lembrando que o nome tem que ser em ingles!</h4>
    </header>
    <div class="teste" style="display: flex; flex-direction: column; justify-content: center; align-items: center">
        <div class="stat_response">
            <form method="post" action="">
            <input type="text" placeholder="Exemplo: WildCat" id="playerName" name="skin" onfocus="if (this.placeholder=='Exemplo: Black Knight') this.placeholder='';">
            <button type="submit" id="getName" name="search">Pesquisar</button> <a href=""><button type="submit" id="getName"  name="reset" >Resetar</button> 
            </a>
        </form>
            </div>
    <?php if($mensagem != ""){ 
            ?>
        
                <h3 style="color:red"> <?php echo $mensagem ?>
            <?php
    } else {
        ?>
        <img src="<?php echo $image ?>" alt="" width="210" height="210">  
 <?php
                    if(isset($response->variants[0])) {
                for($x = 1; $x < count($response->variants[0]->options); $x++) {
                    ?>
                    <img src="<?php echo $response->variants[0]->options[$x]->image->url ?>" width="90" height="90">
                    <?php
                }
            }
       ?>
        <h4 style="color:purple"> Cosmético: <?php echo $resposta ?> </h4>
        <h4 style="color:blue"> Descrição: <?php echo $description ?> </h4>
       <h4 style="color:pink"> Tipo: <?php echo $raridade ?> </h4>
        <h4 style="color:yellow"> Set do cosmético: <?php echo $set ?> </h4>
       <h4 style="color:orange"> Ultíma vez vista/Ultíma atualização: "<?php echo $att ?>"</h4>
    
  


</div>
    </div>
    </footer>
</body>

</html>
