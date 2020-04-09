import IClienteModel from './interfaces/IClienteModel';

class ClienteModel {
    private clienteModel: IClienteModel;

    constructor(clienteModel: IClienteModel) {
        this.clienteModel = clienteModel;
    }

    get id(): number {
        return this.clienteModel.id;
    }

    get tipoPessoa(): string {
        return this.clienteModel.tipoPessoa;
    }

    get nomeFantasia(): string {
        return this.clienteModel.nomeFantasia;
    }

    get dataNascimento(): string {
        return this.clienteModel.dataNascimento;
    }

    get tipoPagamento(): string {
        return this.clienteModel.tipoPagamento;
    }

    get tipoGeracaoBoleto(): string {
        return this.clienteModel.tipoGeracaoBoleto;
    }

    get loginCentral(): string {
        return this.clienteModel.loginCentral;
    }

    get obs(): string {
        return this.clienteModel.obs;
    }

    get status(): string {
        return this.clienteModel.status;
    }

    get blackList(): number {
        return this.clienteModel.blackList;
    }

    get createdAt(): string {
        return this.clienteModel.createdAt;
    }
    
    get updatedAt(): string {
        return this.clienteModel.updatedAt;
    }

    get enderecosFkCobranca(): number {
        return this.clienteModel.enderecosFkCobranca;
    }

    get grupoClientesFk(): number {
        return this.clienteModel.grupoClientesFk;
    }
    
    get diasPagamentoPlanoFk(): number {
        return this.clienteModel.diasPagamentoPlanoFk;
    }
}

Object.seal(ClienteModel);

export default ClienteModel;
