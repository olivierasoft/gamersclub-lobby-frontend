import gamersclubLogo from '../../../assets/gc_logo.svg'
import {Nationality} from "./Nationality";

export function Navbar() {

    return (
        <>
            <nav className="flex items-center justify-between w-screen h-16 bg-navbar">
                <img className="ml-10 w-40 cursor-pointer" src={gamersclubLogo}/>
                <Nationality/>
            </nav>
        </>
    );
}