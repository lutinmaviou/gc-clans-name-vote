import { NextPage } from 'next';

const SignIn: NextPage = (props): JSX.Element => {
  return (
    <section className="signinForm-container flex-col items-center center">
      <h1>Inscription</h1>
      <form className="flex-col items-center around">
        <label htmlFor="pseudo">
          Pseudo
          <br />
          <input type="email" placeholder="Ton pseudo" name="pseudo" />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input type="email" placeholder="exemple@email.com" name="email" />
        </label>
        <label htmlFor="password">
          Mot de passe
          <br />
          <input type="password" placeholder="********" name="password" />
        </label>
        <button>Valider</button>
      </form>
    </section>
  );
};

export default SignIn;
