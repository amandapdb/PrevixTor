# 🔧 Projeto: PrevixTor

O **PrevixTor** é um ecossistema de inteligência artificial focado em **Manutenção Preditiva Industrial**. Desenvolvido para a disciplina de Ciência de Dados, o projeto utiliza modelos avançados de *Machine Learning* para monitorar sensores de máquinas em tempo real e prever falhas antes que elas causem paradas na produção

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo%20/%20M4-brightgreen)
![Python](https://img.shields.io/badge/Python-3.9+-blue?logo=python)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-Modelagem-orange?logo=scikit-learn)
![Google AI Studio](https://img.shields.io/badge/Interface-Google%20AI%20Studio-blueviolet?logo=google-gemini)

# 👥 1. Identificação do Grupo

### 1. Identificação do Grupo
* **Instituição:** Faculdade Engenheiro Salvador Arena
* **Curso:** [Engenharia de Controle e Automação]
* **Grupo:** [04]
* **Integrantes:**
    * [Amanda Perini] - RA: [062210013]
    * [Arthur Delgado] - RA: [062210036]
    * [Beatriz Ashiley] - RA: [062210037]
    * [Henrique Lopes] - RA: [062210001]

---

### 🎯 2. Área-Problema Selecionada
O grupo seleciona uma das áreas norteadoras abaixo para o desenvolvimento do projeto:
* [X] Manutenção Preditiva de Zero-Downtime
* [ ] Eficiência Energética e Descarbonização via Smart Grids
* [ ] Controle de Qualidade Autônomo com Visão Computacional
* [ ] Gêmeos Digitais (Digital Twins) e Analytics em Tempo Real

---

###  🧩 3. Diagnóstico e Definição do Problema
Esta seção apresenta a fundamentação do desafio. O grupo descreve o cenário de atuação e justifica a importância da solução proposta.
* **Contexto:** O projeto aborda o cenário da Indústria 4.0, com foco em motores elétricos utilizados em esteiras industriais, onde a operação contínua é essencial para a produtividade.
* **Problema:** A dificuldade central reside na ocorrência de falhas inesperadas em motores elétricos, que causam paradas não planejadas e não são previstas com precisão por métodos tradicionais,
                impactando diretamete na produtividade do setor em questão.
* **Impacto:** A solução visa otimizar paradas não planejadas, diminuir custos de manutenção e aumentar a confiabilidade operacional por meio da previsão de falhas baseada em dados.

---

### 🗂️ 4. Arquitetura de Dados (Fonte e Dataset)
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

### 🔄 5. Plano de Tratamento de Dados (ETL)
O pipeline de dados segue as seguintes etapas de processamento:
1. **Extração:** A ingestão ocorre via arquivos CSV do dataset AI4I, obtidos do repositório UCI.
2. **Transformação:** O grupo aplica a limpeza de valores ausentes, a remoção de outliers e a normalização das escalas numéricas. 
3. **Carga:** Os dados tratados são disponibilizados na pasta `/data/processed` para consumo dos modelos de Machine Learning.

---

### 📈 6. Desenvolvimento e Otimização (M2, M3 e M4)
### M2 — Análise Exploratória (EDA)
Análise descritiva para identificar correlações, distribuições e padrões iniciais no dataset.

### M3 — Modelagem de IA
Desenvolvimento dos modelos preditivos e avaliação inicial de desempenho (Acurácia, Precisão, Recall, F1-Score).

### M4 — Refinamento e Otimização Profissional
Etapa final para garantir a robustez técnica:
* **Ajuste de Hiperparâmetros:** Uso de `GridSearchCV` ou `RandomSearch` para encontrar o melhor desempenho.
* **Validação Cruzada (Cross-Validation):** Garantia de que o modelo generaliza bem para novos dados (evitando overfitting).
* **Engenharia de Atributos Final:** Seleção das variáveis mais importantes (*Feature Importance*).
---

### 🖥️ 7. Dashboard de Monitoramento

Interface visual para acompanhamento dos resultados:
- **Link do Protótipo:** [[INSERIR LINK DO GOOGLE AI STUDIO OU OUTRO]](https://ai.studio/apps/579c07f3-a2ad-4930-bb69-43f4fd282dac)
- **Funcionalidades:** [Ex: Gráfico de probabilidade de falha, entrada de dados manual para predição, KPIs de performance da IA].

---

### ☺ 8. Aprofundamento Estatístico Individual

- A aluna Amanda validou que a relação entre a temperatura do ar e a temperatura do processo é significativa (p < 0,05) e apresenta forte correlação (≈ 0,86). Isso indica que ambas as variáveis possuem relevância para o modelo de Machine Learning, contribuindo para a capacidade preditiva. No entanto, por apresentarem alta correlação entre si, é necessário avaliar possíveis redundâncias, podendo ser considerada a utilização de apenas uma delas ou a criação de novas features derivadas, visando otimizar o desempenho do modelo.

- O aluno Henrique Lopes validou estatisticamente que a velocidade de rotação influencia o desgaste da ferramenta (p < 0,05), sendo uma variável relevante para modelos de manutenção preditiva.

- O aluno Arthur validou estatisticamente que a hipótese nula foi rejeitada, indicando que existe uma diferença estatisticamente significativa entre o torque em diferentes níveis de velocidade rotacional.
Isso confirma o padrão observado na EDA e mostra que a relação entre essas variáveis não ocorreu por acaso.
Impacto no problema de negócio:
A relação entre velocidade e torque é um fator crítico no comportamento do motor e pode ser usada como indicador importante de falhas ou desgaste.
Impacto no modelo de IA:
As variáveis de velocidade (RPM) e Torque devem ser consideradas essenciais no modelo preditivo, sendo que essa relação pode melhorar significativamente a capacidade de prever falhas.

- A aluna Beatriz verificou, por meio de análise estatística, que o p-valor obtido foi superior a 0,05, indicando que não há evidências suficientes para rejeitar a hipótese nula.
Esse resultado sugere que a temperatura do ar não exerce influência estatisticamente significativa sobre a velocidade de rotação, apresentando, portanto, baixa relevância como variável preditora em modelos de machine learning.
 

---

# M3

## Objetivo

O projeto tem como objetivo prever falhas em máquinas industriais com base em variáveis operacionais, utilizando técnicas de Machine Learning.

---

## Modelo Utilizado

Foi utilizado o algoritmo **Random Forest Classifier**, adequado para problemas de classificação.

---

## Variáveis de Entrada

* Type
* Air temperature
* Process temperature
* Rotational speed
* Torque
* Tool wear

---

## Variável Alvo

* Machine failure (0 = sem falha | 1 = falha)

---

## Métricas de Avaliação

* Acurácia: 0.99
* F1-Score: 0.98
* Matriz de Confusão: utilizada para avaliar o desempenho do modelo
* [[1932 0]
* [ 2   66]]

---

##  Protótipo da Aplicação

A aplicação foi desenvolvida no Google AI Studio para simular o funcionamento do modelo em um ambiente interativo.

 Acesse o protótipo:
[[https://aistudio.google.com/apps/8c38ab14-6db7-43ed-a190-d4e9674d4283](https://ai.studio/apps/579c07f3-a2ad-4930-bb69-43f4fd282dac))](https://ai.studio/apps/8c38ab14-6db7-43ed-a190-d4e9674d4283)

---

## Observação

Devido a limitações do Google AI Studio para execução de modelos baseados em sklearn, foi implementada uma simulação da lógica do modelo para representar o comportamento da previsão de falhas.

---

## Conclusão

O modelo demonstrou capacidade de identificar padrões associados a falhas, podendo ser utilizado como base para sistemas de manutenção preditiva.
