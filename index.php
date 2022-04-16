<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <style>
        
        img{
            width: 100%;
        }
        h1{
            white-space: pre-wrap;
        }
        .container-datos{
            display: flex;
            flex-wrap: wrap;
            margin-top: 100px;
            justify-content: space-evenly;
        }
        .container-img{
            width: 100%;
            max-width: 320px;
        }
        p,h2{
            text-align: center;
        }
    </style>


    <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="nav navbar-nav">

            <div class="card">
                <button id="amd-button"><img class="card-img-top" src="./img//amd.jpg" alt="Amd"></button>
                <div class="card-body">
                    <h4 class="card-title">AMD</h4>
                    <p class="card-text"></p>
                </div>
            </div>


            <div class="card">
                <button id="intel-button"><img class="card-img-top" src="./img/intel.png" alt="intel"></button>
                <div class="card-body">
                    <h4 class="card-title">Intel</h4>
                </div>
            </div>

        </div>
    </nav>


    <form  class="container bg-primary p-3 border border-dark rounded">
        <div>

            <div class="form-group">
                <label for="generacion">Generacion</label>
                <select class="form-control text-center" name="generacion" id="generacion"></select>
            </div>



            <div class="form-group">
                <label for="procesadores">Procesador</label>
                <select class="form-control text-center" name="procesadores" id="procesadores"></select>
            </div>
        
            <div class="form-group">
                <label for="mother">Motherboard</label>
                <select class="form-control text-center" name="motherboard" id="mother"></select>
            </div>

            <div class="form-group">
                <label for="memory">Memoria</label>
                <select class="form-control text-center" name="memory" id="memory"></select>
            </div>

            <div class="form-group">
                <label for="ram">Memoria</label>
                <select class="form-control text-center" name="ram" id="ram"></select>
            </div>


            <button type="submit" class="mt-3 btn btn-secondary">Enviar</button>

        </div>
        

    </form>

        <div class="container container-datos">
            <div class="container-img" id="img-pro"></div>
            <div class="container-img" id="img-mother"></div>
            <div class="container-img" id="img-memory"></div>
            <div class="container-img" id="img-ram"></div>
        </div>
       

    
   

    <div id="app"></div>

    <button id="Mostrar">Mostrar</button>


  



        <form  class="container bg-primary p-3 border border-dark rounded">
            <legend class="text-center">Enviar PDF y correo</legend>
               
    
            <div class="container">
                 <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" name="nombre" id="nombre" aria-describedby="emailHelpId" placeholder="Tu nombre">
                    </div>

                    <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="Tu email">
                    </div>

                
                    <div class="form-group">
                    <label for="asunto">Asunto</label>
                    <input type="text" class="form-control" name="asunto" id="asunto" aria-describedby="emailHelpId" placeholder="Tu asunto">
                    </div>


                    <div class="form-group">
                    <label for="mensaje">Mensaje</label>
                    <textarea class="form-control" name="mensaje" id="mensaje" rows="3"></textarea>
                    </div>

                    <button type="submit" class="mt-3 btn btn-secondary">Enviar</button>
                
                </div>


        </form>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="./script.js" type="module"></script>
</body>

</html>