import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
    margin: 3vh 20vh 7vh 20vh;
`;

const TextDiv = styled.div`
    font-size: 18px;
`;

const StyledH1 = styled.h1`
    font-size: 35px;
    text-align: center;
    margin-bottom: 20px;
`;

const StyledH2 = styled.h2`
    font-size: 25px;
`;

const StyledP = styled.p`
    margin-bottom: 10px;
`;

const StyledLi = styled.li`
    margin-left: 3em;
`;

const TermosDeUso = () => {
  return (
    <MainDiv>
        <StyledH1>Termos de Uso</StyledH1>
      <TextDiv>
          <StyledH2>1. Termos</StyledH2>
          <StyledP>
            Ao acessar ao site <a href="http://hellouser/">Hello User</a>, concorda
            em cumprir estes termos de serviço, todas as leis e regulamentos
            aplicáveis e concorda que é responsável pelo cumprimento de todas as
            leis locais aplicáveis. Se você não concordar com algum desses termos,
            está proibido de usar ou acessar este site. Os materiais contidos neste
            site são protegidos pelas leis de direitos autorais e marcas comerciais
            aplicáveis.
          </StyledP>
          <StyledH2>2. Uso de Licença</StyledH2>
          <StyledP>
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site Hello User , apenas para
            visualização transitória pessoal e não comercial. Esta é a concessão de
            uma licença, não uma transferência de título e, sob esta licença, você
            não pode:
          </StyledP>
          <ol>
            <StyledLi>modificar ou copiar os materiais; </StyledLi>
            <StyledLi>
              usar os materiais para qualquer finalidade comercial ou para exibição
              pública (comercial ou não comercial);
            </StyledLi>
            <StyledLi>
              tentar descompilar ou fazer engenharia reversa de qualquer software
              contido no site Hello User;
            </StyledLi>
            <StyledLi>
              remover quaisquer direitos autorais ou outras notações de propriedade
              dos materiais; ou
            </StyledLi>
            <StyledLi>
              transferir os materiais para outra pessoa ou 'espelhe' os materiais em
              qualquer outro servidor.
            </StyledLi>
          </ol>
          <StyledP>
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por Hello User a qualquer
            momento. Ao encerrar a visualização desses materiais ou após o término
            desta licença, você deve apagar todos os materiais baixados em sua
            posse, seja em formato eletrónico ou impresso.
          </StyledP>
          <StyledH2>3. Isenção de responsabilidade</StyledH2>
          <ol>
            <StyledLi>
              Os materiais no site da Hello User são fornecidos 'como estão'. Hello
              User não oferece garantias, expressas ou implícitas, e, por este meio,
              isenta e nega todas as outras garantias, incluindo, sem limitação,
              garantias implícitas ou condições de comercialização, adequação a um
              fim específico ou não violação de propriedade intelectual ou outra
              violação de direitos.
            </StyledLi>
            <StyledLi>
              Além disso, o Hello User não garante ou faz qualquer representação
              relativa à precisão, aos resultados prováveis ou à confiabilidade do
              uso dos materiais em seu site ou de outra forma relacionado a esses
              materiais ou em sites vinculados a este site.
            </StyledLi>
          </ol>
          <StyledH2>4. Limitações</StyledH2>
          <StyledP>
            Em nenhum caso o Hello User ou seus fornecedores serão responsáveis
            ​​por quaisquer danos (incluindo, sem limitação, danos por perda de
            dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso
            ou da incapacidade de usar os materiais em Hello User, mesmo que Hello
            User ou um representante autorizado da Hello User tenha sido notificado
            oralmente ou por escrito da possibilidade de tais danos. Como algumas
            jurisdições não permitem limitações em garantias implícitas, ou
            limitações de responsabilidade por danos conseqüentes ou incidentais,
            essas limitações podem não se aplicar a você.
          </StyledP>
          <StyledH2>5. Precisão dos materiais</StyledH2>
          <StyledP>
            Os materiais exibidos no site da Hello User podem incluir erros
            técnicos, tipográficos ou fotográficos. Hello User não garante que
            qualquer material em seu site seja preciso, completo ou atual. Hello
            User pode fazer alterações nos materiais contidos em seu site a qualquer
            momento, sem aviso prévio. No entanto, Hello User não se compromete a
            atualizar os materiais.
          </StyledP>
          <StyledH2>6. Links</StyledH2>
          <StyledP>
            O Hello User não analisou todos os sites vinculados ao seu site e não é
            responsável pelo conteúdo de nenhum site vinculado. A inclusão de
            qualquer link não implica endosso por Hello User do site. O uso de
            qualquer site vinculado é por conta e risco do usuário.
          </StyledP>
          <h3>Modificações</h3>
          <StyledP>
            O Hello User pode revisar estes termos de serviço do site a qualquer
            momento, sem aviso prévio. Ao usar este site, você concorda em ficar
            vinculado à versão atual desses termos de serviço.
          </StyledP>
          <h3>Lei aplicável</h3>
          <StyledP>
            Estes termos e condições são regidos e interpretados de acordo com as
            leis do Hello User e você se submete irrevogavelmente à jurisdição
            exclusiva dos tribunais naquele estado ou localidade.
          </StyledP>
      </TextDiv>
    </MainDiv>
  );
};

export default TermosDeUso;
