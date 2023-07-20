# Encapsular uma solicitação como objeto e dessa forma permitindo parametrizar clientes com diferentes solicitações, enfileirar, fazer o registro/log de solicitações, suportar operações que podem ser desfeitas
# Dissociação de quem chama (quem quer executar) e quem é chamado
# por meio da criação de um payload (quase um dto) que carrega estes dados para outro lugar para poder ser executado depois caso necessário
# O que era uma mera chamada de métodos passando parâmetros agora passa a ser payload
