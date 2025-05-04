export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Interpretación de la ley penal. Normas rectoras. Teoría general del delito.',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Interpretación y aplicación de la ley penal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La teoría del delito y su estructura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Función de la pena y medidas de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Casanueva Sainz, I. (2013). Derecho Penal. Parte general: materiales didácticos: (3 ed.). Publicaciones de la Universidad de Deusto. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34064 ',
    },
    {
      referencia:
        'Sandoval Fernández, J. (2013). Responsabilidad penal y detención preventiva: el proceso penal en Colombia. Ley 906/2004: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69911',
    },
    {
      referencia:
        'Zambrano Pasquel, A. (2014). Estudio introductorio al Código Integral Penal. Tomo I: Parte general: ( ed.). Corporación de Estudios y Publicaciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115014 ',
    },
    {
      referencia:
        'Beccaria, C. (2009). De los delitos y de las penas: (ed.). FCE - Fondo de Cultura Económica. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/71904?page=198  ',
    },
    {
      referencia:
        'Cruz Márquez, B. (2008). La medida de internamiento y sus alternativas en el derecho penal juvenil: ( ed.). Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34181 ',
    },
    {
      referencia:
        'Gaviria Trespalacios, Jaime. (2005). LA INIMPUTABILIDAD: CONCEPTO Y ALCANCE EN EL CÓDIGO PENAL COLOMBIANO. Revista Colombiana de Psiquiatría, 34 (Supl. 1), 26-48. Recuperado el 24 de marzo de 2025 de ',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0034-74502005000500005&lng=en&tlng=es.  ',
    },
  ],
  glosario: [
    {
      termino: 'Antijuridicidad',
      significado:
        'elemento del delito que indica que la conducta típica contradice el orden jurídico y no está justificada legalmente. ',
    },
    {
      termino: 'Autor mediato',
      significado:
        'persona que comete un delito utilizando a otro como instrumento, generalmente aprovechando su inimputabilidad o coacción.',
    },
    {
      termino: 'Bien jurídico',
      significado:
        'valor o interés protegido por el Derecho Penal, como la vida, la libertad, la integridad o el patrimonio.',
    },
    {
      termino: 'Causal de justificación',
      significado:
        'circunstancia que excluye la antijuridicidad de una conducta, como la legítima defensa o el estado de necesidad. ',
    },
    {
      termino: 'Culpabilidad',
      significado:
        'juicio de reproche sobre el autor de un delito, basado en su imputabilidad, conocimiento y posibilidad de actuar conforme a la ley.',
    },
    {
      termino: 'Dolo',
      significado:
        'conducta en la que el autor conoce y quiere realizar el hecho típico penal.',
    },
    {
      termino: 'Preterintencional',
      significado:
        'cuando el resultado delictivo es más grave que el querido inicialmente por el autor.',
    },
    {
      termino: 'Error de prohibición',
      significado:
        'desconocimiento de la ilicitud de la conducta por parte del autor; puede excluir la culpabilidad si es invencible.',
    },
    {
      termino: 'Imputabilidad',
      significado:
        'capacidad del sujeto para comprender la ilicitud del acto y actuar conforme a esa comprensión.',
    },
    {
      termino: 'Inimputabilidad',
      significado:
        'condición de quien no puede ser penalmente responsable por no comprender la ilicitud del acto o no actuar libremente.',
    },
    {
      termino: 'Medidas de seguridad',
      significado:
        'sanciones no retributivas aplicadas a personas inimputables que representan peligro para sí o para terceros.',
    },
  ],
}
