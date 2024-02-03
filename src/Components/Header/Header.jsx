import CSS from "./Header.module.css";
function Header() {
  return (
      <header className={CSS.header}>
        <a className={CSS.logo} href="/">Pizza Day</a>
        <form>
             <input type="text" placeholder="Search for the order #"/>
        </form>
    </header>
  )
     
}
      
export default Header