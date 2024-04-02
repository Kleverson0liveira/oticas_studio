import Image from "next/image";
import Link from "next/link";
import estilos from "@/styles/Topo.module.css";
import logo from '../../../public/logo.png';

export default function Topo(){
    return(
        <header className={estilos.topo}>
            <Image src={logo} alt="logomarca" className={estilos.logo}/>
            <nav className={estilos.links}>
                <Link href="#PRODUTOS" className={estilos.link}>PRODUTOS</Link>
                <Link href="#SOBRE" className={estilos.link}>SOBRE</Link>
                <Link href="#CONTATO" className={estilos.link}>CONTATO</Link>
            </nav>
        </header>
    )
}