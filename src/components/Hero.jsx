import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        p={{base:"1rem", md:"5rem"}}
        align="center"
        maxW={1200}
        w="full"
        justify="space-between"
        h={700}
        flexDir="column"
      >
        <Text>Regulamento</Text>
        <Heading p={4}>Promoção FOME DE SORTE</Heading>
        <Text textAlign="left" sx={{ p: { padding: 2 } }}>
          <Texto />
        </Text>
      </Flex>
    </Flex>
  );
}

const Texto = () => (
  <>
    <p>1 - EMPRESA PROMOTORA:</p>
    <p>
      Raz&atilde;o Social: ACAICULTURA ALIMENTOS LTDA Endere&ccedil;o: Avenida
      Carlos Chagas, 407 - Bairro Cidade Nobre Munic&iacute;pio: Ipatinga UF:
      Minas Gerais CNPJ: 33.269.510/0001-18
    </p>
    <p>2 - MODALIDADE DA PROMO&Ccedil;&Atilde;O: Assemelhada a Sorteio</p>
    <p>
      3 - &Aacute;REA DE ABRANG&Ecirc;NCIA: Vale do A&ccedil;o (Ipatinga,
      Coronel Fabriciano, Santana do Para&iacute;so, Tim&oacute;teo e Caratinga)
    </p>
    <p>
      4 - PER&Iacute;ODO DA PROMO&Ccedil;&Atilde;O: 19/11/2021 a 31/01/2022;
    </p>
    <p>
      5 - PER&Iacute;ODO DE PARTICIPA&Ccedil;&Atilde;O: 19/11/2021 a 30/01/2022
      AT&Eacute; 22h00;
    </p>
    <p>
      6 &ndash; DATA DO SORTEIO: 31/01/2022 &Agrave;S 20h00 AO VIVO NO
      INSTAGRAM.
    </p>
    <p>7 - CRIT&Eacute;RIO DE PARTICIPA&Ccedil;&Atilde;O:</p>
    <p>
      7.1 Esta PROMO&Ccedil;&Atilde;O &eacute; destinada a toda pessoa
      f&iacute;sica, com idade igual ou superior a 16 (dezesseis) anos na data
      do cadastro, residente no Vale do A&ccedil;o, que durante o per&iacute;odo
      de 19/11/2021 a 30/01/2022, consumir a partir de R$30 no Restaurante
      Cultura Natural ou nos Apps de Delivery.
    </p>
    <p>
      7.2 Em caso de Delivery (Cultura Natural, Ifood e WhatsApp) a taxa de
      entrega n&atilde;o entrar&aacute; na contagem do valor de consumo.
    </p>
    <p>
      7.3 Fica desde j&aacute; esclarecido que ser&atilde;o 200 (duzentos)
      pr&ecirc;mios instant&acirc;neos (na raspadinha da sorte) e 2 (dois)
      grandes pr&ecirc;mios para 2 (dois) ganhadores diferentes. Sendo, 1 (um)
      ano de Academia EndFit inteiramente gr&aacute;tis e 1 (um) ano de
      refei&ccedil;&atilde;o no Cultura Natural (Cultura do dia, segunda a
      sexta, de 11h &agrave;s 15h, para consumo no restaurante).
    </p>
    <p>
      7.4 Os funcion&aacute;rios do Restaurante Cultura Natural n&atilde;o
      poder&atilde;o participar da promo&ccedil;&atilde;o, bem como os
      envolvidos na campanha.
    </p>
    <p>
      7.5 Os pr&ecirc;mios instant&acirc;neos (RASPADINHA DA SORTE) s&atilde;o
      acumulativos. Ou seja, a CADA compra a partir de R$30,00 o participante
      ganhar&aacute; uma nova raspadinha da sorte, tendo assim, mais chances de
      ganhar um dos pr&ecirc;mios principais.
    </p>
    <p>
      7.6 Para se inscrever na PROMO&Ccedil;&Atilde;O, o consumidor
      dever&aacute;, no per&iacute;odo do dia 20/11/2021 at&eacute; dia
      28/01/2022, se cadastrar na promo&ccedil;&atilde;o, conforme
      instru&ccedil;&otilde;es descritas nos itens a seguir e depositar o cupom
      no Restaurante Cultura Natural.
    </p>
    <p>
      7.7 Ap&oacute;s conhecer a mec&acirc;nica da PROMO&Ccedil;&Atilde;O, o
      participante dever&aacute; preencher o cadastro com seus dados
      obrigat&oacute;rios no verso da RASPADINHA DA SORTE, recebida ap&oacute;s
      o consumo de, no m&iacute;nimo R$30 no Restaurante Cultura Natural ou nos
      apps de Delivery. Sendo: Nome completo, CPF, N&uacute;mero de telefone
      celular, melhor e-mail e endere&ccedil;o.
    </p>
    <p>
      7.8 Para efeitos desta PROMO&Ccedil;&Atilde;O, considera-se que a
      participa&ccedil;&atilde;o de menores de idade tenha sido previamente
      autorizada por seus respectivos representantes legais.
    </p>
    <p>
      7.9 Os participantes contemplados autorizam, sem qualquer &ocirc;nus
      &agrave; empresa promotora, pelo prazo m&aacute;ximo de 1 (um) ano a
      contar da data de contempla&ccedil;&atilde;o, o uso de seu nome, imagem e
      som de voz, para divulga&ccedil;&atilde;o da PROMO&Ccedil;&Atilde;O com
      finalidades comerciais, institucionais ou outras juridicamente
      admiss&iacute;veis, inclusive na rela&ccedil;&atilde;o de ganhadores da
      PROMO&Ccedil;&Atilde;O que ser&aacute; divulgada nas redes sociais do
      Restaurante Cultura Natural.
    </p>
    <p>
      7.10 Ao participar dessa PROMO&Ccedil;&Atilde;O, os participantes desde
      j&aacute; concordam que o promotor poder&aacute; coletar suas
      informa&ccedil;&otilde;es pessoais fornecidas quando do cadastramento e
      reconhecem, igualmente, que leram e aceitam a referida Pol&iacute;tica de
      Privacidade. Dentre outras finalidades, as informa&ccedil;&otilde;es
      fornecidas pelos participantes podem ser usadas para enviar aos
      participantes atualiza&ccedil;&otilde;es e an&uacute;ncios sobre a
      Promo&ccedil;&atilde;o FOME DE SORTE, bem como de outros produtos da
      empresa promotora.
    </p>
    <p>8 - DESCRI&Ccedil;&Atilde;O DE PR&Ecirc;MIOS PRINCIPAIS:</p>
    <p>1 (um) ANO DE ACADEMIA END FIT</p>
    <p>1 (um) ANO DE CULTURA DO DIA (segunda a sexta, de 11h &agrave;s 15h)</p>
    <p>9 - APURA&Ccedil;&Atilde;O</p>
    <p>
      9.1 O sorteio dos pr&ecirc;mios principais ser&aacute; realizado no dia
      31/01/2022 &agrave;s 14h00 ao vivo no Instagram @culturanatural_br
    </p>
    <p>
      9.2 Os 200 (duzentos) <strong>pr&ecirc;mios instant&acirc;neos</strong>{" "}
      ser&atilde;o sorteados na RASPADINHA DA SORTE, o ganhador ter&aacute; 7
      (sete) dias para resgatar o pr&ecirc;mio.
    </p>
    <p>
      9.3 O pr&ecirc;mio instant&acirc;neo dever&aacute; ser consumido na loja
      f&iacute;sica.
    </p>
    <p>
      9.4 Os pr&ecirc;mios principais ter&atilde;o 2 (dois) ganhadores
      diferentes
    </p>
    <p>
      9.5 Os ganhadores dos pr&ecirc;mios principais (1 ano de End Fit e 1 ano
      de Cultura do dia) ter&atilde;o at&eacute; o dia 01/03/2022 para iniciarem
      a contagem das refei&ccedil;&otilde;es no Cultura Natural ou iniciarem o
      plano na academia End Fit. A partir do dia 01/03/2022 j&aacute;
      ser&atilde;o contabilizadas as refei&ccedil;&otilde;es n&atilde;o
      resgatadas como fornecidas e o cliente perder&aacute; o direito ao plano
      da End Fit.
    </p>
    <p>
      9.6 Caso o item premiado na raspadinha n&atilde;o esteja dispon&iacute;vel
      em estoque no momento da retirada do pr&ecirc;mio, o Cultura Natural
      poder&aacute; substitu&iacute;-lo por outro com valor similar
      dispon&iacute;vel.
    </p>
    <p>10 - TERMO DE RESPONSABILIDADE</p>
    <p>
      Poder&aacute; participar da promo&ccedil;&atilde;o qualquer consumidor que
      preencha os requisitos estipulados no regulamento da campanha autorizada;
    </p>
    <p>
      10.1 Os pr&ecirc;mios n&atilde;o poder&atilde;o ser convertidos em
      dinheiro;
    </p>
    <p>
      10.2 Os pr&ecirc;mios n&atilde;o poder&atilde;o ser transferidos para
      outra pessoa.
    </p>
    <p>
      10.3 O plano anual de Cultura do Dia dever&aacute; ser consumido no
      restaurante, caso o contemplado desejar delivery, ser&aacute; cobrado uma
      taxa de R$5,00 + taxa de entrega da localidade.
    </p>
    <p>
      10.4 O plano anual da EndFit ser&aacute; feito em nome do ganhador e
      seguir&aacute; os termos de contrato padr&atilde;o oferecido pela
      pr&oacute;pria academia. Sendo assim, o restaurante Cultura Natural fica
      isento de quaisquer responsabilidades e conflitos entre o ganhador e a
      contratada.
    </p>
    <p>
      10.5 Caso o ganhador n&atilde;o se demonstre apto a praticar atividades
      f&iacute;sicas de acordo com os termos da academia, ele poder&aacute;
      passar o pr&ecirc;mio para uma pessoa apta &agrave; sua escolha, sem fins
      lucrativos.
    </p>
    <p>
      10.6 Caso o restaurante Cultura Natural seja impedido de abrir por motivos
      de for&ccedil;a maior (outra paraliza&ccedil;&atilde;o, por exemplo), se
      desobriga de fornecer as refei&ccedil;&otilde;es pelo mesmo
      per&iacute;odo.
    </p>
    <p>
      10.7 O restaurante Cultura Natural se reserva o direito de alterar o
      card&aacute;pio do dia a qualquer momento.
    </p>
  </>
);
