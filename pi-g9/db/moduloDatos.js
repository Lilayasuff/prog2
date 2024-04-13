 const base = {
    usuarios: {
        id: 1,
        email: 'pepitojuarez@gmail.com',
        password: 'pep2021',
        fecha: '2003-04-20',
        DNI: 45887934,
        foto: '' //preguntar porque no me deja agregar//
    },
    productos: [
        { id: 1,
          imagen: "",
          producto: "Adidas forum mid",
          descripcion: 'Son una opción icónica que combina estilo y rendimiento. Las Adidas Forum Mid son un ícono del estilo urbano que se remonta a los años 80, cuando fueron lanzadas originalmente como zapatillas de baloncesto de alto rendimiento. Con su diseño de corte medio, las Forum Mid ofrecen un excelente soporte al tobillo, lo que las hace ideales para el uso diario y para actividades deportivas.',
          comentarios:[
            {
                id: 1,
                nombreusuario: "pepitojuarez@gmail.com",
                imagen: '',
                descripcion: "Las Adidas Forum Mid son increíbles! El diseño clásico y el ajuste cómodo las convierten en mis zapatillas favoritas. Además, la calidad de construcción es excelente. ¡Sin duda, una excelente opción para aquellos que buscan estilo y funcionalidad!",
            },
            {
              id: 2,
              nombreusuario: "lilayasuff@gmail.com",
              imagen: '',
              descripcion: "Estoy muy impresionado con las Adidas Forum Mid. El estilo retro es exactamente lo que estaba buscando y la durabilidad es impresionante. Después de meses de uso, todavía lucen como nuevas. ¡Recomendaría estas zapatillas a cualquier persona que busque un calzado confiable y elegante!",
            },
            {
              id: 3,
              nombreusuario: "merlapasset@gmail.com",
              imagen: '',
              descripcion: "¡Son un clásico que nunca pasa de moda y definitivamente son una excelente inversión para cualquier amante del calzado urbano!",
             }
          ]
        },
        { id: 2,
          imagen: "",
          producto: "Adidas campus",
          descripcion: 'Las Adidas Campus son unas zapatillas clásicas que se han convertido en un icono del estilo urbano desde su lanzamiento en la década de 1980. Con un diseño elegante y atemporal, las Campus destacan por su parte superior de gamuza suave y su silueta baja, que ofrece un ajuste cómodo y versáti',
          comentarios:[
            {
                id: 4,
                nombreusuario: "maiadolensky@gmail.com",
                imagen: '',
                descripcion: "Las Adidas Campus son perfectas para el uso diario!",
            },
            {
              id: 5,
              nombreusuario: "diegoyasuff@gmail.com",
              imagen: '',
              descripcion: "Me encanta el aspecto de las Adidas Campus, pero la suela es un poco rígida y tardó un tiempo en ablandarse.",
            },
            {
              id: 6,
              nombreusuario: "pepitojuarez@gmail.com",
              imagen: '',
              descripcion: "¡Las recomendaría a cualquiera que busque zapatillas versátiles y elegantes!",
             }
          ]
         },
        { id: 3,
          imagen: "",
          producto: "Nike jordan air 1 mid",
          descripcion: 'Las Nike Jordan Air 1 Mid son una versión del icónico modelo Air Jordan 1 de Nike, diseñadas para ofrecer un equilibrio entre estilo clásico y rendimiento moderno. Con un diseño de corte medio, estas zapatillas brindan un soporte adicional al tobillo, lo que las hace ideales para el uso diario y la práctica del baloncesto. ',
          comentarios:[
            {
                id: 7,
                nombreusuario: "maiadolensky@gmail.com",
                imagen: '',
                descripcion: "¡Estoy enamorado de mis Air Jordan 1 Mid! Son increíblemente cómodas y el estilo clásico es simplemente imbatible",
            },
            {
              id: 8,
              nombreusuario: "lilayasuff@gmail.com",
              imagen: '',
              descripcion: "¡Definitivamente recomendaría estas zapatillas a cualquier amante del calzado urbano!",
            },
            {
              id: 9,
              nombreusuario: "pepitojuarez@gmail.com",
              imagen: '',
              descripcion: "Me decepcionaron un poco las Air Jordan 1 Mid.",
              
             }
          ]
         },
        { id: 4,
          imagen:'' ,
          producto: "Blazer nike mid 77",
          descripcion: 'Las Nike Blazer Mid 77 son una versión retro del clásico modelo Blazer de Nike, que originalmente se lanzó en 1977 como una zapatilla de baloncesto de alto rendimiento. Con un diseño de corte medio, estas zapatillas ofrecen un estilo vintage y un ajuste cómodo que las hace ideales tanto para el uso diario como para actividades deportivas casuales.',
          comentarios:[
            {
                id: 10,
                nombreusuario: "diegoyasuff@gmail.com",
                imagen: '',
                descripcion: "Las Nike Blazer Mid '77 son impresionantes. La calidad del cuero es excepcional y el estilo retro es inigualable.",
            },
            {
              id: 11,
              nombreusuario: "merlapasset@gmail.com",
              imagen: '',
              descripcion: "Son perfectas para cualquier ocasión y siempre recibo elogios cuando las uso!",
            },
            {
              id: 12,
              nombreusuario: "pepitojuarez@gmail.com",
              imagen: '',
              descripcion: "El ajuste era un poco estrecho en el antepié y la amortiguación no era tan suave como esperaba. No son ideales para largas caminatas.",
             }
          ]
        },
        { id: 5,
          imagen: '',
          producto: "Adidas gazelle",
          descripcion: 'Las Adidas Gazelle son un clásico del calzado urbano que se lanzó originalmente en 1968 como zapatillas de entrenamiento para fútbol sala. Con un diseño de perfil bajo y una estética retro, las Gazelle son conocidas por su simplicidad y versatilidad. ',
          comentarios:[
            {
                id: 13,
                nombreusuario: "lilayasuff@gmail.com",
                imagen: '',
                descripcion: "Las Adidas Gazelle son increíbles. Son cómodas, elegantes y tienen un estilo retro que me encanta",
            },
            {
              id: 14,
              nombreusuario: "maiadolensky@gmail.com",
              imagen: '',
              descripcion: "Desafortunadamente, las Adidas Gazelle no cumplieron mis expectativas. La calidad del material no era tan alta como esperaba y la suela se desgastó rápidamente.",
            },
            {
              id: 15,
              nombreusuario: "merlapasset@gmail.com",
              imagen: '',
              descripcion: "Son perfectas para combinar con cualquier atuendo y siempre reciben elogios!",
             }
          ]
         },
        { id: 6,
          imagen: '',
          producto: "Air Jordan 1 Low",
          descripcion: 'Las Air Jordan 1 Low ofrecen un estilo retro y una versatilidad que las convierten en una opción imprescindible para cualquier aficionado al calzado urbano y a la moda deportiva.',
          comentarios:[
            {
                id: 16,
                nombreusuario: "diegoyasuff@gmail.com",
                imagen: '',
                descripcion: "Las Air Jordan 1 Low son increíbles. El estilo icónico de las Air Jordan 1 en un diseño de corte bajo es simplemente perfecto.",
            },
            {
              id: 17,
              nombreusuario: "pepitojuarez@gmail.com",
              imagen: '',
              descripcion: "Son cómodas, elegantes y se adaptan a cualquier ocasión. Definitivamente, una excelente elección para cualquier amante del calzado deportivo",
            },
            {
              id: 18,
              nombreusuario: "merlapasset@gmail.com",
              imagen: '',
              descripcion: "Estoy muy contento con mis Air Jordan 1 Low. El cuero es de alta calidad y el ajuste es perfecto. Además, la amortiguación en la entresuela proporciona una sensación de suavidad en cada paso. ¡Sin duda, las recomendaría a cualquiera que busque un estilo atemporal y una comodidad excepcional!",
             }
          ]
        },
        { id: 7,
          imagen: "",
          producto: "Adidas forum low",
          descripcion: 'Las Adidas Forum Low son unas zapatillas de estilo retro con un diseño de corte bajo. Fabricadas con cuero de alta calidad y detalles icónicos de Adidas, ofrecen un aspecto clásico y versátil',
          comentarios:[
            {
                id: 19,
                nombreusuario: "merlapasset@gmail.com",
                imagen: '',
                descripcion: "Estoy muy contento con mis Adidas Forum Low. El ajuste es perfecto y el estilo retro siempre recibe elogios. Además, la durabilidad es impresionante. Después de meses de uso, todavía lucen como nuevas. ¡Sin duda, las recomendaría a cualquiera que busque un calzado clásico y confiable!",
            },
            {
              id: 20,
              nombreusuario: "diegoyasuff@gmail.com",
              imagen: '',
              descripcion: "El diseño clásico es perfecto para cualquier ocasión y la calidad de construcción es excepcional.",
            },
            {
              id: 21,
              nombreusuario: "maiadolensky@gmail.com",
              imagen: '',
              descripcion: "Son cómodas desde el primer momento y la suela de goma proporciona una tracción increíble. Definitivamente, una de mis zapatillas favoritas",
             }
          ]
        },
        { id: 8,
          imagen: "",
          producto: "New Balance 550",
          descripcion: 'Las New Balance 550 son zapatillas de estilo retro que combinan una estética clásica con detalles modernos. Confeccionadas con materiales de alta calidad, como cuero y gamuza, las 550 ofrecen durabilidad y estilo.',
          comentarios:[
            {
                id: 22,
                nombreusuario: "pepitojuarez@gmail.com",
                imagen: '',
                descripcion: " La calidad de construcción es excepcional y el estilo retro es exactamente lo que estaba buscando. Son cómodas desde el primer momento y se adaptan perfectamente a mi pie. Definitivamente, una excelente elección para cualquier ocasión",
            },
            {
              id: 23,
              nombreusuario: "lilayasuff@gmail.com",
              imagen: '',
              descripcion: "No puedo decir que esté completamente satisfecho con las New Balance 550. Aunque inicialmente me encantó el diseño, encontré que la comodidad era un problema. Después de un tiempo de uso, comenzaron a causarme molestias en la planta del pie y en el talón",
            },
            {
              id: 24,
              nombreusuario: "maiadolensky@gmail.com",
              imagen: '',
              descripcion: "El diseño clásico es atemporal y la combinación de colores es perfecta. Además, la amortiguación en la entresuela proporciona una sensación de suavidad en cada paso",
             }
          ]
        },
        { id: 9,
          imagen: "",
          producto: "Nike dunk low",
          descripcion: 'Las Nike Dunk Low son zapatillas de estilo clásico y versátil. Con un diseño de corte bajo, ofrecen un aspecto casual y cómodo para el día a día',
          comentarios:[
            {
                id: 25,
                nombreusuario: "lilayasuff@gmail.com",
                imagen: '',
                descripcion: "Las Nike Dunk Low son asombrosas! Tienen un estilo versátil que se adapta a cualquier situación y la comodidad es excepcional",
            },
            {
              id: 26,
              nombreusuario: "merlapasset@gmail.com",
              imagen: '',
              descripcion: "¡Definitivamente son mis zapatillas favoritas en este momento!",
            },
            {
              id: 27,
              nombreusuario: "maiadolensky@gmail.com",
              imagen: '',
              descripcion: "Son súper versátiles y el ajuste es perfecto. ¡Me encanta la sensación de calidad en cada paso y cómo complementan cualquier atuendo!",
             }
          ]
        },
        { id: 10,
          imagen: "",
          producto: "Air Jordan Legacy 312 Low",
          descripcion: 'Estas zapatillas combinan elementos de varios modelos clásicos de Nike y Jordan para crear un diseño único y llamativo.',
          comentarios:[
            {
                id: 28,
                nombreusuario: "pepitojuarez@gmail.com",
                imagen: '',
                descripcion: "¡Las Air Jordan Legacy 312 Low son una obra maestra! El diseño que combina elementos de diferentes modelos icónicos de Jordan es simplemente brillante. ",
            },
            {
              id: 29,
              nombreusuario: "diegoyasuff@gmail.com",
              imagen: '',
              descripcion: "No puedo decir que esté completamente satisfecho con las Air Jordan Legacy 312 Low. Aunque el estilo es genial, encontré que la calidad del material no era tan alta como esperaba. ",
            },
            {
              id: 30,
              nombreusuario: "lilayasuff@gmail.com",
              imagen: '',
              descripcion: "Son sin duda mis zapatillas favoritas!",
             }
          ]
      },
    ]
 }
