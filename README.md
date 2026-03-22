# Projeto: PrevixTor

### 1. Identificação do Grupo
* **Instituição:** Faculdade Engenheiro Salvador Arena
* **Curso:** [Engenharia de Controle e Automação]
* **Grupo:** [AABH]
* **Integrantes:**
    * [Amanda Perini] - RA: [062210013]
    * [Arthur Delgado] - RA: [062210036]
    * [Beatriz Ashiley] - RA: [062210037]
    * [Henrique Lopes] - RA: [062210001]

---

### 2. Área Problema Selecionada
O grupo seleciona uma das áreas norteadoras abaixo para o desenvolvimento do projeto:
* [X] Manutenção Preditiva de Zero-Downtime
* [ ] Eficiência Energética e Descarbonização via Smart Grids
* [ ] Controle de Qualidade Autônomo com Visão Computacional
* [ ] Gêmeos Digitais (Digital Twins) e Analytics em Tempo Real

> **Nota:** Marque com um [x] a opção escolhida.

---

### 3. Diagnóstico e Definição do Problema
Esta seção apresenta a fundamentação do desafio. O grupo descreve o cenário de atuação e justifica a importância da solução proposta.
* **Contexto:** O projeto aborda o cenário da Indústria 4.0, com foco em motores elétricos utilizados em esteiras industriais, onde a operação contínua é essencial para a produtividade.
* **Problema:** A dificuldade central reside na ocorrência de falhas inesperadas em motores elétricos, que causam paradas não planejadas e não são previstas com precisão por métodos tradicionais,
                impactando diretamete na produtividade do setor em questão.
* **Impacto:** A solução visa otimizar paradas não planejadas, diminuir custos de manutenção e aumentar a confiabilidade operacional por meio da previsão de falhas baseada em dados.

---

### 4. Arquitetura de Dados (Fonte e Dataset)
O projeto utiliza dados estruturados para alimentar os modelos preditivos.
* **Origem dos Dados:** [(https://archive.ics.uci.edu/ml/datasets/AI4I+2020+Predictive+Maintenance+Dataset)].
* **Características:** O conjunto de dados apresenta variáveis como:
-Sensores Industriais
-Temperatura do Ar
-Temperatura do Processo
-Velocidade de Rotação (RPM)
-Torque
-Desgaste da Ferramenta
-Tipo de Produto
-Indicadores de Falha
* **Volume:** O dataset conta com 10.000 registros e 14 atributos técnicos.

---

### 5. Plano de Tratamento de Dados (ETL)
O pipeline de dados segue as seguintes etapas de processamento:
1. **Extração:** A ingestão ocorre via arquivos CSV do dataset AI4I, obtidos do repositório UCI.
2. **Transformação:** O grupo aplica a limpeza de valores ausentes, a remoção de outliers e a normalização das escalas numéricas. 
3. **Carga:** Os dados tratados são disponibilizados na pasta `/data/processed` para consumo dos modelos de Machine Learning.

---

### 6. Estrutura do Repositório
A organização das pastas facilita a manutenção e o versionamento do projeto:
* `/docs`: Contém os diagramas de fluxo de dados e a documentação técnica.
* `/data/raw`: Armazena os arquivos de dados originais (não modificados).
* `/data/processed`: Armazena os dados após a execução do script de ETL.
* `/scripts`: Contém os códigos Python responsáveis pelo tratamento dos dados.
* `requirements.txt`: Lista todas as bibliotecas necessárias para a execução do projeto.

---

### 7. Instruções para Execução
Para reproduzir o ambiente de dados e executar o pipeline de ETL:
1. Clona-se este repositório.
2. Instalam-se as dependências através do comando:
   ```bash
   pip install -r requirements.txt
