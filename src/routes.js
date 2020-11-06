import Index from "views/Index.js";
import Profile from "views/Perfil/Perfil.js";
import Login from "views/Login/Login.js";
import Contratos from "views/Contratos/Contratos";
import Orcamentos from "views/Orcamentos/Orcamentos";
import Projetos from "views/Projetos/Projetos";
import Projeto from "views/Projetos/Projeto/Projeto";
import Suporte from "views/Suporte/Suporte";
import RecuperarSenha from "views/RecuperarSenha/RecuperarSenha";

//Afiliados
import Cobrancas from "views/Cobrancas/Cobrancas";
import Propostas from "views/Propostas/Propostas";

var routes = [
  {
    show: true,
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    show: true,
    path: "/orcamentos",
    name: "Orçamentos",
    icon: "fas fa-coins text-yellow",
    component: Orcamentos,
    layout: "/admin",
  },
  {
    show: true,
    path: "/projetos",
    name: "Projetos",
    icon: "fas fa-project-diagram text-info",
    component: Projetos,
    layout: "/admin",
  },
  {
    show: false,
    path: "/projeto",
    name: "Projeto",
    icon: "fas fa-project-diagram text-info",
    component: Projeto,
    layout: "/admin",
  },

  {
    show: true,
    path: "/contratos",
    name: "Contratos",
    icon: "ni ni-single-copy-04 text-green",
    component: Contratos,
    layout: "/admin",
  },
  {
    show: true,
    path: "/cobrancas",
    name: "Cobrança",
    icon: "fas fa-file-invoice-dollar text-red",
    component: Cobrancas,
    layout: "/admin",
  },
  {
    show: true,
    path: "/propostas",
    name: "Propostas",
    icon: "fas fa-handshake text-blue",
    component: Propostas,
    layout: "/admin",
  },
  {
    show: true,
    path: "/user-profile",
    name: "Meu Perfil",
    icon: "ni ni-single-02 text-black",
    component: Profile,
    layout: "/admin",
  },
  {
    show: true,
    path: "/suporte",
    name: "Suporte",
    icon: "ni ni-support-16 text-red",
    component: Suporte,
    layout: "/admin",
  },
  {
    show: false,
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    show: false,
    path: "/recuperar-senha",
    name: "Recuperar Senha",
    icon: "ni ni-key-25 text-info",
    component: RecuperarSenha,
    layout: "/auth",
  },
];
export default routes;
