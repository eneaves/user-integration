const NavegationBar =({children}) => {
    return (
        <div style={{
            width: "100%",
            height: "50px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}>
            <p>Dashboard</p>
            {children}
        </div>
    )   
}

export default NavegationBar;