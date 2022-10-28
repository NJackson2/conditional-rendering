import {useState} from 'react'

function Hero() {
    const [user, setUser] = useState()
    console.log(user)
    // user === undefined (falsey) - yes
    // !user === truthy - yes
    // !!user === false (boolean)
    // !!!user === true (boolean)
    const handleLogin = () => {
        setUser({ firstName: 'Nick', email: 'Nick@email.com', admin: true})
    }
    const handleLogout =() => {
        setUser(undefined) // inside the parentheses, this can also be null or just leave it as undefined: depends on the philosophy we ascribe to
    }
    if(!user) { // if no user
        return <button onClick={handleLogin}>Login</button>
    }
    return (
    <>
        <h1>Hello {user.firstName}</h1>
        <button onClick={handleLogout}>Log out</button>
    </>
    )
}

export default Hero