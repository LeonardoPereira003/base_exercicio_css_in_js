import * as S from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  return (
    <S.Form>
      <S.Campo
        type="text"
        placeholder="Buscar vaga"
        onChange={(e) => aoPesquisar(e.target.value)}
      />
      <S.BotaoPesquisar>Pesquisar</S.BotaoPesquisar>
    </S.Form>
  )
}

export default FormVagas
