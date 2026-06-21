const cadastrosBrutos = [
  {
    nome: "  napoLeao  ",
    email: "  napoLEAO@GMAIL.COM  ",
    senha: "123",
    categorias: "Tênis,Camisa,Boné",
    diasNoAr: 25,
    impressoes: 1500
  },
  {
    nome: "  Obiwan Kenobi  ",
    email: "  OBIWAN@GMAIL.COM  ",
    senha: "minhasenha456",
    categorias: "Bermuda,Calça,Blusa",
    diasNoAr: 30,
    impressoes: 2000
  },
  {
    nome: "  nerina  ",
    email: "  NERINA@GMAIL.COM  ",
    senha: "senhasegura789",
    categorias: "Meia,Chinelo,Relógio",
    diasNoAr: 10,
    impressoes: 200
  },
  {
    nome: "  fiorentina  ",
    email: "  FIORENTINA@GMAIL.COM  ",
    senha: "senha012345",
    categorias: "Vestido,Jaqueta,Cinto",
    diasNoAr: 40,
    impressoes: 3000
  },
  {
    nome: "  laura thaissa  ",
    email: "  LAURA@GMAIL.COM  ",
    senha: "senha345678",
    categorias: "Bota,Óculos,Cinto",
    diasNoAr: 45,
    impressoes: 3500
  }
];

// Limpa e padroniza um cadastro bruto
const sanitizarCadastro = (cadastro) => {
  return {
    nome: cadastro.nome.trim().toLowerCase(),
    email: cadastro.email.trim().toLowerCase(),
    senha: cadastro.senha.trim(), // ajuste aqui
    categorias: cadastro.categorias.split(",").map(categoria => categoria.trim()),
    diasNoAr: cadastro.diasNoAr,
    impressoes: cadastro.impressoes
  };
};

// Valida um cadastro já sanitizado
const validarCadastro = (cadastro) => {
  const erros = [];

  if (cadastro.nome.length < 3) {
    erros.push("Nome muito curto");
  }

  if (!cadastro.email.includes("@") || !cadastro.email.includes(".")) {
    erros.push("Email inválido");
  }

  if (cadastro.senha.length < 8) {
    erros.push("Senha muito curta");
  }

  return {
    valido: erros.length === 0,
    erros
  };
};

// Reaproveita a lógica já construída em módulos anteriores
const analisarAnuncio = (cadastro) => {
  if (cadastro.diasNoAr > 20 && cadastro.impressoes > 1000) {
    return "Escalado";
  }
  return "Não escalado";
};

// Orquestra sanitização, validação e análise para a lista inteira
const gerarRelatorio = (cadastros) => {
  cadastros.forEach((cadastroBruto) => {
    const cadastroSanitizado = sanitizarCadastro(cadastroBruto);
    const validacao = validarCadastro(cadastroSanitizado);
    const status = analisarAnuncio(cadastroSanitizado);

    console.log(`Cadastro: ${cadastroSanitizado.nome}`);
    console.log(`Validação: ${validacao.valido ? "Válido" : "Inválido"}`);
    if (!validacao.valido) {
      console.log(`Erros: ${validacao.erros.join(", ")}`);
    }
    console.log(`Status do anúncio: ${status}`);
    console.log("-------------------");
  });
};

gerarRelatorio(cadastrosBrutos);