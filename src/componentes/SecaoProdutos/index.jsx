import Image from "next/image";
import estilos from "@/styles/SecaoProdutos.module.css";
import oculos01 from "../../../public/oculos01.png";
import oculos02 from "../../../public/oculos02.png";
import oculos03 from "../../../public/oculos03.png";
import oculos04 from "../../../public/oculos04.png";

export default function SecaoProdutos() {
    return(
        <section className={estilos.secao} id="PRODUTOS">
            <h3 className={estilos.titulo}>Nossos produtos</h3>
            <p className={estilos.paragrafo}>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p className={estilos.paragrafo}>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className={estilos.produtos}>
                <div className={estilos.produto}>
                    <h4 className={estilos.subtitulo}>Óculos de grau</h4>
                    <Image src={oculos01} alt="oculos" className={estilos.oculos}/>
                    <p>R$ 500,00</p>
                </div>
                <div className={estilos.produto}>
                    <h4 className={estilos.subtitulo}>Óculos transition</h4>
                    <Image src={oculos02} alt="oculos" className={estilos.oculos}/>
                    <p>R$ 750,00</p>
                </div>
                <div className={estilos.produto}>
                    <h4 className={estilos.subtitulo}>Óculos de sol</h4>
                    <Image src={oculos03} alt="oculos" className={estilos.oculos}/>
                    <p>R$ 700,00</p>
                </div>
                <div className={estilos.produto}>
                    <h4 className={estilos.subtitulo}>Óculos infantil</h4>
                    <Image src={oculos04} alt="oculos" className={estilos.oculos}/>
                    <p>R$ 500,00</p>
                </div> 
            </div>
            <h3 className={estilos.subtitulo}>Todos os nossos produtos incluem:</h3>   
            <ul className={estilos.lista}>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>   
        </section>
    )
}