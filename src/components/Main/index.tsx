import * as S from './styles'

const Main = ({
  title = 'bstage',
  description = 'TypeScript, NextJS, ReactJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/icon-512.png"
      alt="Imagem de um átomo e bstage escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvendor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
