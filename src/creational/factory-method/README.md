# Uma classe tem um método fábrica (que cria objetos)
Definir uma interface para criar um objeto, mas deixar as subclasses deicidirem que classe instanciar. O factory method permite adiar a instanciação para as subclasses

É um padrão de projeto de criação (lida com a criação de objetos)
Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por instanciar as classes desejadas (desacopla o código que cria do código que utiliza)
É obtido através de herança. O método fábrica pode ser criado ou sobrescrito por subclasses
Dá flexibilidade ao código cliente permitindo a criação de novas factories sem a necessidade de alterar o código já escrito (OCP)
Pode usar parâmetros para determinar o tipo dos objetos a serem criados ou os parâmetros a serem enviados aos objetos sendo criados
