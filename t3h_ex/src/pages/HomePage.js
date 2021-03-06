import React, { useState } from "react";
import Text from "./../components/commons/Text";
import Button from "./../components/commons/Button";
import Input from "./../components/commons/Input";
import "../asset/css/style.css"
const HomePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);
  const handle = () => {
    setLoading(true);
    setTimeout(() => {
      setName('')
      setAge('')
      setLoading(false)
    }, 5000)

  }
  return (
    <div className="wrapper">
      {
        loading ? <h1>Loading.........</h1>
          : (<div className="">
            <h2>Login</h2>
            {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /> */}
            <Input
              title="Name" inputType="text"
              fOnChange={(e) => setName(e.target.value)}
              inputValue={name}
              placeholderText="Vui lòng nhập tên"
            />
            <Input
              title="Age" inputType="number"
              fOnChange={(e) => setAge(e.target.value)}
              inputValue={age}
              placeholderText="Vui lòng nhập tuổi"
            />
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
          </div>)
      }
      {/* <button disabled={loading ? true : false} onClick={handle} > Reset</button> */}
      <Button bDisabled={loading ? false : true} bOnClick={handle} name="Reset" />
    </div>
  )
}

export default HomePage;
