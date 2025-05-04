<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Interpretación y aplicación de la ley penal'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El estudio de la interpretación y aplicación de la ley penal constituye un aspecto esencial del Derecho Penal, pues establece cómo deben comprenderse y ejecutarse las disposiciones contenidas en la legislación penal vigente. En Colombia, estas normas están principalmente contenidas en la Ley 599 de 2000, conocida como el Código Penal colombiano, que regula las conductas punibles, las sanciones aplicables y los principios que rigen el ejercicio del ius puniendi o poder punitivo del Estado.

    p.mb-4 La finalidad de la ley penal es proteger los bienes jurídicos fundamentales de la sociedad, como la vida, la libertad, la integridad personal, la seguridad pública y el patrimonio económico. Para garantizar su correcta aplicación y evitar interpretaciones arbitrarias, el Derecho Penal debe regirse por principios garantistas, los cuales delimitan el alcance del poder punitivo estatal y protegen los derechos fundamentales de los ciudadanos. Los principios de interpretación penal son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Legalidad
              p Solo se puede sancionar conductas previamente definidas como delito por la ley. (<em>Nullum crimen, nulla poena sine lege</em>).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Favorabilidad
              p Si existen varias normas aplicables, debe preferirse la más benigna para el procesado, incluso con retroactividad (C.P. art. 29; C.PEN art. 6).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Estricta tipicidad
              p La conducta debe encajar exactamente en el tipo penal definido por la ley, sin analogías.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Proporcionalidad
              p La sanción debe ser adecuada y proporcional a la gravedad del delito cometido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Interpretación restrictiva
              p Las normas penales deben interpretarse de forma limitada, sin extender su alcance más allá de lo expresamente previsto. (Sandoval Fernández, 2013).
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-9
        h2(data-aos="fade-left") Métodos de interpretación
        p.mb-5 La interpretación de la ley penal es fundamental, ya que no siempre existen soluciones literales en el texto normativo. En estos casos, el juez debe recurrir a métodos de interpretación reconocidos por el ordenamiento jurídico, así como a criterios doctrinales y jurisprudenciales, con el fin de aplicar las normas de acuerdo con los fines del Derecho Penal, la justicia material y la protección de los derechos fundamentales.
    
        .bg-color-1.p-4(data-aos="fade-left")
          h5 Aplicación de la ley penal en el tiempo
          p La aplicación temporal de la ley penal plantea cuestiones sobre su vigencia. Es necesario establecer desde cuándo y hasta cuándo produce efectos una norma penal y cómo proceder ante modificaciones legislativas. Según el artículo 29 de la Constitución y el artículo 6 del Código Penal, si una nueva ley es más favorable para el procesado, debe aplicarse de manera retroactiva, incluso cuando ya exista sentencia en firme, siempre que beneficie al condenado.
    
    h2.mb-4(data-aos="fade-left") Aplicación de la ley penal en el espacio

    .bg-full-width.bg-color-4.mb-3
      .px-4.px-md-5.py-4 
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/8.svg", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-10.p-4(data-aos="fade-left")
              p En cuanto a su aplicación espacial, la ley penal se rige por el principio de territorialidad (C.PEN art. 14), aplicándose a toda persona que cometa delitos dentro del territorio colombiano, incluyendo espacio aéreo y marítimo. No obstante, existen criterios complementarios, como la extraterritorialidad, aplicable en situaciones excepcionales, por ejemplo, delitos cometidos por funcionarios públicos en el exterior o crímenes que afecten intereses esenciales del Estado, siempre en armonía con los tratados internacionales ratificados por Colombia.
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/enlace.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Aplicación de la Ley Penal
                      p Para conocer más sobre la aplicación de la Ley penal, consulta el siguiente recurso:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html " target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Aplicación de la Ley Penal en Colombia
                      p Para conocer más sobre la aplicación de la Ley penal, los invitamos a ver el siguiente video:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=rxxlKAcxXHc" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8
        h2.mb-5(data-aos="fade-left") Métodos de interpretación de la ley penal
        .bg-color-3.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La ley penal, como manifestación de la voluntad legislativa, está sujeta a reglas precisas que rigen su aplicación en dos dimensiones fundamentales: el tiempo y el espacio. Esta regulación tiene como propósito garantizar la seguridad jurídica, prevenir la arbitrariedad y proteger los derechos fundamentales frente al ejercicio del poder punitivo del Estado.
        p(data-aos="fade-left") Existen diversos métodos que orientan la interpretación y aplicación de la norma penal. Aunque el método gramatical o literal es el más utilizado, no siempre es suficiente. A continuación se presentan los principales enfoques:
    
    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Literal o gramatical")
            p Analiza el significado lingüístico de las palabras empleadas por el legislador. Se basa en el principio de legalidad (<em>nullum crimen, nulla poena sine lege</em>) y considera que la voluntad del legislador se manifiesta en el texto legal. Es esencial en Derecho Penal, donde se privilegia la claridad y certeza normativa. (Sandoval Fernández, 2013)
    
          .div(titulo="Sistemático")
            p Interpreta la norma dentro del conjunto del ordenamiento jurídico. Relaciona su contenido con otras disposiciones del Código Penal, normas constitucionales, procesales o tratados internacionales. Busca coherencia y armonía normativa.
    
          .div(titulo="Histórico")
            p Considera el contexto en el que fue creada la norma, incluyendo debates legislativos y antecedentes jurídicos. Útil para comprender la intención del legislador.
    
          .div(titulo="Teleológico o finalista")
            p Analiza el fin o propósito de la norma. Permite una interpretación funcional, en especial cuando existen vacíos o ambigüedades.
          .div(titulo="Doctrinal y jurisprudencial")
            p Utiliza las interpretaciones ofrecidas por la doctrina especializada y la jurisprudencia de las altas cortes como guías para resolver conflictos hermenéuticos.
    
    h2(data-aos="fade-left") Aplicación temporal de la ley penal
    p.mb-5 En su dimensión temporal, rige el principio de irretroactividad, que impide aplicar una norma penal a hechos cometidos antes de su entrada en vigor. Este principio está consagrado en el artículo 29 de la Constitución Política de Colombia y en el artículo 6 del Código Penal colombiano (Ley 599 de 2000), como garantía del debido proceso.

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/12.svg", data-aos="zoom-in").mx-auto
          .col-lg-7
            h5.mb-5.text-white Excepción: Retroactividad benigna o principio de favorabilidad
            p.text-white  Este principio permite aplicar retroactivamente la norma penal más favorable al procesado, aun cuando no estuviera vigente al momento de los hechos. Se justifica por un criterio de justicia material: si el legislador reduce una pena o despenaliza una conducta, esa decisión debe beneficiar también a quienes ya fueron condenados o están siendo procesados. Este principio ha sido reiteradamente acogido por la Corte Constitucional y la Corte Suprema de Justicia de Colombia.
    
    h2(data-aos="fade-left") Aplicación espacial de la ley penal
    p.mb-5 En su dimensión espacial, la ley penal se rige por el principio de territorialidad, según el cual las normas penales se aplican a todas las personas que cometan delitos dentro del territorio colombiano, incluyendo el suelo continental, el espacio aéreo, el mar territorial y las embarcaciones bajo bandera nacional (C.PEN art. 14).

    div.ms-3
      ul.lista-ul--color
        li.mb-0.d-flex
          i.fas.fa-circle
          p.mb-0 <b>Excepciones al principio de territorialidad</b>
      p Además del principio general, la ley penal puede extenderse extraterritorialmente bajo ciertos supuestos excepcionales:
    
    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/13.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="80.4%" y="71.5%" numero="+")
                h5 Extraterritorialidad
                p Permite juzgar en Colombia delitos cometidos en el extranjero si afectan bienes jurídicos fundamentales del Estado, se trata de delitos internacionales (genocidio, trata de personas, terrorismo), o si el autor o víctima es colombiano y el hecho no ha sido juzgado en el extranjero. 
    
              .bg-color-white.box-shadow.p-3(x="78%" y="19%" numero="+")
                h5 Personalidad activa
                p Aplica la ley penal colombiana al nacional que comete un delito fuera del país.
    
              .bg-color-white.box-shadow.p-3(x="22%" y="19%" numero="+")
                h5 Personalidad pasiva
                p Permite juzgar a extranjeros por delitos cometidos en el exterior contra ciudadanos colombianos, cuando no hayan sido sancionados en su país.
    
              .bg-color-white.box-shadow.p-3(x="19.8%" y="72%" numero="+")
                h5 Universalidad
                p Aplica a delitos de trascendencia internacional (crímenes de guerra, delitos de lesa humanidad, tortura). Cualquier Estado puede juzgarlos, independientemente del lugar de comisión o nacionalidad de los implicados, conforme a los tratados ratificados por Colombia. (Casanueva Sainz, 2013)

            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Métodos de interpretación de la ley penal
                      p Para conocer más sobre los métodos de interpretación de la ley penal, los invitamos a ver el siguiente video:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=bqfh-Xvw8No " target="_blank")
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
              a(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html " target="_blank" rel="noopener noreferrer") El Congreso de la República de Colombia. (2000). Ley 599 de 2000 Por la cual se expide el Código Penal artículos 14 al 18.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.26807/rfj.v0i3.40 " target="_blank" rel="noopener noreferrer") Yunda López, R. M. (2018). Aplicación temporal de la ley penal, validez y eficacia en infracciones de agresión al Estado. Revista Facultad De Jurisprudencia PUCE, 1(3), 113-136. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.36097/rsan.v0i51.2162 " target="_blank" rel="noopener noreferrer") Muñoa Vidal, T., & Villacreses Palomeque, J. L. (2022). El principio de favorabilidad más allá del quantum de la pena. Revista San Gregorio, (51), 231–248. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rxxlKAcxXHc " target="_blank" rel="noopener noreferrer") Poli. (2022, 2 de febrero). Que es el derecho penal colombiano - «Legalidad y Gobernabilidad a partir del Derecho Penal» [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=bqfh-Xvw8No " target="_blank" rel="noopener noreferrer") Rocio Archila. (2020, 22 de mayo). Derecho Penal I semana 7 video final [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
