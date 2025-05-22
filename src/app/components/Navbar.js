import Image from "next/image";

const Navbar = () => {
   return(
   <div className="nav_conteiner">
    <div>
        <Image
        src='/assets/Logo.png'
        width={80}
        height={84}
        alt="Logo gallo"
        />
    </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar