import React from 'react'
import imgRex from '../rex.jpg'
import imgBrick from '../BrickGame.jpg'
import imgReloj from '../relojJs.jpg'
import imgCalc from '../calcJs.jpg'
import imgMusic from '../music.jpg'
import imgCat from '../cat.png'
import imgDados from '../dados.jpg'







const Portfolio = () => {
    return (
        <div className="portfolio" >
                      <a name='portfolio'></a>

            <h2 id='portfo'>Portfolio</h2>

            <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="showall" role="tabpanel" aria-labelledby="showall-tab">
    <div className="Portfolio"><a href="https://mgadesarrollo.github.io/JavaScript/juegoTRexJS/" target="_blank"><img className="card-img" src={imgRex} alt=""/></a><div className="desc">T-Rex Game JS</div></div>
    <div className="Portfolio"><a href="https://mgadesarrollo.github.io/JavaScript/juego%20ladrillos%20js/" target="_blank"><img className="card-img" src={imgBrick} alt=""/></a><div className="desc">Brick Game JS</div></div>
    <div className="Portfolio"><a href="https://mgadesarrollo.github.io/JavaScript/Reloj digital" target="_blank"><img className="card-img" src={imgReloj} alt=""/></a><div className="desc">Reloj JS</div></div>
    <div className="Portfolio"><a href="https://mgadesarrollo.github.io/JavaScript/javascript%20-%20calculadora/" target="_blank"><img className="card-img" src={imgCalc} alt=""/></a><div className="desc">Calc JS</div></div>
    <div className="Portfolio"><a href="https://www.youtube.com/watch?v=Hh6fGaTYJTg"target="_blank"><img className="card-img" src={imgMusic} alt=""/></a><div className="desc">Chill Music by Me!</div></div>
    <div className="Portfolio"><a href="https://mgadesarrollo.github.io/BlackCat-Game/" target="_blank"><img className="card-img" src={imgCat} alt=""/></a><div className="desc">BlackCat Game</div></div>
    <div className="Portfolio"><a href="https://www.pythonanywhere.com/user/mgadesarrollo/shares/228306abdf604aef914e7d99256fc6ec/" target="_blank"><img className="card-img" src={imgDados} alt=""/></a><div className="desc">Dados Python</div></div>

        
  </div>
  
</div>
</div>
    )
}

export default Portfolio
