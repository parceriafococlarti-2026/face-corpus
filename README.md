# Face Corpus Clínica Integrada

Site institucional estático, mobile first, feito com HTML, CSS e JavaScript puro.

## Visualizar localmente

Sirva esta pasta com qualquer servidor estático e abra `index.html`. Os arquivos podem ser publicados em uma hospedagem estática sem etapa de build.

## Atualizar informações

- WhatsApp, mensagem de agendamento, Instagram, futuro link externo de agenda e registro da responsável técnica: início de `js/main.js`.
- Textos, endereço e procedimentos: `index.html`.
- Cores, tipografia e enquadramentos: `css/style.css`.

## Fotos da clínica

As fotos da equipe e dos ambientes estão em `assets/images/` e são usadas no destaque inicial, na galeria do espaço e no bloco do Instagram.

O ícone vetorial de WhatsApp em `assets/icons/whatsapp.svg` vem da biblioteca [Simple Icons](https://github.com/simple-icons/simple-icons/blob/develop/icons/whatsapp.svg), disponibilizada sob CC0.

Ao substituir ou incluir novas fotos, salve versões otimizadas em `assets/images/` e atualize:

1. **Hero:** `background-image` em `.hero-image`, no `css/style.css`. Prefira uma foto vertical ou com assunto enquadrável no mobile e no desktop.
2. **Estrutura:** cards dentro de `.experience-gallery`, no `index.html`. Preserve a variedade entre equipe, recepção e ambientes, com descrições `alt` fiéis.
3. **Instagram:** imagens dentro de `.social-grid`, no `index.html`. Use imagens dos posts autorizados, com links para o perfil ou os posts correspondentes. A grade é manual, sem sincronização automática.

Atualize `width`, `height` e `alt` quando trocar as imagens. Publique fotos de pacientes ou resultados somente após confirmar autorização formal e revisar as regras profissionais aplicáveis.

## Antes de publicar em um domínio

- Adicione uma URL canônica absoluta em `index.html`.
- Atualize `og:image` e o campo `image` do JSON-LD para URLs absolutas do domínio.
- Crie `sitemap.xml` com a URL pública definitiva e declare-o em `robots.txt`.
- Confirme o número oficial do CRBM com a clínica e preencha `technicalResponsible.crbm` em `js/main.js`.
- Confira dias de funcionamento, pois o briefing informa apenas o horário de 09h às 18h.

Nenhum domínio, registro profissional ou dia de funcionamento foi presumido nesta versão.
