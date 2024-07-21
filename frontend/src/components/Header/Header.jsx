import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Discover a diverse menu where each dish is a culinary journey, crafted to satisfy every craving and delight the senses.</p>
            <a href='#explore-menu'><button className='hd-btn'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header