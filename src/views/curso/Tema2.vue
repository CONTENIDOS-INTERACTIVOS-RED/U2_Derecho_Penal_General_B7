<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. La teoría del delito y su estructura'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p.mb-0 La teoría del delito constituye uno de los pilares fundamentales del Derecho Penal moderno, ya que proporciona el marco conceptual necesario para establecer cuándo una conducta humana puede ser considerada jurídicamente como delito y, por tanto, susceptible de sanción penal. Su objetivo es ofrecer una herramienta sistemática y racional para analizar el hecho punible, permitiendo determinar si una persona debe ser considerada penalmente responsable por una conducta determinada (Zambrano Pasquel, 2014).

    h2.mb-5(data-aos="fade-left") Evolución doctrinal y función de la teoría del delito

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") A lo largo del tiempo, diversas escuelas doctrinales han enriquecido esta teoría: desde la escuela clásica hasta las corrientes finalistas y funcionalistas. Aunque existen diferencias entre ellas, todas coinciden en la necesidad de estructurar el análisis del delito en elementos objetivos y verificables. Esta metodología ha sido adoptada en gran medida por el Código Penal colombiano (Ley 599 de 2000), lo que permite a jueces, fiscales y defensores abordar el hecho punible con base en criterios jurídicos claros y no arbitrarios.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Es importante destacar que no toda conducta socialmente reprobable es necesariamente un delito. Solo aquellas que cumplan con todos los elementos de la estructura del delito pueden ser objeto de sanción penal. Por ello, el estudio de esta teoría se orienta a examinar cada uno de sus componentes esenciales, desde la acción inicial hasta la existencia o no de causas excluyentes de responsabilidad.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema2/3.svg" data-aos="zoom-in", style="width: 90px;")
    
    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Estructura del delito
        p.mb-5 El ordenamiento jurídico colombiano define el delito como una conducta punible típica, antijurídica y culpable. Esta concepción revela un enfoque analítico que exige la verificación rigurosa y separada de cada elemento constitutivo del delito, lo que refuerza el principio de legalidad y previene decisiones arbitrarias.
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Conducta
                p.text-center Acción u omisión voluntaria realizada por una persona. Debe ser humana y con capacidad de control.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tipicidad
                p.text-center La conducta debe encajar de manera exacta en la descripción legal de un tipo penal.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/6-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Antijuridicidad
                p.text-center La conducta típica debe violar el ordenamiento jurídico. Puede excluirse, por ejemplo, si se actúa en <em>legítima defensa</em>.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Culpabilidad
                p.text-center El autor debe tener capacidad de comprender y autodeterminarse según la ilicitud del hecho. Requiere dolo o culpa, dependiendo del tipo penal.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Imputabilidad
                p.text-center Hace referencia a la capacidad del autor de ser responsable penalmente. Se excluye en casos como la inimputabilidad por trastorno mental.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Imputación objetiva
                p.text-center Evalúa si el resultado puede atribuírsele objetivamente al comportamiento del autor, considerando riesgos permitidos, fin de la norma, entre otros.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Punibilidad
                p.text-center No basta con que la conducta sea típica, antijurídica y culpable: debe ser además punible. Existen causales que excluyen la punibilidad (como el perdón judicial o la prescripción).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ausencia de responsabilidad
                p.text-center Causales que impiden sancionar penalmente al autor a pesar de haberse verificado los demás elementos. Están previstas en el artículo 9 del Código Penal.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/4.png', alt='')
    
    h2(data-aos="fade-left") Función práctica y garantista
    p.mb-5 Más allá de su valor dogmático, la teoría del delito cumple una función práctica y garantista. Permite establecer si existen razones para sancionar penalmente una conducta, pero también protege los derechos del procesado. Por Ejemplo.

    .bg-full-width.bg-color-13
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 1
                p.mb-0 Una conducta puede ser <b>típica</b>, pero no antijurídica si se actuó en legítima defensa.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 2
                p.mb-0 Puede ser <b>antijurídica</b>, pero no culpable si quien la cometió carecía de capacidad de comprensión o autodeterminación.

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-10.p-4(data-aos="fade-left")
              p En este sentido, la teoría del delito exige a las autoridades judiciales una argumentación racional y fundada, evitando decisiones arbitrarias o desproporcionadas. De esta forma, se convierte en una herramienta esencial para garantizar el debido proceso, el respeto por la legalidad y la aplicación proporcional del poder punitivo.
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/enlace.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Teoría del delito y su estructura
                      p Para conocer más sobre la teoría del delito y su estructura, consulta el siguiente recurso:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69776 " target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Teoría del delito
                      p Para conocer más sobre la teoría del delito, los invitamos a ver el siguiente video:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=GZEAAdU5L-o" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right 
    
    h2.mb-5(data-aos="fade-left") Definición y función del delito en el Derecho Penal

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/15.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El delito es el concepto central en torno al cual gira el Derecho Penal, ya que constituye el presupuesto básico para la imposición de una pena o medida de seguridad. Sin delito no hay intervención penal legítima, lo que hace que su definición y análisis sean esenciales para garantizar la legalidad, la seguridad jurídica y los derechos fundamentales de los ciudadanos. En esencia, el delito representa una conducta humana que infringe una norma penal previamente establecida y que, por tanto, merece una respuesta sancionadora por parte del Estado.
    
    p.mb-4 En el Derecho Penal colombiano, el concepto de delito no es simplemente una lista de actos prohibidos. Se trata de una construcción jurídica que ha evolucionado con el tiempo y que hoy se basa en tres elementos fundamentales. Este video te ayudará a comprender cómo se define el delito, cuáles son sus componentes esenciales y qué funciones cumple dentro del sistema penal.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/15-1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white En el caso colombiano, esta función se relaciona directamente con los principios constitucionales de legalidad, dignidad humana y debido proceso. La Corte Constitucional ha reiterado que la intervención penal solo es legítima cuando se respetan las condiciones legales y se protege un bien jurídico con relevancia constitucional. Así, el delito no solo es una infracción reprochable, sino una categoría jurídico-normativa que establece los límites y fundamentos de la potestad sancionadora del Estado.
    
    h2(data-aos="fade-left") Elementos estructurales del delito
    p.mb-5 En el Derecho Penal colombiano, el delito no se reduce a una simple infracción normativa. Por el contrario, debe analizarse desde una perspectiva técnica y dogmática, que permita determinar en qué condiciones una conducta humana puede ser penalmente sancionada. Para ello, la teoría del delito establece tres elementos fundamentales que deben concurrir de manera conjunta: tipicidad, antijuridicidad y culpabilidad. La ausencia de cualquiera de ellos impide que se configure el delito, garantizando la seguridad jurídica y el respeto por los derechos fundamentales del procesado.

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Tipicidad")
            p Consiste en la adecuación entre la conducta realizada y el tipo penal previsto por la ley. Se verifica si los hechos coinciden con lo descrito normativamente, tanto en sus elementos objetivos (acción, resultado, nexo causal) como subjetivos (intención o culpa). 
            p <b>Ejemplo.</b> El artículo 239 del Código Penal tipifica el hurto como la apropiación de cosa mueble ajena con ánimo de lucro. Si alguien sustrae un celular ajeno sin permiso, su conducta es típica. (Beccaria, 2009)

    
          .div(titulo="Antijuridicidad")
            p Se refiere a si la conducta típica contradice el orden jurídico en su conjunto. Se presume que toda conducta típica es antijurídica, pero puede desvirtuarse si existe una causa de justificación. 
            p Las causas están previstas en el artículo 32 del Código Penal: legítima defensa, estado de necesidad, ejercicio legítimo de un derecho, entre otras. 
            p <b>Ejemplo.</b> Si alguien lesiona a otro al defenderse de un hurto, su conducta es típica, pero no antijurídica si actuó en legítima defensa.
    
          .div(titulo="Culpabilidad")
            p Es el juicio de reproche que se le hace al autor de una conducta típica y antijurídica. Requiere que el sujeto sea imputable, que conozca la ilicitud de su conducta y que se le pueda exigir un comportamiento diferente. 
            p La culpabilidad se excluye en casos de
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Inimputabilidad (menores de 14 años, trastornos mentales graves – art. 33 C.P.). 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Inexigibilidad de otra conducta (coacción irresistible, amenaza grave). 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Error invencible de prohibición (ej. un indígena que actúa conforme a su cosmovisión, desconociendo la ilicitud de su conducta en el derecho nacional).

    .bg-full-width.bg-color-4.mb-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") La presencia simultánea de tipicidad, antijuridicidad y culpabilidad es la que permite afirmar que una conducta constituye un delito en sentido estricto. Estos elementos no deben evaluarse de forma aislada, sino en conjunto, como parte de una única operación jurídica que asegura un tratamiento justo y razonado del hecho punible.
        
            .bg-color-3.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema2/17-1.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Esta visión estructural del delito garantiza que la sanción penal solo recaiga sobre conductas verdaderamente reprochables, que no estén justificadas ni exentas de responsabilidad. Así, el Derecho Penal colombiano limita los abusos del poder punitivo y se mantiene fiel a su carácter garantista, evitando la criminalización de comportamientos que, aunque puedan parecer reprobables, no reúnen todas las condiciones exigidas por el ordenamiento jurídico para ser considerados delitos.
        .row.justify-content-center.position-relative
          img.pst.d-none.d-lg-flex(src="@/assets/curso/tema2/18.svg", data-aos="zoom-in", style="max-width: 200px")
          .col-lg-8
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/enlace.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Elementos estructurales del delito
                      p Para conocer más sobre los elementos estructurales del delito, consulta el siguiente recurso:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/36683" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Elementos estructurales del delito
                      p Para conocer más sobre los elementos estructurales del delito, los invitamos a ver el siguiente video:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=8OJieNGaYZE" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right 
    
    h2.mb-5(data-aos="fade-left") Imputación objetiva y modalidades de la conducta punible 
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-ppal-claro.p-5(data-aos="fade-left")
          p.mb-0 La imputación objetiva es un elemento clave del análisis penal moderno, ya que permite determinar cuándo un resultado lesivo puede ser jurídicamente atribuido a una persona, más allá de la simple relación causal. Para que exista imputación objetiva, la conducta debe haber creado un riesgo jurídicamente desaprobado y ese riesgo debe haberse concretado en el resultado típico.
        .bg-color-1.p-5(data-aos="fade-left")
          p.mb-0  <b>Ejemplo.</b> Si una persona lanza un objeto desde un quinto piso sin precaución y este causa la muerte de un transeúnte, el resultado es objetivamente imputable porque se generó un riesgo inadmisible que afectó un bien jurídico protegido: la vida.
    
    p.mb-4 Una vez establecida la imputación, el Código Penal colombiano (Ley 599 de 2000, artículos 19 al 31) contempla diversas modalidades de la conducta punible, lo cual permite clasificar y valorar la forma en que se manifiesta el delito y la responsabilidad del autor. Modalidades de la conducta punible:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Dolo" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Dolo
            p Una persona planea el asesinato de su pareja por venganza, compra un arma y ejecuta el crimen. Conoce y quiere la realización del hecho típico.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/20.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Culpa" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Culpa
            p Un médico comete un error grave durante una cirugía por no seguir el protocolo, causando la muerte del paciente. O un conductor que atropella a un peatón por usar el celular en zona escolar. No hay intención, pero sí imprudencia o negligencia.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/21.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Preterintención" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Preterintención
            p Una persona golpea a otra en una riña con intención de lesionar, pero esta muere al golpearse la cabeza con el andén. El resultado es más grave que el querido.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/22.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Tentativa" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Tentativa
            p Alguien entra armado a una joyería con intención de robar, pero es detenido antes de lograrlo porque su arma se cae. Inicia el delito, pero no lo consuma por causas ajenas a su voluntad.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/23.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Formas de autoría y participación
        p.mb-5 Los artículos 28 y 29 del Código Penal diferencian entre diversas formas de intervención en el delito:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/24.svg" alt="" style="width: 90px")
              h5.text-center Autor directo
              p.mb-0.text-center Un ladrón entra solo a una casa y sustrae objetos de valor. Realiza el delito por sí mismo.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/25.svg" alt="" style="width: 90px")
              h5.text-center Coautor
              p.mb-0.text-center Dos personas planifican y ejecutan un secuestro, cada una cumpliendo un rol (uno vigila y otro traslada a la víctima). Actúan conjuntamente.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/26.svg" alt="" style="width: 90px")
              h5.text-center Autor mediato
              p.mb-0.text-center Un jefe criminal convence a un menor de edad para cometer un homicidio, aprovechando su inimputabilidad. Usa a otro como instrumento.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/27.svg" alt="" style="width: 90px")
              h5.text-center Determinador
              p.mb-0.text-center Una persona induce a un menor a matar a alguien prometiéndole dinero. Sin su influencia, el hecho no habría ocurrido.

    h2(data-aos="fade-left") Concurso de conductas punibles
    p.mb-5 El artículo 31 contempla el concurso cuando una persona comete varios delitos simultánea o sucesivamente.
    

    .bg-full-width.bg-color-13
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/28.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            .bg-color-19.p-5(data-aos="fade-left")
              p.mb-0 <b>Ejemplo.</b> Una persona secuestra a un comerciante y durante el cautiverio le causa lesiones graves. Se presenta concurso de secuestro extorsivo y lesiones personales, y el juez debe valorar la gravedad de cada conducta para aplicar la pena proporcional.
            .bg-color-10.p-5(data-aos="fade-left")
              p.mb-0 Todas estas modalidades y formas de intervención reflejan la complejidad del fenómeno delictivo y permiten que el sistema penal colombiano ajuste la sanción según la conducta, el grado de participación y el contexto del hecho, respetando los principios de legalidad, culpabilidad, proporcionalidad y humanidad.
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/29.svg", data-aos="zoom-in")
          .col-lg-8
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/enlace.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Modalidades de la conducta punible
                      p Para conocer más sobre las modalidades de la conducta punible, consulta el siguiente recurso:  
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Teoría objetiva y delitos culposos
                      p Para conocer más sobre la teoría objetiva y los delitos culposos, consulta el siguiente recurso:  
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right 
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Imputación objetiva
                      p Para conocer más sobre la imputación objetiva, los invitamos a ver el siguiente video: 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=isqjWGx28_g " target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right 


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/34251" target="_blank" rel="noopener noreferrer") Figueroa Ortega, Y. (2009). Delitos de infracción de deber: (ed.). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/36683 " target="_blank" rel="noopener noreferrer") Blanco Lozano, C. (2008). Tratado de derecho penal español. Tomo I: el sistema de la parte general. Volumen 2: la estructura del delito: ( ed.). J.M. BOSCH EDITOR. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/900/90075846002/90075846002.pdf " target="_blank" rel="noopener noreferrer") León González, PA, (2023). Apuntes y reflexiones sobre el dolo y su regulación en el derecho penal ecuatoriano. Foro, Revista de Derecho,   (40), 7-27. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/851/85132008003.pdf " target="_blank" rel="noopener noreferrer") Sánchez Zapata, SF, (2014). La conducta punible en el Derecho Penal colombiano: análisis del artículo 9 del Código Penal. Revista de Derecho ,   (42), 33-64. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.17533/udea.esde.v78n171a06 " target="_blank" rel="noopener noreferrer") García Patiño, E. M., & Pérez López, D. A. (2020). La detención domiciliaria para las madres reclusas en Colombia en garantía del principio de interés superior del niño. Estudios De Derecho, 78(171), 141–170.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=GZEAAdU5L-o " target="_blank" rel="noopener noreferrer") Alberto Santillan. (2020, 30 de abril). Teoría del delito [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=8OJieNGaYZE" target="_blank" rel="noopener noreferrer") Daniel Barreto. (2020, 7 de diciembre). Tipicidad y antijuricidad. [Vídeo]. YouTube.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=isqjWGx28_g  " target="_blank" rel="noopener noreferrer") Globo Enfoques. (2021, 19 de enero). Estudiemos Derecho Procesal Penal con Andrés Felipe Arango 2021 [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
