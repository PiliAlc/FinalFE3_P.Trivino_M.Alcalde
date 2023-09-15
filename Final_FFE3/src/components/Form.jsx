import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!name.trim() || !email.trim()) {
      setErr('Los campos deben estar completos');
      setShowSuccessMessage(false); 
    } else if (name.length <= 5 || name.indexOf(" ") === 0 || !emailRegex.test(email)) {
      setErr('Por favor verifique su información nuevamente');
      setShowSuccessMessage(false); 
    } else {
      setErr('');
      setShowSuccessMessage(true); 
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="cargaFormulario">
          <label>
            <p>Ingrese su nombre:</p>
            <input type='text' name="nombre" value={name} className="input" onChange={event => setName(event.target.value)} />
          </label>
          <label>
            <p>Ingrese su email</p>
            <input type='text' name="email"  autoComplete="off" value={email} className="input" onChange={event => setEmail(event.target.value)} />
          </label>
        </div>
        <div>
          <button className="" type="submit">Enviar</button>
          <button onClick={() => navigate("/")}>Volver</button>
        </div>
        {err && <p className="err">{err}</p>}
        {showSuccessMessage && <p className="info">Gracias {name}, te contactaremos cuando antes vía mail</p>}
      </form>
    </>
  );
};

export default Form;