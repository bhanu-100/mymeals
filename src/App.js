import React from "react";
import logo from "./image/logo.png"
import pizza from "./image/pizza logo.jpg"
import bulk from "./image/bulkodering.jpg"
import delivery from "./image/delivery logo.png"
import logo1 from "./image/logo1.png" 
import logo2 from "./image/logo2.png" 
import logo3 from "./image/logo3.png" 
import logo4 from "./image/logo4.png" 
function App() {
  return (
    <div className="App">
    <header>
        <nav id="navbar">
            <div id="logo">
                <img src={logo} alt="MyonlineMeal.com"/>
            </div>
            <div id="menu">
                <ul>
                    <li className="list"><a href="#Home">Home</a></li>
                    <li className="list"><a href="#Service">Services</a></li>
                    <li className="list"><a href="#client"> Our Client</a></li>
                    <li className="list"><a href="#Contact ">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <section id="Home">
        <h1 className="h-primary">Welcome to MyonlineMeal</h1>
        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti fuga officiis,
            dolorum voluptate,
            praesentium asperiores nesciunt.</p>
        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti animi fuga. Quia,
            molestiae.</p>
        <button className="btn"> Order Now</button>
    </section>
    <section id="Service-container">
        <h1 className="h-primary">Our services</h1>
        <div id="Service">
            <div className="box">
                <img src={pizza} alt=""/>
                <h2 className="hsecondary">Food Catering</h2>
                <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo minima culpa ex
                    consequatur omnis,
                    numquam temporibus eos facere! Minus distinctio dolor placeat.
                </p>
            </div>
            <div className="box">
                <img src={bulk} alt=""/>
                <h2 className="h-secondary">Bulk Odering</h2>
                <p className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque cupiditate est
                    debitis saepe optio,
                    voluptatibus corporis totam.
                </p>
            </div>
            <div className="box">
                <img src={delivery} alt=""/>
                <h2 className="h-secondary">Food Delivery</h2>
                <p className="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem animi sit
                    dignissimos ad corporis
                    sapiente praesentium! Recusandae dicta.
                </p>
            </div>
        </div>
    </section>
    <section id="client">
        <h1 className="h-primary">Our Client</h1>
        <div className="boxc">
            <div className="clientlogo"><img src={logo1} alt=""/></div>
            <div className="clientlogo"><img src={logo2} alt=""/></div>
            <div className="clientlogo"><img src={logo3} alt=""/></div>
        </div>
        <div className="boxc">
            <div className="clientlogo"><img src={logo3} alt=""/></div>
            <div className="clientlogo"><img src={logo4} alt=""/></div>
            <div className="clientlogo"><img src={logo1} alt=""/></div>
        </div>
    </section>
    <section id="contact">
        <h1 className="h-primary">Contact Us</h1>
        <div className="formgroup">
            <form method="post" action="/">
                <div className="classitem">
                    <label for="name">Name:</label>
                    <input type="text" name="name" className=" name" id="name" placeholder="Enter your name"/>
                </div>
                <div className="classitem">
                    <label for="email">Email:</label>
                    <input type="email" name="email" className=" name" id="email" placeholder="Enter your email"/>
                </div>
                 <div className="classitem">
                    <label for="phone">Phone no:</label>
                    <input type="phone" name="number" className=" name"id="phone" placeholder="Enter your phone"/>
                </div>
                <div className="classitem">
                    <label for="message">Message:</label>
                   <textarea name="message" id="message" className=" name"cols="30" rows="10"></textarea>
                </div > 
                <div className="but">
                    <button type="submit" className="btn">Submit Now</button>
                    <button type="reset" className="btn">Reset</button>
                </div>
            </form>
        </div>
    </section>
    <footer>Copyrights&copy; All Copyrights are reserved.</footer>
    </div>
  )}

export default App;
