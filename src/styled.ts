import styled from "styled-components";

export const HeaderMenu = styled.header`

    nav {
        display: flex;
        align-items: center;
        padding: 0 20px; 
        width: 100%;
        height: 60px; 
        position: relative; 
    }

    .imgContainer {
        position: absolute;
        left: 30px; 
        top: 50%;
        transform: translateY(-50%);
    }

    img {
        height: 40px; 
    }

    .HeaderMenu {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        flex: 1;
        margin-left: 80px; 
        font-weight: 300; 
        font-size: 16px;
        text-transform: uppercase; 
    }

    .li1 {
        margin: 0 15px;
        cursor: pointer;
    }

    .RightHeaderMenu {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        margin-right: 20px; 
    }

    .li2 {
        margin-left: 15px;
        cursor: pointer;
    }
`;

export const LoginWrapper = styled.section`



    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: rgb(15, 97, 192);
        
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        
    }

    .wrapper {
        width: 420px; 
        background: rgba(0, 0, 0, 0.806);
        color: #fff;
        border-radius: 10px;
        padding: 30px 40px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 
        margin: 0 auto; 
    }

    .wrapper h1 {
        font-size: 36px;
        text-align: center;
    }

    .wrapper .input-box {
        position: relative;
        width: 100%;
        height: 50px;
        margin: 30px 0;
        display: flex;
        align-items: center;
    }

    .input-box input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder {
        color: #fff;   
    }

    .input-box i {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        color: #fff;
    }

    .wrapper .lembrar-senha {
        display: flex;
        justify-content: space-between;
        font-size: 15.5px;
        margin: -15px 0 15px;
    }

    .lembrar-senha label input {
        accent-color: #fff;
        margin-right: 3px;
    }

    .lembrar-senha a {
        color: #fff;
        text-decoration: none;
    }

    .lembrar-senha a:hover {
        text-decoration: underline;
    }

    .wrapper .btn {
        width: 100%;
        height: 40px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }

    .wrapper .cadastrar-link {
        font-size: 15.5px;
        text-align: center;
        margin-top: 20px;
        margin: 20px 0 15px;
    }

    .cadastrar-link p a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }

    .cadastrar-link p a:hover {
        text-decoration: underline;
    }
`;

export const Propaganda = styled.section`

    body {
        margin: 0;
    }

    .Artes {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 180px; 
        margin-top: 50px;
    }

    .Promocao {
        width: 38vh; 
        height: auto; 
        border-radius: 8px;
    }
`;

export const Aparelhosss = styled.section`

    .Pai {
        
        flex-wrap: wrap;                        
        gap: 12px;
        justify-content: center;                
        max-width: 1200px;                      
        margin: 0 auto;                        
        text-align: center;                     
        padding: 12px;        
        margin-top: 100px;  
        display: grid;
        grid-column: 2fr 2fr 2fr; 
    }

    .Cards {
        width: 300px;                          
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
       
        flex-direction: column;
        justify-content: space-between;
        background-color: #FFF;

    }

    .Cards img {
        width: 100%;
        height: auto;
        max-height: 200px;                     
        object-fit: contain;                   
        margin-bottom: 10px;
        background-color: #FFF;
    }

    .ParteInferior {
        flex-grow: 1;                           
        text-align: center;   
        background-color: #FFF;                  
    }

    .Titulo {
        font-size: 18px;
        margin-bottom: 8px;
        text-align: center;   
        background-color: #FFF;                 
    }

    .Descricao {
        margin: 4px 0;
        background-color: #FFF;
    }

    .Valor {
        font-weight: bold;
        font-size: 20px;
        background-color: #FFF;
        margin-top: 10px;
    }

    .Comprar {
        display: block;
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px;
        width: 100%;
        text-align: center;
        margin-top: 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .Comprar:hover {
        background-color: #0056b3;              
    }
`;
export const Servicos = styled.section`
    .servicos-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        padding: 20px;
        
    }

    
    .servico-card {
        background-color:#93c5fd; 
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease;
    }

   
    .servico-card .titulo {
        font-size: 1.5rem;
        font-weight: bold;
        color: #3c2c1e; 
        text-align: center;
        margin-bottom: 10px; 
        background-color: #93c5fd;
    }

    
    .servico-card .descricao {
        font-size: 1rem;
        color: #5a4628; 
        text-align: center;
        background-color: #93c5fd;
    }

 
    .servico-card:hover {
        transform: scale(1.05);
    }
 
 
`
export const PaiServico = styled.section`
    display: grid;
    grid-template-columns: 2fr 2fr ;
    
    
    .Paih2 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        align-items: center;
        margin-bottom: 10px;
    }

 
`
export const PaiProdutos = styled.section`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr ;
 
   
`
