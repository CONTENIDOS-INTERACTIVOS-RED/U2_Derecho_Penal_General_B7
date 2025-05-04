<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Función de la pena y medidas de seguridad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En el Derecho Penal colombiano, la pena es la principal consecuencia jurídica que se impone a quien ha sido declarado penalmente responsable de un delito. No se trata solo de un castigo, sino de una herramienta legal con múltiples funciones, como lo establece el artículo 4 del Código Penal colombiano: prevención general, retribución justa, prevención especial, reinserción social y protección al condenado.
    
    p.mb-4 Este enfoque integral busca no solo el control del delito, sino también la transformación del infractor, en armonía con los valores del Estado Social de Derecho.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Prevención general")
            p Disuadir a la colectividad mostrando que infringir la ley conlleva sanción. 
            p <b>Ejemplo.</b> Una condena pública por conducir en estado de embriaguez genera un efecto disuasorio.

          .div(titulo="Retribución justa")
            p La pena debe ser proporcional a la gravedad del hecho y a la culpabilidad del autor. No es venganza, sino afirmación del valor de la 
            p <b>Ejemplo.</b> Una condena por homicidio doloso debe reflejar la gravedad del daño causado.
    
          .div(titulo="Prevención especial")
            p Evita la reincidencia mediante la conciencia del daño causado. Puede incluir penas sustitutivas con enfoque restaurativo. 
            p <b>Ejemplo.</b> Condenado por hurto que recibe formación y reflexión sobre su conducta.
      
          .div(titulo="Reinserción social")
            p Promueve la resocialización del condenado a través de programas educativos, laborales o terapéuticos. 
            p <b>Ejemplo.</b> Educación formal y trabajo penitenciario en prisión. (Cruz Márquez, 2008)
          .div(titulo="Protección al condenado")
            p Garantiza condiciones dignas y respeto a los derechos fundamentales durante el cumplimiento de la pena. 
            p <b>Ejemplo.</b> Detención domiciliaria humanitaria para persona con enfermedad grave.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-9
        h2.mb-5(data-aos="fade-left") Medidas de seguridad
        p.mb-5 Además de la pena, el Derecho Penal colombiano contempla las medidas de seguridad, reguladas en los artículos 59 a 68 del Código Penal. Estas se aplican en circunstancias especiales, principalmente cuando el autor del hecho no es plenamente imputable, pero representa un riesgo para la sociedad. A diferencia de la pena, las medidas de seguridad no tienen carácter retributivo, sino preventivo y terapéutico. Están orientadas a reducir la peligrosidad del sujeto y proteger tanto al individuo como a la colectividad.
    
        .bg-color-3.p-4(data-aos="fade-left")
          h5 Ejemplo
          p.mb-0 Una persona con esquizofrenia comete una conducta típica y antijurídica sin comprender su ilicitud. El juez ordena internación en un centro psiquiátrico, con evaluación periódica, en vez de imponer pena. (Cruz Márquez, 2008)
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación entre pena y medidas de seguridad
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-8.text-center Pena
            th.bg-color-8.text-center Medida de seguridad
        tbody
          tr
            td Impuesta a personas imputables y penalmente responsables.
            td Aplicada a personas no plenamente imputables o con inimputabilidad disminuida.
          tr
            td Tiene funciones preventivas, retributivas, resocializadoras y protectoras.
            td Cumple una función preventiva y terapéutica.
          tr
            td Se fundamenta en la culpabilidad y gravedad del delito.
            td Se fundamenta en la peligrosidad del sujeto y necesidad de intervención.
          tr
            td Tiene una duración determinada.
            td Su duración depende de la evolución clínica y evaluaciones periódicas.
    
    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Fundamentos y aplicación de las sanciones penales en Colombia
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Fundamentos y aplicación de las sanciones penales en Colombia</b>, donde se aborda el marco jurídico y doctrinal que orienta la imposición de sanciones penales en el país. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Fundamentos y aplicación de las sanciones penales en Colombia.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')
        .row.justify-content-center
          .col-lg-10
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/enlace.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Medidas de seguridad
                      p Para conocer más sobre las medidas de seguridad, consulta el siguiente recurso:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/58864" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right





    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/34181" target="_blank" rel="noopener noreferrer") Cruz Márquez, B. (2008). La medida de internamiento y sus alternativas en el derecho penal juvenil: ( ed.). Dykinson.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0034-74502005000500005&lng=en&tlng=es.  " target="_blank" rel="noopener noreferrer") Gaviria Trespalacios, Jaime. (2005). LA INIMPUTABILIDAD: CONCEPTO Y ALCANCE EN EL CÓDIGO PENAL COLOMBIANO. Revista Colombiana de Psiquiatría, 34 (Supl. 1), 26-48. Recuperado el 24 de marzo de 2025 de  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/5602/560268191005/html/#:~:text=La%20pena%20tiene%20funci%C3%B3n%20retributiva,de%20curaci%C3%B3n%2C%20tutela%20y%20rehabilitaci%C3%B3n. " target="_blank" rel="noopener noreferrer") Mendieta Pineda, L. M. ., Goyte Pierre, M. ., & Oviedo, I. Y. . (2020). El juez de ejecución de penas y las medidas de seguridad en Colombia: un análisis crítico sobre sus orígenes, consagración normativa y funciones. Via Inveniendi Et Iudicandi, 15(1), 91-118. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.4321/S0211-57352022000100014 " target="_blank" rel="noopener noreferrer") Morán-Sánchez, I., & Martínez Benítez, S. (2022). Medidas de seguridad, una reflexión desde la práctica clínica. Revista de la Asociación Española de Neuropsiquiatría , 42 (141), 215-226.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/5681/568177234004.pdf " target="_blank" rel="noopener noreferrer") Harbottle Quirós, F., (2017). Inimputabilidad, peligrosidad criminal y medidas de seguridad curativas: mitos y realidades. Revista de la Facultad de Derecho ,   (42), 105-131. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=fHEw5TD8SQ0 " target="_blank" rel="noopener noreferrer") Juan Pablo Ramirez. (2020, 10 de agosto). ¿Como salir antes de la cárcel si ya fuiste condenado? [Vídeo]. YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=V3fO1wcMZUU " target="_blank" rel="noopener noreferrer") SFPIE UV. (2022, 2 de marzo). La suspensión de la ejecución de la pena privativa de libertad. [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=vNaj4KYm3ZU " target="_blank" rel="noopener noreferrer") UNL Virtual. (2023, 16 de mayo). Módulo 5 - Medidas de Seguridad y su Integración al Código Penal [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=K6VMm0S-W2Y " target="_blank" rel="noopener noreferrer") SFPIE UV. (2022, 4 de marzo). Las medidas de seguridad [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Un juez decide imponer una sanción penal por una conducta que no está claramente definida en la ley como delito, utilizando la analogía para fundamentar su decisión. ¿Qué principio fundamental del Derecho Penal estaría vulnerando?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Favorabilidad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Legalidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Territorialidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Proporcionalidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El principio de legalidad exige que toda conducta punible esté expresamente definida en la ley penal; por tanto, sancionar por analogía va en contra de este principio, ya que genera inseguridad jurídica y arbitrariedad.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Durante un hurto, una persona reacciona y lesiona al agresor con un objeto contundente, logrando defender su integridad. Aunque la conducta coincida con una descripción penal típica, se alega una causa legal que impide la sanción. ¿Qué elemento estructural del delito se ve afectado?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Antijuridicidad',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Imputabilidad',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Tipicidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Aunque hay tipicidad (lesión), la legítima defensa desvirtúa la antijuridicidad, pues la conducta se encuentra justificada por una causa legal que impide que sea considerada delito.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Una persona sin antecedentes penales, que cometió un daño leve en propiedad ajena y reparó voluntariamente el perjuicio, es condenada a prisión sin considerar otras medidas. ¿Qué principio de las sanciones penales no fue aplicado correctamente?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Retribución justa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Necesidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Proporcionalidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Razonabilidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El principio de necesidad señala que la pena solo debe imponerse cuando sea indispensable para proteger el bien jurídico, y no debe aplicarse si hay alternativas suficientes y menos graves. ',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Durante una riña callejera, una persona golpea a otra con la intención de causarle una lesión leve, pero la víctima cae al golpearse la cabeza con el pavimento. ¿Qué modalidad de conducta punible se configura en este caso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Culposa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dolosa',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Preterintencional',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Tentativa',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La conducta es preterintencional porque el resultado (muerte) excede la intención inicial del autor (lesionar), configurando una modalidad distinta al dolo o la culpa.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Una persona con esquizofrenia comete un hecho violento durante un episodio psicótico y no comprende la ilicitud de su acto; pese a ello, el juez decide imponer una pena privativa de la libertad. ¿Cuál sería la medida correcta según el Código Penal colombiano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Condena reducida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Libertad vigilada',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Multa',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Internación ',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'En casos de inimputabilidad por alteraciones mentales, no procede la pena, sino una medida de seguridad como la internación, con carácter preventivo y tratamiento especializado, conforme a los artículos 69 y 70 del Código Penal.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
