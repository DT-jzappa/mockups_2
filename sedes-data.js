/* ═══════════════════════════════════════════════════════
   DATOS DE SEDES - PHARMASAN
   
   Estructura fácil de actualizar:
   - departamento: nombre del departamento
   - ciudades: array de ciudades con sus datos
   
   ✓ Fácil de editar
   ✓ No requiere HTML
   ✓ Genera las acordeones automáticamente
   ═════════════════════════════════════════════════════════ */

const SEDES_DATA = [
  // ═══════════════════════════════════════════════════════
  // DEPARTAMENTO: CESAR
  // ═══════════════════════════════════════════════════════
  {
    departamento: 'Cesar',
    ciudades: [
      {
        nombre: 'Aguachica',
        direccion: 'Carrera 13 # 3 – 46',
        telefono: '322 948 8544',
        telefonoLink: '3229488544',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Astrea',
        direccion: 'Carrera 3 # 7-11',
        telefono: '313 824 7813',
        telefonoLink: '3138247813',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Bosconia',
        direccion: 'Calle 17 # 16A – 15',
        telefono: '313 817 9591',
        telefonoLink: '3138179591',
        lunVie: '7:00 am – 12:00 m',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Chimichagua',
        direccion: 'Carrera 8 # 7-15 Cuba',
        telefono: '313 822 3983',
        telefonoLink: '3138223983',
        lunVie: '7:00 am – 12:00 m',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Codazzi',
        direccion: 'Calle 17 # 11 A – 59',
        telefono: '313 818 7793',
        telefonoLink: '3138187793',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Curumani',
        direccion: 'Calle 9 A # 15 – 62',
        telefono: '313 824 6999',
        telefonoLink: '3138246999',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'El Copey',
        direccion: 'Carrera 19 # 11 – 01 Local 1 Esquinero',
        telefono: '313 824 0541',
        telefonoLink: '3138240541',
        lunVie: '7:00 am – 12:00 m',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Gamarra',
        direccion: 'Calle 9 # 11-72 Local 1',
        telefono: '313 820 5028',
        telefonoLink: '3138205028',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'La Jagua de Ibirico',
        direccion: 'Calle 6 # 4-59',
        telefono: '313 817 7077',
        telefonoLink: '3138177077',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Pailitas',
        direccion: 'Calle 7 # 5A -33',
        telefono: '313 822 2797',
        telefonoLink: '3138222797',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Pelaya',
        direccion: 'Calle 8 # 9-67 Local 2',
        telefono: '313 821 6428',
        telefonoLink: '3138216428',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Rio de Oro',
        direccion: 'Calle 1 # 2 – 71',
        telefono: '322 856 3362',
        telefonoLink: '3228563362',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'San Alberto',
        direccion: 'Carrera 4 # 4-69',
        telefono: '322 948 8569',
        telefonoLink: '3229488569',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'San Martin',
        direccion: 'Calle 20 A # 9-44',
        telefono: '313 824 3628',
        telefonoLink: '3138243628',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Tamalameque',
        direccion: 'Calle 5 # 8-11',
        telefono: '313 822 1484',
        telefonoLink: '3138221484',
        lunVie: '7:00 am – 12:00 Pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Valledupar',
        direccion: 'Carrera 11 # 18 – 56',
        telefono: '314 844 2317',
        telefonoLink: '3148442317',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 Pm',
        mapsUrl: ''
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // DEPARTAMENTO: CUNDINAMARCA (Bogotá)
  // ═══════════════════════════════════════════════════════
  {
    departamento: 'Cundinamarca',
    ciudades: [
      {
        nombre: 'Bogotá DC Engativá',
        direccion: 'Carrera 70a # 65a – 62 Local 129 CC El Portón de la Estrada',
        telefono: '310 867 8110',
        telefonoLink: '3108678110',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Bogota DC Restrepo',
        direccion: 'Calle 18 Sur # 24 – 31',
        telefono: '321 324 3793',
        telefonoLink: '3213243793',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Bogotá DC Usaquen',
        direccion: 'Carrera 20 # 125 – 50 Local 102',
        telefono: '310 867 8110',
        telefonoLink: '3108678110',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // DEPARTAMENTO: NORTE DE SANTANDER
  // ═══════════════════════════════════════════════════════
  {
    departamento: 'Norte de Santander',
    ciudades: [
      {
        nombre: 'Abrego',
        direccion: 'Calle 16 # 4 – 97 Barrio Santa Barbara',
        telefono: '321 268 0527',
        telefonoLink: '3212680527',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Bochalema',
        direccion: 'Carrera 2 2A 1A N 43 Lote 6',
        telefono: '312 589 5108',
        telefonoLink: '3125895108',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Bucarasica',
        direccion: 'Carrera 1 # 3 – 37',
        telefono: '312 589 5472',
        telefonoLink: '3125895472',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Cachira',
        direccion: 'Calle 6 # 6-93',
        telefono: '314 277 5950',
        telefonoLink: '3142775950',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 3:30 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Chinacota',
        direccion: 'Calle 10 # 3 – 43 Local 1 Conjunto Residencial Mio',
        telefono: '321 202 5186',
        telefonoLink: '3212025186',
        lunVie: '7:00 am – 12:00 m<br>2:00 pm – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Chitaga',
        direccion: 'Calle 5 # 4 – 61',
        telefono: '310 302 9259',
        telefonoLink: '3103029259',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Cúcuta – Atalaya',
        direccion: 'Calle 9 # 7 – 03',
        telefono: '312 419 4607',
        telefonoLink: '3124194607',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Cucuta Caobos',
        direccion: 'Calle 18 # 0E – 45 Loc 1',
        telefono: '312 563 4165',
        telefonoLink: '3125634165',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Cucuta Caobos Sanitas',
        direccion: 'Av 0 # 15 07 – Calle 15 # 0E-19',
        telefono: '312 589 4747',
        telefonoLink: '3125894747',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Cucuta Dg Santander',
        direccion: 'Diagonal Santander # 8 – 54,56,58 Piso 1',
        telefono: '312 589 4824',
        telefonoLink: '3125894824',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Cucuta Fomag',
        direccion: 'Av 11E # 5AN – 64',
        telefono: '312 589 4257',
        telefonoLink: '3125894257',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Cucuta La Playa',
        direccion: 'Av 0A # 12 A – 38',
        telefono: '323 225 0505',
        telefonoLink: '3232250505',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Cucuta Popular',
        direccion: 'Calle 8 # 1E – 125',
        telefono: '314 318 9657',
        telefonoLink: '3143189657',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Cucuta Popular 2',
        direccion: 'Calle 8 # 1E – 87 Local 2',
        telefono: '310 303 1682',
        telefonoLink: '3103031682',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Cucuta Quinta Oriental',
        direccion: 'Calle 6 # 9E – 109',
        telefono: '312 589 4752',
        telefonoLink: '3125894752',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'El Tarra',
        direccion: 'KDX 04 100',
        telefono: '310 302 9387',
        telefonoLink: '3103029387',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'El Zulia',
        direccion: 'Av 1 # 7 – 11',
        telefono: '310 313 8121',
        telefonoLink: '3103138121',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'La Esperanza',
        direccion: 'Calle 4 # 3 – 02',
        telefono: '321 438 2953',
        telefonoLink: '3214382953',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 3:30 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Labateca',
        direccion: 'Calle 3 # 2 – 18',
        telefono: '312 589 4881',
        telefonoLink: '3125894881',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Los Patios Cucuta',
        direccion: 'Av 10 # 20 – 32 Br Once de Noviembre',
        telefono: '313 820 8786',
        telefonoLink: '3138208786',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Ocana Bulevar',
        direccion: 'Calle 11 # 21 – 15 Local 102 Bulevar Plaza',
        telefono: '322 856 3368',
        telefonoLink: '3228563368',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Ocana Fomag',
        direccion: 'Calle 12 # 10 – 99 Local 105 Edificio El Tamaco',
        telefono: '310 252 8477',
        telefonoLink: '3102528477',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Pamplona',
        direccion: 'Carrera 7 # 7 – 11',
        telefono: '314 595 6703',
        telefonoLink: '3145956703',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Puerto Santander',
        direccion: 'Calle 4 # 0 – 69',
        telefono: '312 589 4908',
        telefonoLink: '3125894908',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Salazar',
        direccion: 'Carrera 4 # 6 – 37',
        telefono: '322 764 0010',
        telefonoLink: '3227640010',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'San Cayetano',
        direccion: 'Carrera 4 # 1 – 09',
        telefono: '312 589 5121',
        telefonoLink: '3125895121',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Sardinata',
        direccion: 'Calle 4 # 5 – 53',
        telefono: '312 589 4827',
        telefonoLink: '3125894827',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Toledo',
        direccion: 'Carrera 5 # 7 – 71',
        telefono: '322 405 3699',
        telefonoLink: '3224053699',
        lunVie: '7:00 am – 12:00 m<br>2:00 pm – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Villa del Rosario Cucuta',
        direccion: 'Cra 7 # 15 – 61',
        telefono: '310 223 4408',
        telefonoLink: '3102234408',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // DEPARTAMENTO: SANTANDER
  // ═══════════════════════════════════════════════════════
  {
    departamento: 'Santander',
    ciudades: [
      {
        nombre: 'Aratoca',
        direccion: 'Carrera 4 # 1 – 26',
        telefono: '320 854 1513',
        telefonoLink: '3208541513',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Barbosa',
        direccion: 'Calle 17 # 8 – 64',
        telefono: '310 493 1977',
        telefonoLink: '3104931977',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Barichara',
        direccion: 'Calle 5 # 4 – 51',
        telefono: '320 857 4541',
        telefonoLink: '3208574541',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Barrancabermeja',
        direccion: 'Calle 49 # 19-82 Local 1',
        telefono: '320 857 4830',
        telefonoLink: '3208574830',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Barrancabermeja Sanitas',
        direccion: 'Calle 50 # 28 – 15 Local 1',
        telefono: '322 856 3353',
        telefonoLink: '3228563353',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Bucaramanga Cabecera',
        direccion: 'Calle 53 # 35 a 07',
        telefono: '312 513 9208',
        telefonoLink: '3125139208',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Cabrera',
        direccion: 'Carrera 6 # 7 – 08',
        telefono: '320 857 5075',
        telefonoLink: '3208575075',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Capitanejo',
        direccion: 'Carrera 4 # 5 – 33',
        telefono: '312 589 5223',
        telefonoLink: '3125895223',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Carcasi',
        direccion: 'Calle 4 # 2 – 41,43',
        telefono: '312 589 5224',
        telefonoLink: '3125895224',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Cerrito',
        direccion: 'Carrera 4 # 2 – 57',
        telefono: '312 589 4877',
        telefonoLink: '3125894877',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Charala',
        direccion: 'Calle 24 # 15 – 73',
        telefono: '312 248 7938',
        telefonoLink: '3122487938',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Chima',
        direccion: 'Carrera 5 # 5 – 38',
        telefono: '310 208 7386',
        telefonoLink: '3102087386',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Cimitarra',
        direccion: 'Carrera 6 # 3 – 124 Local 2 Edificio Sandalo',
        telefono: '314 278 1182',
        telefonoLink: '3142781182',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Concepcion',
        direccion: 'Calle 6 # 2 – 69',
        telefono: '312 589 5206',
        telefonoLink: '3125895206',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Contratacion',
        direccion: 'Calle 5 # 4 – 85 Local 2',
        telefono: '320 857 5752',
        telefonoLink: '3208575752',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Coromoro',
        direccion: 'Calle 7 # 5 – 25',
        telefono: '320 856 6873',
        telefonoLink: '3208566873',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Curiti',
        direccion: 'Carrera 5 # 6 – 23',
        telefono: '320 855 6096',
        telefonoLink: '3208556096',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'El Carmen de Chucuri',
        direccion: 'Carrera 2 # 4 – 33',
        telefono: '314 277 8572',
        telefonoLink: '3142778572',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'El Guacamayo',
        direccion: 'Calle 4 # 5 – 35',
        telefono: '320 857 5782',
        telefonoLink: '3208575782',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Encino',
        direccion: 'Carrera 4 # 3 – 50',
        telefono: '310 208 7397',
        telefonoLink: '3102087397',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Enciso',
        direccion: 'Carrera 3 # 3 – 51 Piso 1',
        telefono: '312 589 5393',
        telefonoLink: '3125895393',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Floridablanca',
        direccion: 'Calle 9 # 6-41 Local 10 Torre Tetris',
        telefono: '321 371 3020',
        telefonoLink: '3213713020',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Galan',
        direccion: 'Calle 6 # 6 – 56',
        telefono: '320 857 5988',
        telefonoLink: '3208575988',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Giron',
        direccion: 'Carrera 26 # 28 – 37',
        telefono: '321 999 9915',
        telefonoLink: '3219999915',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Guaca',
        direccion: 'Carrera 5 # 7 – 08',
        telefono: '312 589 5205',
        telefonoLink: '3125895205',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Guadalupe',
        direccion: 'Calle 3 # 3 – 55',
        telefono: '312 254 3469',
        telefonoLink: '3122543469',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Jesus Maria',
        direccion: 'Diagonal 4 # 4 – 07',
        telefono: '322 258 4881',
        telefonoLink: '3222584881',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'La Paz',
        direccion: 'Calle 3 # 3 – 37',
        telefono: '320 860 8270',
        telefonoLink: '3208608270',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Lebrija',
        direccion: 'Carrera 8 # 9 – 30 Local 4',
        telefono: '322 394 8683',
        telefonoLink: '3223948683',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Los Santos',
        direccion: 'Carrera 6 # 3 – 28',
        telefono: '312 589 5210',
        telefonoLink: '3125895210',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Malaga',
        direccion: 'Carrera 10 # 11-14 Local 1 Barrio Ricaute',
        telefono: '320 392 2386',
        telefonoLink: '3203922386',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Molagavita',
        direccion: 'Carrera 4 # 4 – 52',
        telefono: '312 589 5280',
        telefonoLink: '3125895280',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Mutis',
        direccion: 'Calle 55 # 1 – 94 Local 101 T3',
        telefono: '321 973 4556',
        telefonoLink: '3219734556',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Norte',
        direccion: 'Calle 15 # 8-35',
        telefono: '321 269 0837',
        telefonoLink: '3212690837',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Ocamonte',
        direccion: 'Calle 4 # 4 – 01',
        telefono: '320 854 9122',
        telefonoLink: '3208549122',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Oiba',
        direccion: 'Carrera 7 # 11-30',
        telefono: '312 589 5319',
        telefonoLink: '3125895319',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Palmas del Socorro',
        direccion: 'Calle 7 # 3 – 04',
        telefono: '312 589 5458',
        telefonoLink: '3125895458',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Paramo',
        direccion: 'Carrera 2 # 4 – 42',
        telefono: '320 854 1528',
        telefonoLink: '3208541528',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Puente Nacional',
        direccion: 'Carrera 6 # 7 – 85',
        telefono: '322 258 4947',
        telefonoLink: '3222584947',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Puerto Wilches',
        direccion: 'Calle 6 # 3 – 62',
        telefono: '322 234 5637',
        telefonoLink: '3222345637',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Rionegro',
        direccion: 'Calle 10 # 12 – 28',
        telefono: '320 860 7426',
        telefonoLink: '3208607426',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Sabana de Torres',
        direccion: 'Calle 15 # 13 – 25',
        telefono: '310 493 8388',
        telefonoLink: '3104938388',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'La Belleza',
        direccion: 'Calle 4 # 3 – 34',
        telefono: '310 302 4767',
        telefonoLink: '3103024767',
        lunVie: '7:00 am – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'San Andres',
        direccion: 'Carrera 5 # 5 – 51',
        telefono: '312 589 4864',
        telefonoLink: '3125894864',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'San Gil',
        direccion: 'Carrera 7 # 15 – 03',
        telefono: '312 589 5132',
        telefonoLink: '3125895132',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'San Jose de Miranda',
        direccion: 'Carrera 4 # 5 – 69',
        telefono: '312 589 5321',
        telefonoLink: '3125895321',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'San Rafael Bajo Rionegro',
        direccion: 'Carrera 5 # 7 – 71,79 Local 4',
        telefono: '320 860 3234',
        telefonoLink: '3208603234',
        lunVie: '',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'San Vicente de Chucuri',
        direccion: 'Calle 12 # 10 – 49 B Centro',
        telefono: '320 860 8900',
        telefonoLink: '3208608900',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Simacota',
        direccion: 'Carrera 5 # 4 – 45',
        telefono: '312 254 3463',
        telefonoLink: '3122543463',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Socorro',
        direccion: 'Carrera 17 # 10A – 38',
        telefono: '320 392 6206',
        telefonoLink: '3203926206',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Surata',
        direccion: 'Carrera 3 # 1 – 37',
        telefono: '312 254 3465',
        telefonoLink: '3122543465',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Valle de San Jose',
        direccion: 'Carrera 8 # 3 – 49',
        telefono: '320 856 5095',
        telefonoLink: '3208565095',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      },
      {
        nombre: 'Velez',
        direccion: 'Carrera 4 # 9 – 71 Barrio Centro',
        telefono: '320 393 0082',
        telefonoLink: '3203930082',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      },
      {
        nombre: 'Zapatoca',
        direccion: 'Calle 18 # 8 – 13',
        telefono: '320 857 1617',
        telefonoLink: '3208571617',
        lunVie: '7:30 am – 12:00 m<br>1:00 pm – 4:00 pm',
        sabado: '',
        mapsUrl: ''
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // DEPARTAMENTO: BOLÍVAR
  // ═══════════════════════════════════════════════════════
  {
    departamento: 'Bolívar',
    ciudades: [
      {
        nombre: 'Cantagallo',
        direccion: 'Calle 1 # 4 Dg Centro de Salud',
        telefono: '310 313 9828',
        telefonoLink: '3103139828',
        lunVie: '7:30 am – 3:30 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: ''
      }
    ]
  }
];

/* ═════════════════════════════════════════════════════════
   INSTRUCCIONES PARA ACTUALIZAR:
   
   1. AGREGAR una nueva ciudad:
      Dentro de un departamento, agrega un objeto así:
      {
        nombre: 'Ciudad Nueva',
        direccion: 'Dirección completa',
        telefono: '300 123 4567',
        telefonoLink: '3001234567',
        lunVie: '7:00 am – 5:00 pm',
        sabado: '8:00 am – 12:00 m',
        mapsUrl: 'https://maps.google.com/...'
      }
   
   2. AGREGAR un nuevo departamento:
      Agrega un nuevo objeto al array SEDES_DATA:
      {
        departamento: 'Valle del Cauca',
        ciudades: [ ... ]
      }
   
   3. EDITAR información:
      Solo modifica los valores dentro de cada objeto.
      Asegúrate de mantener la estructura igual.
   
   ═════════════════════════════════════════════════════════ */