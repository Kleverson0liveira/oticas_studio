import estilos from "@/styles/SecaoCapa.module.css";

export default function SecaoCapa(){
    return(
        <section className={estilos.container}>
                <div className={estilos.capa}>
                    <div>
                    <p className={estilos.paragrafo}>Preços baixos em</p>
                    <h1 className={estilos.titulo}>ÓCULOS DE <br/>GRAU E DE SOL</h1>
                    <p className={estilos.paragrafo}>Você só encontra aqui</p>
                    </div>
                </div>
            
        </section>
    )
}