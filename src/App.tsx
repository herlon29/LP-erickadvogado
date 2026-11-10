import { useState } from 'react'

const WHATSAPP =
  'https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20falar%20sobre%20meu%20caso%20imobiliário.'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.5Z" />
      <path d="M8.2 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .4-.1.6l-.6.8c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.5-.7 1.9-.5.5-1.3.8-2.2.6-1.2-.2-2.8-.8-4.5-2.3-2-1.8-3.2-4-3.3-5.3 0-.6.2-1.1.5-1.5Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3H4.8C3.8 3 3 3.8 3 4.8 3 13.7 10.3 21 19.2 21c1 0 1.8-.8 1.8-1.8v-2.4l-4.1-1-1.2 2a15.2 15.2 0 0 1-9.5-9.5l2-1.2L7.2 3Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

const practices = [
  {
    number: '01',
    title: 'Regularização de imóveis',
    text: 'Segurança jurídica para escrituras, registros, inventários e usucapião, do diagnóstico à solução.',
  },
  {
    number: '02',
    title: 'Contratos imobiliários',
    text: 'Análise e elaboração de contratos de compra, venda e locação para proteger seu patrimônio.',
  },
  {
    number: '03',
    title: 'Conflitos e litígios',
    text: 'Atuação estratégica em disputas, distratos, vícios construtivos e ações possessórias.',
  },
]

const steps = [
  {
    title: 'Conte o seu caso',
    text: 'Em uma conversa inicial, entendemos seu cenário, riscos e o resultado que você busca.',
  },
  {
    title: 'Receba a estratégia',
    text: 'Analisamos documentos e apresentamos os caminhos possíveis com transparência.',
  },
  {
    title: 'Acompanhe a solução',
    text: 'Conduzimos cada etapa e mantemos você informado até a conclusão do trabalho.',
  },
]

const faqs = [
  {
    question: 'Quando devo procurar um advogado imobiliário?',
    answer:
      'Antes de assinar contratos, comprar ou vender um imóvel, regularizar uma propriedade ou quando surgir qualquer conflito. A orientação preventiva costuma reduzir riscos e custos.',
  },
  {
    question: 'O primeiro atendimento pode ser on-line?',
    answer:
      'Sim. Atendemos clientes de todo o Brasil por videochamada, com o mesmo cuidado e sigilo do atendimento presencial.',
  },
  {
    question: 'Quais documentos preciso enviar?',
    answer:
      'Isso varia conforme o caso. No primeiro contato indicaremos exatamente o necessário, como matrícula, contrato, notificações ou comprovantes.',
  },
  {
    question: 'Quanto tempo leva para resolver um caso?',
    answer:
      'Cada situação tem um prazo diferente. Após a análise inicial, você recebe uma estimativa realista das etapas e do tempo envolvido.',
  },
  {
    question: 'É possível regularizar um imóvel sem escritura?',
    answer:
      'A ausência de escritura não determina, por si só, qual procedimento deve ser utilizado. É necessário verificar a origem da aquisição, os documentos existentes e a situação do registro imobiliário para identificar as alternativas juridicamente possíveis.',
  },
  {
    question: 'Qual é a diferença entre escritura e registro do imóvel?',
    answer:
      'A escritura pública formaliza o negócio jurídico imobiliário. Já o registro do título no Cartório de Registro de Imóveis é o ato que efetivamente transfere a propriedade legal entre vivos.',
  },
  {
    question: 'Quando a usucapião pode ser aplicável?',
    answer:
      'A usucapião depende do cumprimento de requisitos legais, como tempo de posse, ausência de oposição, natureza do imóvel e características da ocupação, variando conforme a modalidade legal.',
  },
  {
    question: 'Posso regularizar um terreno adquirido por contrato particular?',
    answer:
      'Dependendo das circunstâncias, existem alternativas para formalizar a situação. É importante examinar o contrato, a cadeia de aquisição, a matrícula e os demais documentos disponíveis.',
  },
  {
    question: 'O que fazer quando existe uma disputa sobre a posse de um terreno?',
    answer:
      'O primeiro passo é compreender a situação jurídica, reunir os documentos pertinentes e avaliar os direitos envolvidos para adotar a medida legal adequada aos fatos.',
  },
  {
    question: 'Quais documentos podem ser necessários para analisar meu imóvel?',
    answer:
      'Conforme o caso, podem ser relevantes a matrícula atualizada, contrato de compra e venda, comprovantes de posse, escrituras anteriores, plantas e documentos pessoais dos envolvidos.',
  },
]

function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Olá, gostaria de solicitar uma orientação.',
      `Nome: ${data.get('name')}`,
      `Telefone: ${data.get('phone')}`,
      `Assunto: ${data.get('subject')}`,
    ].join('\n')

    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#" aria-label="FS Advogados, início">
            <img
              className="brand-logo"
              src="https://direitoimobiliario.fsadvogados.adv.br/logo-fsadvogados.png"
              alt="FS Advogados"
            />
          </a>
          <a className="button button-outline" href={WHATSAPP} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> Whatsapp: (12) 99112-1869
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">DIREITO IMOBILIÁRIO &amp; REGULARIZAÇÃO EM CARAGUATATUBA</span>
            <h1>
              <em>Seu imóvel tem pendências</em> de documentação ou questões de propriedade?
            </h1>
            <p>
              A FS Advogados atua em questões jurídicas relacionadas à regularização de imóveis,
              escritura, registro, usucapião, posse de terrenos e conflitos de propriedade.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href={WHATSAPP} target="_blank" rel="noreferrer">
                Analisar meu caso <ArrowIcon />
              </a>
              <span className="microcopy">
                Atendimento em Caraguatatuba e região do Litoral Norte de SP.
              </span>
            </div>
          </div>
          <div className="video-card">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
              alt="Advogado em ambiente profissional"
            />
            <div className="video-shade" />
            <button className="play-button" onClick={() => setShowVideo(true)} aria-label="Reproduzir apresentação">
              <span className="play-icon">▶</span>
            </button>
            <div className="video-caption">
              <span>CONHEÇA NOSSO TRABALHO</span>
              <strong>Direito imobiliário especializado.</strong>
            </div>
          </div>
        </div>
        <div className="trust-strip">
          <div className="container trust-inner">
            <span>ATENDIMENTO ESPECIALIZADO</span>
            <span>ATENDIMENTO ON-LINE</span>
          </div>
        </div>
      </section>

      <section className="section practices" id="atuacao">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow dark">COMO PODEMOS AJUDAR</span>
              <h2>Soluções para cada decisão imobiliária.</h2>
            </div>
            <p>Atuação preventiva e contenciosa com profundidade técnica e visão de negócio.</p>
          </div>
          <div className="practice-grid">
            {practices.map((item) => (
              <article className="practice-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <div className="line-icon" aria-hidden="true">⌂</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  Saiba mais <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container process-grid">
          <div className="process-intro">
            <span className="eyebrow">UM PROCESSO SIMPLES</span>
            <h2>Clareza do primeiro contato à solução.</h2>
            <p>Você entende o que está acontecendo e qual será o próximo passo. Sempre.</p>
            <a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">
              Começar agora <ArrowIcon />
            </a>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <article className="step" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container office-intro">
          <div>
            <span className="eyebrow dark">TRADIÇÃO &amp; ASSERTIVIDADE</span>
            <h2>FS Advogados — Direito Imobiliário em Caraguatatuba</h2>
          </div>
          <p>
            Questões relacionadas a imóveis envolvem contratos, registros públicos, histórico de
            posse e exigências legais específicas. A FS Advogados oferece atendimento especializado
            para analisar situações imobiliárias e orientar sobre as alternativas aplicáveis com
            segurança jurídica.
          </p>
        </div>
        <div className="container about-grid">
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1613496701765-97267d26e3df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000"
              alt="Dr. Rafael Almeida, advogado imobiliário"
            />
            <div className="experience-badge">
              <strong>12+</strong>
              <span>ANOS DE<br />EXPERIÊNCIA</span>
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow dark">QUEM CUIDA DO SEU CASO</span>
            <h2>Experiência técnica com atendimento humanizado e próximo.</h2>
            <p></p>
            <blockquote>
              “Meu compromisso é traduzir a complexidade jurídica em decisões seguras para você.”
            </blockquote>
            <div className="signature">
              <strong>Dr. Erick Oliveira</strong>
              <span>OAB/SP 531.645 | Atuação em Direito Imobiliário em Caraguatatuba</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq-grid">
          <div className="faq-intro">
            <span className="eyebrow dark">DÚVIDAS FREQUENTES</span>
            <h2>Informação também traz segurança.</h2>
            <p>Não encontrou sua dúvida? Fale diretamente com nossa equipe.</p>
            <a className="text-link dark-link" href={WHATSAPP} target="_blank" rel="noreferrer">
              Enviar uma pergunta <ArrowIcon />
            </a>
          </div>
          {[faqs.slice(0, 5), faqs.slice(5)].map((column, columnIndex) => (
            <div className="accordion" key={columnIndex}>
              {column.map((faq, itemIndex) => {
                const index = columnIndex * 5 + itemIndex
                const isOpen = openFaq === index
                return (
                  <article className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                    <button onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                      <span>{faq.question}</span>
                      <i>{isOpen ? '−' : '+'}</i>
                    </button>
                    {isOpen && <p>{faq.answer}</p>}
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">SEU PRÓXIMO PASSO</span>
            <h2>Fale diretamente com nossa equipe.</h2>
            <p>Escolha o canal de sua preferência. Estamos prontos para entender o seu caso.</p>
            <div className="contact-buttons">
              <a className="contact-button" href={WHATSAPP} target="_blank" rel="noreferrer">
                <span><WhatsAppIcon /></span>
                <div><small>WHATSAPP</small><strong>Enviar uma mensagem</strong></div>
                <ArrowIcon />
              </a>
              <a className="contact-button" href="tel:+5511999999999">
                <span><PhoneIcon /></span>
                <div><small>TELEFONE</small><strong>(12) 99112-1869</strong></div>
                <ArrowIcon />
              </a>
              <a className="contact-button" href="mailto:contato@almeida.adv.br">
                <span><MailIcon /></span>
                <div><small>E-MAIL</small><strong>erickoliveira@fsadvogados.adv.br</strong></div>
                <ArrowIcon />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <span className="form-label">FALE CONOSCO</span>
            <h2>Solicite uma orientação</h2>
            <label>
              Nome completo
              <input name="name" type="text" placeholder="Digite seu nome" required />
            </label>
            <label>
              WhatsApp / Telefone
              <input name="phone" type="tel" placeholder="(00) 00000-0000" required />
            </label>
            <label>
              Assunto principal
              <select name="subject" defaultValue="" required>
                <option value="" disabled>Selecione a opção</option>
                <option>Regularização de imóvel</option>
                <option>Usucapião e posse</option>
                <option>Conflito de propriedade</option>
                <option>Contrato imobiliário</option>
                <option>Outro assunto</option>
              </select>
            </label>
            <button className="button form-submit" type="submit">
              Solicitar contato <ArrowIcon />
            </button>
            <p className="privacy-note">
              Ao clicar no botão, você está de acordo com a política de privacidade e a LGPD. As
              informações enviadas serão utilizadas para viabilizar o atendimento.
            </p>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand" href="#">
              <img
                className="brand-logo"
                src="https://direitoimobiliario.fsadvogados.adv.br/logo-fsadvogados.png"
                alt="FS Advogados"
              />
            </a>
            <p>
              <strong>FS Advogados — Caraguatatuba / SP</strong><br />
              Direito imobiliário com clareza, estratégia e confiança.
            </p>
          </div>
          <div>
            <strong>CONTATO</strong>
            <p>(12) 99112-1869<br />erickoliveira@fsadvogados.adv.br</p>
          </div>
          <div>
            <strong>ATENDIMENTO</strong>
            <p>
              Segunda a sexta, 9h às 18h<br />
              Av. Rio Grande do Sul, 325, Jardim Primavera, Caraguatatuba - SP
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 Almeida Advocacia. Todos os direitos reservados.</span>
          <span>OAB/SP 000.000</span>
        </div>
      </footer>

      {showVideo && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Vídeo institucional" onClick={() => setShowVideo(false)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVideo(false)} aria-label="Fechar">×</button>
            <div className="video-placeholder">
              <span className="brand-mark">A</span>
              <h2>Almeida Advocacia</h2>
              <p>O vídeo institucional pode ser inserido aqui.</p>
              <a className="button button-gold" href={WHATSAPP} target="_blank" rel="noreferrer">
                Falar com um especialista
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
