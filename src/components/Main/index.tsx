import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/icon-512.png"
      alt="Imagem de um átomo e bstage escrito ao lado."
    />
    <S.Title>bstage</S.Title>
    <S.Description>
      TypeScript, NextJS, ReactJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvendor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
