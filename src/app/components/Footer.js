import Image from "next/image"

const Footer = () => {
  return (
    <div className="footer_conteiner">
    <div>
       <Image
              src='/assets/Logo.png'
              width={80}
              height={84}
              alt="Krato"
        />
    </div>
    <div className="footer_social">
        <a href="#"><Image src='/assets/facebook.svg' width={24} height={24} alt="logo facebook"/></a>
        <a href="#"><Image src='/assets/instagram.svg' width={24} height={24} alt="logo instagram"/></a>
        <a href="#"><Image src='/assets/twitter.svg' width={24} height={24} alt="logo twitter"/></a>
    </div>
    <div className="footer_text">
        <p>&copy; 2025 Recipe Market. Todos los derechos reservados.</p>
    </div>
    </div>
  )
}

export default Footer