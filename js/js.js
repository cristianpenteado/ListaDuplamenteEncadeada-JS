//IPLEMENTAÇÃO DE UMA LISTA DUPLAMENTE ENCADEADA EM JAVASCRIPT
function ListaDuplamenteEncadeada() {

    //CRIAÇÃO DE OBJETO "Celula" COM 3 PROPRIEDADES
    //ELEMENTO, ANTERIOR E PRÓXIMO
    function Celula(elemento) {
        this.elemento = elemento;
        this.anterior = null;
        this.proximo = null;
    }
    //CRIAÇÃO DE DUAS VARIÁVEIS DO TIPO CELULA E UMA DO TIPO NÚMERO
    let primeira = Object.create(Celula);
    let ultima = Object.create(Celula);
    let totalElementos = 0;

    //MÉTODO PARA VERIFICAR SE UMA POSIÇÃO ESTÁ OCUPADA
    function posicaoOcupada(posicao) {
        return posicao >= 0 && posicao < totalElementos;
    }
    // FUNÇÃO COM UM PARÂMETRO PARA PEGAR DETERMINDA POSIÇÃO DA LISTA
    function pegaCelula(posicao) {
        //PRIMEIRO É FEITA A VERIFICAÇÃO SE A POSIÇÃO INSERIDA É MAIOR QUE O NÚMERO DE ELEMENTOS DA LISTA
        if (posicao > totalElementos) {
            //EXIBINDO UMA MENSEGEM ANTES DE EXIBIR O ERRO
            console.log("A posição não pode ser inserida ");

            //CASO A POSIÇÃO ESTEJA DENTRO DO TAMANHO DA LISTA
            //CRIAMOS UMA VARIÁVEL CHAMADA ATUAL QUE RECEBERÁ O VALOR DA PRIMEIRO ELEMENTO DA LISTA
            //ATRAVÉS DE UM "FOR" PERCORREMOD A LISTA ATÉ CHEGAR NO ELEMENTO DESEJADO
            //E RETORNAMOS O VALOR DO ELEMENTO
        } else {
            atual = primeira;
            for (i = 0; i < posicao; i++) {
                atual = atual.proximo;
            }
        }
        return atual;
    }

//FUNÇÃO PARA ADICIONAR ELEMENTOS NA LISTA
    this.adiciona = function (posicao, elemento) {
        //CRIAMOS UMA NOVA INSTÂNCIA DE CELULA
        celula = new Celula(elemento);
        //VERIFICAMOS SE A POSIÇÃO É A PRIMEIRA
        if (posicao == 0) {
            //SE SIM, O PRÓXIMO ELEMENTO DO OBJETO CELULA RECECE O VALOR DA PRIMEIRA DA LISTA
            //E O VAOR DA PRIMEIRA É SETADO COM O VALOR DA CÉLULA
            celula.proximo = primeira;
            primeira = celula;
            //DEPOIS VERIFICAMOS SE FOR O PRIMEIRO ITEM DA LISTA
            //CASO SEJA, SETAMOS O VALOR DO ULTIMO ELEMENTO PARA O MESMO DO PRIMEIRO
            if (totalElementos == 0) {
                ultima = primeira;
            } 
            //CASO A POSIÇÃO FOR IGUAL A QUANTIDADE DE ELEMENTO DA LISTA
            //CRIAMOS UMA VARIAVEL "ATUAL" QUE RECEBE O VALOR DA ÚLTIMA CÉLULA DA LISTA
            //SETAMOS O PROXIMO ELEMENTO COMO A NOVA CELULA
            //ALTERAMOS O VALOR DO SEU ANTEIROR PARA O VALOR DA ATUAL
            //E FAZEMOS A ULTIMA CÉLULA RECEBER O NOVO ELEMENTO
        } else if (posicao == totalElementos) {

            atual = ultima;
            atual.proximo = celula;
            celula.anterior = atual;
            ultima = celula;
            //CASO NÃO ATENDA NENHUMA DAS CONDIÇÕES ANTERIORES
            //CRIAMOS TRES VARIAVEIS: ATUAL QUE RECEBERÁ O VALOR DO PRIMEIRO ELEMENTO
            //UMA VARIAVEL CHAMADA PREV QUE SERVE PARA DAR SUPORTE
            //E UMA VARIAVEL AUXILIAR INICILIZADA COM ZERO
        } else {
            let atual = primeira,
                prev,
                aux = 0;
            //ATRAVÉS DE UM WHILE INCREMENTAMOS A VARIÁVEL AUXILIAR ATÉ ELA FOR IGUAL A POSIÇÃO
            while (aux++ < posicao) {
                //SETAMOS A VARIAVEL PREV COM O VALOR DA ATUAL
                //E A ATUAL SETAMOS COM SUA PRÓXIMA
                prev = atual;
                atual = atual.proximo;
            }
            //EM SEGUIDA SETAMOS O PROXIMO ELEMENTO DA CELULA COM O VALOR DA ATUAL
            //ATERAMOS O PROXIMO DE PRV COM O VALOR DA CELULA
            //MUDAMOS O VALOR DA ANTERIOR DA CELULA ATUAL PARA O VALOR DA CELULA
            //POR FIM FAZEMOS A ANTERIOR DA CELULA RECEBER PREV
            celula.proximo = atual;
            prev.proximo = celula;
            atual.anterior = celula;
            celula.anterior = prev;

        }
        //DEPOIS DE QUALQUER UMA DAS CONDIÇÕES SEREM ATENDIDADAS AUMENTAMOS UM ELEMENTO NA LISTA
        totalElementos++;
    }
    //FUNÇÃO PARA REMOVER ELEMENTOS PELA POSIÇÃO
    this.remove = function (posicao) {
        //PRIMEIRO VERIFICAMOS SE A POSIÇÃO EXISTE
        if (!posicaoOcupada(posicao)) {
            console.log('Posição não existe');
        }
        //CASO A POSIÇÃO FOR IGUAL A ZERO
        if (posicao == 0) {
            //VERFICAMOS SE ELA ESTÁ OCUPADA
            if(!posicaoOcupada(0)){
                console.log('Não é possível remover')
            }
            //ATERAMOS O VALOR DA PRIMEIRA PARA O SEU PROXIMO
            //E SETAMOS SUA ANTERIOR PARA NULA
            //REMOVENDO O PRIMEIRO ITEM
            primeira = primeira.proximo;
            primeira.anterior = null;
        } else if (posicao == (totalElementos - 1)) {
            //SE O ITEM A SER REMOVIDO FOR O ULTIMO
            //CRIAMOS UMA VARIAVEL AUXILIAR CHAMADA PENULTIMA
            //E PEGAMOS O ITEM ANTERIOR AO ULTIMO E COLOCAMOS NESSA VARIAVEL
            //SETAMOS SEU PROXIMO PARA NULO
            //E ATERAMOS O VALOR DA ULTIMA PARA O VALOR DA PENULTIMA
            //REMOVENDO O ULTIMO ITEM
            penultima = ultima.anterior;
            penultima.proximo = null;
            ultima = penultima;
        } else {
            //CASO O ITEM ESTEJA NO MEIO DA LISTA
            //CRIAMOS UMA VARIAVEL QUE RECEBE O VALOR DA FUNCAO PEGACELULA INDEXADA DA POSIÇAO 
            //DECLARAMOS OUTRA VARIAVEL CHAMADA ATUAL QUE RECEBE O VALOR DO PROXIMO ELEMENTO DA ANTERIOR
            //E CRIAMOS OUTRA VARIAVEL CHAMADA PROXIMA QUE RECEBE O VALOR DA PROXIMA DA ATUAL
            //DEPOIS SETAMOS O VALOR DA PROXIMA DA ANTERIOR PARA O VALOR DA PROXIMA
            //E POR FIM ALTERAMOS VALOR DA ANTERIOR DA PROXIMA PARA O VALOR DA ANTERIOR
            //REMOVENDO O ELEMENTO E MATENDO SEU ANTECESSOR E POSTERIOR
            anterior = pegaCelula(posicao - 1);
            atual = anterior.proximo;
            proxima = atual.proximo;
            anterior.proximo = proxima;
            proxima.anterior = anterior;
            
        }
        //DIMINUINDO UM ELEMENTO DA LISTA
        totalElementos--;
    }

    //FUNÇÃO QUE RETORNA O TAMANHO DA LISTA
    this.tamanho = function () {
        return "O total de elementos da lista é: " + totalElementos + " elementos.";
    }
    //MODIFICAMOS O "TOSTRTING" PARA IMPRIMIRMOS O VALOR DOS OBJETOS
    this.toString = function () {
        let atual = primeira;
        string = '';
        while (atual) {
            string += (atual.anterior ? ' [' : '') + atual.elemento + (atual.proximo ? '] ' : '');
            atual = atual.proximo;
        }
        return string;
    };

}