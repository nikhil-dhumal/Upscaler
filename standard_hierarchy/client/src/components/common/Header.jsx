const Header = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li className="title"><a href="/">Upscaler</a></li>
        <li><a href="pricing">Pricing</a></li>
        <li><a href="enhance">Enhance</a></li>
      </ul>
      <ul className="user">
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
  )
}

export default Header