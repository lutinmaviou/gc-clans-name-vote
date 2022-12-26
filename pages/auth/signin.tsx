import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { FormEventHandler, useState } from 'react';

const SignIn: NextPage = (props): JSX.Element => {
  const [userData, setUserData] = useState({ pseudo: '', email: '', password: '' });
  const handleSubmit: FormEventHandler<HTMLElement> = async (e) => {
    // validate userData
    e.preventDefault();
    const res = await signIn('credentials', {
      pseudo: userData.pseudo,
      email: userData.email,
      password: userData.password,
      redirect: false,
    });
    console.log(res);
  };
  return (
    <section className="signinForm-container flex-col items-center center">
      <h1>Inscription</h1>
      <form className="flex-col items-center around" onSubmit={handleSubmit}>
        <label htmlFor="pseudo">
          Pseudo
          <br />
          <input
            value={userData.pseudo}
            type="text"
            placeholder="Ton pseudo"
            name="pseudo"
            onChange={({ target }) => {
              setUserData({ ...userData, pseudo: target.value });
            }}
          />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input
            value={userData.email}
            type="email"
            placeholder="exemple@email.com"
            name="email"
            onChange={({ target }) => {
              setUserData({ ...userData, email: target.value });
            }}
          />
        </label>
        <label htmlFor="password">
          Mot de passe
          <br />
          <input
            value={userData.password}
            type="password"
            placeholder="********"
            name="password"
            onChange={({ target }) => {
              setUserData({ ...userData, password: target.value });
            }}
          />
        </label>
        <button>Valider</button>
      </form>
    </section>
  );
};

export default SignIn;
