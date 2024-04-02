import estilos from "@/styles/SecaoContato.module.css";
import Image from "next/image";
import local from "../../../public/local.png";
import fb from "../../../public/fb.png";
import tt  from "../../../public/tt.png";
import telefone from "../../../public/telefone.png";
import ig from "../../../public/ig.png";
import email from "../../../public/email.png"

export default function SecaoContato(){
    return(
       <section className={estilos.conteudo} id="CONTATO">
        <h3 className={estilos.titulo_secao}>Fale conosco</h3>
        <p className={estilos.paragrafo}>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
        <div className={estilos.secoes}>
            <div className={estilos.secao}>
                <h3 className={estilos.titulo_subsecao}> Nossos Contatos</h3>
                <div className={estilos.sub_secao}>
                    <Image src={local} alt="localizacao" className={estilos.icone}/>
                    <span>Nova Iguaçu, RJ</span>
                </div>
                <div className={estilos.sub_secao}>
                    <Image src={telefone} alt="telefone" className={estilos.icone}/>
                    <span>(21) 9999-9999</span>
                </div>
                <div className={estilos.sub_secao}>
                    <Image src={email} alt="email" className={estilos.icone}/>
                    <span>contato@oticavida.com</span>
                </div>
            </div>
            <div className={estilos.secao}>
                <h3 className={estilos.titulo_subsecao}>Nossas Redes Sociais</h3>
                <div className={estilos.sub_secao}><Image src={fb} alt="facebook" className={estilos.icone}/><span>/OticaVida</span></div>
                <div className={estilos.sub_secao}><Image src={ig} alt="instagram" className={estilos.icone}/><span>@oticavidarj</span></div>
                <div className={estilos.sub_secao}><Image src={tt} alt="twitter" className={estilos.icone}/><span>@oticavidarj</span></div>
            </div>
        </div>
       </section>
    )
}