interface IClienteModel {
    id: number;
    tipoPessoa: string;
    nomeFantasia: string;
    dataNascimento: string;
    tipoPagamento: string;
    tipoGeracaoBoleto: string;
    loginCentral: string;
    obs: string;
    status: string;
    blackList: number;
    createdAt: string;
    updatedAt: string;
    enderecosFkCobranca: number;
    grupoClientesFk: number;
    diasPagamentoPlanoFk: number;
}

export default IClienteModel;
