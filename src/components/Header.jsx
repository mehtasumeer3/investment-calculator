import Logo from '../assets/investment-calculator-logo.png';
export default function Header(){
    return(
        <header id="header">
            <img src= {Logo} alt="logo of a money bag" />;
            <h1>Imvestment Calculator</h1>
        </header>
    )
}