import SearchBar from './components/SearchBar';
import Card from './components/Card';


function App(){
  return(
    <>   
    <header>
      <div className="header-container">
        <h1><span className="code" >Code</span>Lab</h1>
        <SearchBar/>              
      </div>      
    </header>  
    <main>
      <div className="main-container">
        <Card 
          date="17 de ago, 2024"
          title="O que é linguagem de programação? Conheça as principais tecnologias."
          description="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."        
        />

        <Card 
          date="12 de jul, 2024"
          title="GitHub agora permite fazer login sem precisar de senha"
          description="O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."        
        />

        <Card 
          date="21 de jun, 2024"
          title="Por que os hiperlinks são azuis em sua maioria?"
          description="Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."        
        />
      </div>
    </main>
    <footer>
      <p>Desenvolvido por Fernanda em conjunto com o exercício da CodeLabs utilizando React, Typescript e Vite.</p>
      <p>08/2024</p>      
    </footer>    
    </>
  )
}

export default App;