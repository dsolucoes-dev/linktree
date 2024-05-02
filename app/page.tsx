import LinkBar from "./component/Linkbar";

async function getSocial() {
  const social = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/dsolucoes_oficial/",
      icon: {
        name: "bx:bxl-instagram",
        className: "text-indigo-500 w-7 h-7"
      }
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/dsolucoes/",
      icon: {
        name: "bx:bxl-facebook",
        className: "text-indigo-500 w-7 h-7"
      }
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/dsolu%C3%A7%C3%B5es/",
      icon: {
        name: "bx:bxl-linkedin",
        className: "text-indigo-500 w-7 h-7"
      }
    },
    {
      name: "Github",
      url: "https://github.com/dsolucoes-dev",
      icon: {
        name: "bx:bxl-github",
        className: "text-indigo-500 w-7 h-7"
      }
    }
  ]

  return social;
}

async function Home() {

  const social = await getSocial();

  return (
    <main className="bg-ds min-h-screen max-h-full flex items-center justify-center flex-col px-5">

      <header className=" w-full mx-auto container max-w-screen-md text-center space-y-5 " >
        <h1 className="text-white font-semibold text-3xl">Dsoluções</h1>

        <section className="bg-indigo-600/20 p-3 w-full flex items-center justify-center gap-5 rounded-full">
          <div className="w-5 h-5 bg-green-600  rounded-full animate-pulse" />

          <p className="text-white">
            Disponiveis para novos projetos
          </p>


        </section>
      </header>

      <section className="w-full mx-auto container max-w-screen-md">
        {social.map((item, index) => (
          <LinkBar key={index} target={item} />
        ))}
      </section>
    </main>
  );
}

export default Home;