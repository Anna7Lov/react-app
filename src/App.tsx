import { type } from 'os';
import React from 'react';
import './App.css';
import { Footer } from './Footer';

const admin = {adminName: 'Anna'}
const user = {userFirstName: 'Иван',
userShortBiography: 'Биография - описание жизни человека, сделанное другими людьми или им самим (автобиография). Биография является источником первичной социологической информации, позволяющей выявить психологический тип личности в его исторической, национальной и социальной обусловленности.',
userTel: '+380501111111'
}


const App = () => (
<div className="App">   
    <h1>Hello World {admin.adminName}</h1> 
    <h2>User Info</h2>
    <div>
    <p>{user.userFirstName}</p>
    <p>{user.userShortBiography}</p>
    <a href="+380501111111">{user.userTel}</a>    
    </div>
    <Footer copyright='C'/> 
    </div>
)

export default App;