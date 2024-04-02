import estilos from "@/styles/SecaoSobre.module.css"
import Image from "next/image"
import atendimento from "../../../public/atendimento.png"
import loja from "../../../public/loja.png"

export default function SecaoSobre(){
    return(
        <section id="CONTATO" className={estilos.secao}>
            <h3 className={estilos.titulo_secao}>QUEM SOMOS NÓS?</h3>
            <p className={estilos.paragrado}>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            <div className={estilos.cards}>
                <div className={estilos.card}>
                    <Image src={loja} alt="estabelecimento" className={estilos.imagem}/>
                </div>
                <div className={estilos.card} >
                    <div>
                    <h4 className={estilos.subtitulo}>NOSSAS FILIAIS</h4>
                    <p className={estilos.paragrafo}>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                </div>
                <div className={estilos.card} >
                    <div>
                    <h4 className={estilos.subtitulo}>ATENDIMENTO FLEXIVEL</h4>
                    <p className={estilos.paragrafo}>Possuimos uma equipe treinada para lhe atender</p>
                    </div>
                </div>
                <div className={estilos.card}>
                    <Image src={atendimento} alt="atendimento no caixa" className={estilos.imagem}/>
                </div>
            </div>
        </section>
    )
}