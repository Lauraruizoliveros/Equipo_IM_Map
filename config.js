var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoibGF1cmFydWl6b2xpdmVyb3MiLCJhIjoiY2puM2wxbG82MmgycjNwcXZ6cXR4bWo4eCJ9.Vg8fhZmLIDlyQoe52yJx0A',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Equipo IM (aprendiendo a realizar un storymap)',
    subtitle: 'La sabiduría Jedi no solo sirve para combatir al lado oscuro, también nos da el pretexto para reflexionar sobre Comunicación Interna',
    byline: 'By Laurys a Digital Storyteller',
    footer: 'Source: Mapbox, Fandom, Lego, Wikipedia',
    chapters: [

        {
              id: "viz-1",
              title: "Visualización del equipo de IM de Cruz Roja Española",
              image: "fotos/images-7.jpeg",
              image2: "fotos/images-6.jpeg",
              description:
                "<p> Algunos de los integrantes del equipo IM distribuidos por la Peninsula y sus especialidades. Asignación de cada voluntario/a a un personaje de Star Wars. Disfruten.</p>",
              location: {
                center: [-3.58187, 39.80937],
                zoom: 3.84,
                pitch: 0.0,
                bearing: 0.0
            },

            onChapterEnter: [],
            onChapterExit: []
            
        },
        
        {
            
            id: 'Raquel, Técnico Unidad de Emergencias, IM e Innovación',
            title: 'Raquel - Técnico Unidad de Emergencias, IM e Innovación - La jefa de IM trabajando sin parar',
            image: 'fotos/images-5.jpeg',
            description: 'Reverenciada Maestra Jedi que sirve como Gran Maestra de la Orden Jedi en los últimos días de la República Galáctica. Famosa dentro de la Orden por su sabiduría, poderes de la Fuerza y combate con sables de luz.',
            location: {
                center: [-3.69452, 40.43243],
                zoom: 10.04,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            
            id: 'Salva, referente de IM',
            title: 'Salva - Referente de IM - Como gran maestro intenta entrenar a los pequeños padawans',
            image: 'fotos/Obi.jpg',
            description: 'Obi-wan es un maestro jedi de la antigua República Galáctica y como tal, maestro de Anakin y Luke Skywalker.Nacido en el planeta Stewjon11​ Kenobi fue tomado como el aprendiz Padawan de Qui-Gon Jinn. Al igual que la mayoría de los padawans de su generación, él también recibió instrucciones del maestro Yoda, quien entrenara a los jedis durante siglos.',
            location: {
                center: [-0.48675, 38.35716],
                zoom: 9.90,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Laurys',
            title: 'Laurys - Voluntaria IM - Especialista en cartografía.... haciendo mapas sin parar',
            image: 'fotos/images-2.jpeg',
            description: 'Rey Skywalker, una mujer humana sensible a la Fuerza, fue una Jedi que luchó por la Resistencia contra la Primera Orden durante la Era de la Nueva República. Aunque nació como Rey Palpatine, no era consciente de su linaje como nieta del Emperador Sheev Palpatine y se refirió a sí misma simplemente como Rey, creyendo que no era nadie.',
            location: {
                center: [-6.00016, 37.37718],
                zoom: 11.22,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            
            
            id: 'Sergio, Voluntario IM',
            title: 'Sergio - Voluntario IM - Científico de datos. Con un gran conocimiento del mundo como físico que es, sergio se lanza a nuevas aventuras sin parar',
            image: 'fotos/Unknown.jpeg',
            description: 'Han Solo, es un hombre humano contrabandista, se convirtió en un líder en la Alianza para Restaurar la República y una figura instrumental en la derrota del Imperio Galáctico durante la Guerra Civil Galáctica. Procedía de Corellia y se convirtió en un contrabandista al servicio de Jabba el Hutt, incluso completando el Corredor de Kessel en menos de trece parsecs con su preciada nave, el Halcón Milenario.',
            location: {
                center: [-15.50808, 28.04894],
                zoom: 7.90,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Eli, Voluntario IM',
            title: 'Eli - Voluntario IM - Especialista en telecomunicaciones y ODK ',
            image: 'fotos/51DYjVz1g3L.jpg',
            description: 'Chewaka, es un wookiee, un bípedo alto, peludo y robusto, especie inteligente del planeta Kashyyyk. Chewbacca es el leal amigo y socio de Han Solo, y sirve como copiloto en la nave espacial de Solo, el Halcón Milenario. ',
            location: {
                center: [-2.95464, 43.26404],
                zoom: 12.01,
                pitch: 0,
                bearing: 0
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Raquel, Voluntaria IM',
            title: 'Raquel - Voluntaria IM - Especialista en todo lo que tiene que ver con la comunicación ',
            image: 'fotos/images-3.jpeg',
            description: 'Padmé Amidala de Naboo (nacida Padmé Naberrie, conocida como Su Alteza Real, Reina Amidala de Naboo), Como Reina de Naboo, Amidala ayudó a liberar a su gente durante la invasión de la Federación de Comercio, convirtiéndose con esto en una de las figuras políticas más respetadas en la galaxia. ',
            location: {
                center: [-5.66168, 40.97288],
                zoom: 10.10,
                pitch: 0,
                bearing: 0
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Enrique, Voluntario IM',
            title: 'Enrique - Voluntario IM - Especialista en todo lo que tiene que ver con lenguajes de programación ',
            image: 'fotos/Unknown-1.jpeg',
            description: 'C3Po, Droide de protocolo unidad 3PO diseñado para interactuar con seres orgánicos, programado principalmente para la etiqueta y el protocolo. Hablaba con fluidez más de siete millones de formas de comunicación, y desarrolló una personalidad exigente y propensa a las preocupaciones a lo largo de sus muchas décadas de operación.',
            location: {
                center: [-3.67143, 40.46662],
                zoom: 10.65,
                pitch: 0,
                bearing: 0
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Borja, Voluntario IM',
            title: 'Borja Voluntario IM. Entre otras muchas cosas gran analista de datos ',
            image: 'fotos/luke-skywalker-lego-figura.jpg',
            description: 'Luke Skywalker, se convirtió en joven aventurero, demostrando las habilidades de pilotaje naturales. Luke Skywalker fue un humano sensible a la Fuerza y un Maestro Jedi quien, junto a su hermana gemela, la Princesa Leia Organa, luchó en contra del gobierno del Imperio Galáctico durante la Guerra Civil Galáctica.',
            location: {
                center: [-3.70100, 40.40850],
                zoom: 13.10,
                pitch: 0,
                bearing: 0
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Lucia, Voluntaria IM',
            title: 'Lucia  - Voluntaria IM - Especialista en cartografía ',
            image: 'fotos/Unknown-2.jpeg',
            description: 'Rose Tico. Incansable trabajadora de la Resistencia, pasa el día entre tubos sucios haciendo labores mecánicas. Su hermana Paige murió en combate y ella está dispuesta a darlo todo por la causa.',
            location: {
                center: [-3.70058, 40.43692],
                zoom: 12.81,
                pitch: 0,
                bearing: 0
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Santiago, Voluntario IM',
            title: 'Santiago - Voluntario IM - Especialista en R y análisis de datos',
            image: 'fotos/Unknown copy 2.jpeg.jpeg',
            description: 'R2-D2 sirvió a una multitud de maestros a lo largo de su vida. R2 nunca recibió un borrado completo de memoria ni recibió programación nueva, lo que resultó en su actitud aventurera e independiente. A menudo viéndose implicado en momento vitales de la historia galáctica, su valentía e ingenio salvaron a la galaxia repetidas veces. Comenzando su servicio bajo el empleo de la reina Padmé Amidala de Naboo, el droide acabaría sirviendo al Caballero Jedi Anakin Skywalker durante los últimos años de la República Galáctica, a menudo acompañado del droide de protocolo C3PO.',
            location: {
                center: [-3.72387, 40.44761],
                zoom: 10.91,
                pitch: 45.00,
                bearing: 0.00
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Guille, Voluntario IM',
            title: 'Guille - Voluntario IM -Voluntario IM. Especialista ',
            image: 'fotos/Unknown copy.jpeg',
            description: 'Lando Calrissian, fue un hombre humano contrabandista, apostador y jugador de cartas que se convirtió en el Barón Administrador de Ciudad Nube y, más tarde, en un general de la Alianza Rebelde. Fue el dueño del Halcón Milenario antes de perderlo ante Han Solo en un juego de sabacc en Numidian Prime. Calrissian se unió a la Alianza Rebelde y se dispuso a buscar a Solo. Después de ubicarlo en el palacio de Jabba el Hutt en Tatooine, colaboró en su rescate. Los rebeldes regresaron a la flota y Calrissian se convirtió en un general, ofreciéndose para liderar el asalto a la Estrella de la Muerte II durante la Batalla de Endor. Durante la batalla, pilotó el Halcón Milenario en el núcleo de la estación de batalla, disparando el tiro que la destruyó.',
            location: {
                center: [-5.84339, 43.36248],
                zoom: 11.13,
                pitch: 0.00,
                bearing: 0.00
                 },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Pablo, Voluntario IM',
            title: 'Pablo - Voluntario IM - Especialista en telecomunicaciones',
            image: 'fotos/Unknown-3.jpeg',
            description: 'Finn» fue el apodo de FN-2187 («Ocho-Siete»), un soldado de asalto humano sensible a la Fuerza que sirvió a la Primera Orden hasta su huida y posterior deserción a la Resistencia durante la Guerra Primera Orden–Resistencia. Aunque entrenado desde el nacimiento para ser un soldado leal y obediente, la conciencia de FN-2187 entró en conflicto con los métodos de la Primera Orden. Durante un tiempo no estuvo dispuesto a apoyar a la Resistencia, con la esperanza de escapar del conflicto galáctico en lugar de luchar por una causa que creía estaba condenada al fracaso. A medida que la galaxia se consumía por la guerra, el soldado renegado se vio finalmente obligado a decidir dónde estaban sus verdaderas lealtades.',
            location: {
                center: [-3.70024, 40.42975],
                zoom: 10.61,
                pitch: 0.00,
                bearing: 0.00
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Marina, Voluntaria IM',
            title: 'Marina - Voluntaria IM - Especialista en análisis de datos y necesidades',
            image: 'fotos/Unknown-5.jpeg',
            description: 'Leia Organa Solo (nacida Leia Amidala Skywalker) fue en diversas etapas de su vida política, revolucionaria y Caballero Jedi de la Nueva Orden Jedi. Hija del General Jedi Anakin Skywalker y la senadora Padmé Amidala de Naboo, Leia fue la hermana melliza de Luke Skywalker, y poco después de su nacimiento se convirtió en la hija adoptiva de Bail Prestor Organa y la reina Breha Antilles Organa de Alderaan, convirtiéndola en princesa de Alderaan. Una senadora consumada, Leia fue famosa por su fuerte liderazgo durante la Guerra Civil Galáctica y otros conflictos galácticos posteriores, haciéndola uno de los héroes más grandes de la galaxia.',
            location: {
                center: [1.24480, 41.12105],
                zoom: 11.72,
                pitch: 0.00,
                bearing: 0.00
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Marta, Voluntaria IM',
            title: 'Marta - Voluntaria IM -',
            image: 'fotos/Unknown-6.jpeg',
            description: 'Amilyn Holdo fue una mujer humana de Gatalenta. En su juventud, Holdo sirvió en la Legislatura de Aprendices del Senado Imperial, donde se familiariza con la Princesa Leia Organa de Alderaan. Durante su tiempo en la Legislatura de Aprendices, se hizo amiga de Organa, quien le confió su participación en la rebelión contra el Imperio Galáctico',
            location: {
                center: [-0.88628, 41.66471],
                zoom: 9.48,
                pitch: 0.00,
                bearing: 0.00
                 },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Mariano, Voluntario IM',
            title: 'Mariano - Voluntario IM - Especialista en cartografía, ODK y lenguajes de programación',
            image: 'fotos/images-4.jpeg',
            description: 'Mace Windu fue un Maestro Jedi humano y miembro del Alto Consejo Jedi durante los últimos días de la República Galáctica. Nacido en el planeta Haruun Kal, Windu fue entrenado en los caminos de la Fuerza debido a su fuerte conexión con ella. Al ascender al rango de Maestro, empezó a ser conocido como el campeón de la Orden Jedi, un honor que acarreó hasta años después de su muerte. En algún punto de su carrera, Windu pasó a servir como Maestro de la Orden, el líder electo de la Orden Jedi.',
            location: {
                center: [-5.99252, 37.38885],
                zoom: 12.07,
                pitch: 0.00,
                bearing: 0.00
                 },
            onChapterEnter: [],
            onChapterExit: []
        },

    ]

};
