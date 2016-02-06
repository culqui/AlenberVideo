/**************************************************************************
** Initial Data will be replaced to data obtained from server (js or json)
***************************************************************************
*/
var initialOrders = [
	{
		companyLogo: 'img/logos/grana.jpg',
		company: 'Grupo Graña y Montero S.A',
		datePublish: 'Hoy',
		place: 'Callao',
		payType: 'A 60 días ',
		cotizations: 5,
		isUrgent: false,
		requirements: [
			{
				name: 'Motor de inducción de alta tensión',
				quantity: 12,
				technicalDetails: [
					{
						name: 'Potencia',
						value: '700 KW'
					},
					{
						name: 'Tamaño IEC',
						value: '400'
					},
					{
						name: 'Factor de servicio',
						value: '1.15'
					}
				]
			}
		],

		comercialSpecifications: [
		]
	},
	{
		companyLogo: 'img/logos/Antamina.png',
		company: 'Compañia Minera Antamina S.A',
		datePublish: 'Hoy',
		place: 'Yanacanca, Ancash',
		payType: 'A 30 días ',
		cotizations: 10,
		isUrgent: false,
		requirements: [
			{
				name: 'Transformador de potencia',
				quantity: 5,
				technicalDetails: [
					{
						name: 'Potencia',
						value: '50 KVA'
					},
					{
						name: 'Tensión',
						value: '33 KV'
					},
					{
						name: 'Frecuencia Nominal',
						value: '60 HZ'
					}
				]
			}
		],

		comercialSpecifications: [
		]
	},
	{
		companyLogo: 'img/logos/gloria.jpg',
		company: 'Gloria S.A',
		datePublish: 'Hoy',
		place: 'Huachipa Lima',
		payType: 'Al Contado ',
		cotizations: 10,
		isUrgent: true,
		requirements: [
			{
				name: 'Maquina de pasteurización',
				quantity: 12,
				technicalDetails: [
					{
						name: 'Capacidad',
						value: '500 - 600 L'
					},
					{
						name: 'Potencia',
						value: '50 KVA'
					},
					{
						name: 'Voltaje',
						value: 'AC 380V/220V'
					}
				]
			}
		],

		comercialSpecifications: [
		]
	},
	{
		companyLogo: 'img/logos/celima.jpg',
		company: 'Cementos Lima S.A',
		datePublish: 'Hoy',
		place: 'Atocongo, Lima',
		payType: 'A 60 días ',
		cotizations: 5,
		isUrgent: false,
		requirements: [
			{
				name: 'Faja transportadora',
				quantity: 12,
				technicalDetails: [
					{
						name: 'Longitud',
						value: '450 mts'
					},
					{
						name: 'Espesor',
						value: '10 mm'
					},
					{
						name: 'Material',
						value: 'Caucho tipo XZA'
					}
				]
			}
		],

		comercialSpecifications: [
		]
	},
	{
		companyLogo: 'img/logos/Aceros.jpg',
		company: 'Aceros Arequipa S.A',
		datePublish: 'Hoy',
		place: 'Cercado de Lima',
		payType: 'Al Contado ',
		cotizations: 20,
		isUrgent: false,
		requirements: [
			{
				name: 'Motor de fundición de hierro de alta eficiencia',
				quantity: 20,
				technicalDetails: [
					{
						name: 'Potencia',
						value: '50 HP'
					},
					{
						name: 'Velocidad',
						value: '1200 RPM'
					},
					{
						name: 'Factor de servicio',
						value: '1.2'
					}
				]
			}
		],

		comercialSpecifications: [
		]
	},
	{
		name: 'Elementos de Protección Personal - EPPs',
		companyLogo: 'img/logos/edegel.jpg',
		company: 'Edegel S.A',
		datePublish: 'Hoy',
		place: 'Santa Rosa, Chosica',
		payType: 'A 60 días ',
		cotizations: 5,
		isUrgent: false,
		requirements: [
			{
				name: 'Casco de Seguridad',
				quantity: 100,
				technicalDetails: [
					{
						name: 'Potencia',
						value: '50 KVA'
					},
					{
						name: 'Tensión',
						value: '33 KV'
					},
					{
						name: 'Frecuencia Nominal',
						value: '60 HZ'
					}
				]
			},
			{
				name: 'Guantes de Protección',
				quantity: 200,
				technicalDetails: [
					{
						name: 'Potencia',
						value: '50 KVA'
					},
					{
						name: 'Tensión',
						value: '33 KV'
					},
					{
						name: 'Frecuencia Nominal',
						value: '60 HZ'
					}
				]
			},
			{
				name: 'Lentes de Seguridad',
				quantity: 100,
				technicalDetails: [
					{
						name: 'Potencia',
						value: '50 KVA'
					},
					{
						name: 'Tensión',
						value: '33 KV'
					},
					{
						name: 'Frecuencia Nominal',
						value: '60 HZ'
					}
				]
			},
			{
				name: 'Tapones',
				quantity: 500,
				technicalDetails: [
					{
						name: 'Potencia',
						value: '50 KVA'
					},
					{
						name: 'Tensión',
						value: '33 KV'
					},
					{
						name: 'Frecuencia Nominal',
						value: '60 HZ'
					}
				]
			}
		],

		comercialSpecifications: [
		]
	},
	{
		companyLogo: 'img/logos/Amfa Vitrum.GIF',
		company: 'Amfa Vitrum S.A',
		datePublish: 'Hoy',
		place: 'Cercado de Lima',
		payType: 'Al Contado ',
		cotizations: 10,
		isUrgent: true,
		requirements: [
			{
				name: 'Consultoría de Planeamiento Estrátegico',
				quantity: 12,
				technicalDetails: [
					{
						name: '',
						value: 'Se busca una consultora para actualizar el Plan Estrátegico de la empresa'
					}
				]
			}
		],

		comercialSpecifications: [
		]
	}
];

var initialPublishers = [
	{
		name: 'Graña y Montero',
		publications: 120
	},
	{
		name: 'Cementos Lima',
		publications: 90
	},
	{
		name: 'Antamina',
		publications: 80
	},
	{
		name: 'Gloria',
		publications: 30
	},
	{
		name: 'Aceros Arequipa',
		publications: 45
	},
	{
		name: 'Copeinca',
		publications: 25
	}
];

var initialPlaces = [
	{
		name: 'Lima',
		publications: 120
	},
	{
		name: 'Arequipa',
		publications: 90
	},
	{
		name: 'Callao',
		publications: 80
	},
	{
		name: 'Trujillo',
		publications: 30
	},
	{
		name: 'Piura',
		publications: 45
	},
	{
		name: 'Moquegua',
		publications: 25
	}
];

var initialSectors = [
	{
		name: 'Minería',
		publications: 120
	},
	{
		name: 'Manufactura',
		publications: 90
	},
	{
		name: 'Textil',
		publications: 80
	},
	{
		name: 'Hidrocarburos',
		publications: 30
	},
	{
		name: 'Pesca',
		publications: 45
	}
];

var initialDates = [
	{
		name: 'Hoy',
		publications: 120
	},
	{
		name: 'Ayer',
		publications: 90
	},
	{
		name: 'Hace tres días',
		publications: 80
	},
	{
		name: 'Hace una semana',
		publications: 30
	},
	{
		name: 'Hace un mes',
		publications: 45
	}
];

/***********************************************************************/

var TechnicalSpecification = function( data ){
	var self = this;

	this.name = ko.observable( data.name );
	this.value = ko.observable( data.value );
};

var ComercialSpecification = function( data ){
	var self = this;

	this.name = ko.observable( data.name );
	this.value = ko.observable( data.value );
};

var Requirement = function( data ){
	var self = this;

	this.id = ko.observableArray( data.id );
	this.name = ko.observable( data.name );
	this.quantity = ko.observable( data.quantity );
	this.technicalDetails = ko.observableArray( data.technicalDetails );

	this.addTechnicalSpecification = function(){
		self.technicalDetails.push( new TechnicalSpecification( {name: "", value: ""} ) );
	};
};

var Order = function( data ){
	var self = this;

	this.name = ko.observable( data.name );
	this.requirements = ko.observableArray( data.requirements );
	this.company = ko.observable( data.company );
	this.companyLogo = ko.observable( data.companyLogo );
	this.datePublish = ko.observable( data.datePublish )
	this.isUrgent = ko.observable( data.isUrgent );

	this.place = ko.observable( data.place );
	this.payType = ko.observable( data.payType );
	this.cotizations = ko.observable( data.cotizations );

	this.comercialSpecifications = ko.observableArray( [] );

	this.addRequirement = function(){
		self.requirements.push( new Requirement( {name: "", quantity: "" } ) );
	};

	this.addComercialSpecification = function(){
		self.comercialSpecifications.push( new ComercialSpecification( {name: "", value: "" } ) );
	};

};

var Publisher = function( data ){
	var self = this;

	this.name = ko.observable( data.name );
	this.publications = ko.observable( data.publications );
};

var Place = function( data ){
	var self = this;

	this.name = ko.observable( data.name );
	this.publications = ko.observable( data.publications );
};

var Sector = function( data ){
	var self = this;

	this.name = ko.observable( data.name );
	this.publications = ko.observable( data.publications );
};

var Date = function( data ){
	var self = this;

	this.name = ko.observable( data.name );
	this.publications = ko.observable( data.publications );
};

var ViewModel = function(){
	var self = this;

	this.orderList = ko.observableArray( [] );
	this.publisherList = ko.observableArray( [] );
	this.placeList = ko.observableArray( [] );
	this.sectorList = ko.observableArray( [] );
	this.dateList = ko.observableArray( [] );

	this.init = function(){
		for ( var i = 0; i < initialOrders.length; ++i ) {
			self.orderList.push( new Order( initialOrders[i] ) );
		};


		for (var i = 0; i < initialPublishers.length; ++i ) {
			self.publisherList.push( new Publisher( initialPublishers[i] ) );
		};

		for (var i = 0; i < initialPlaces.length; ++i ) {
			self.placeList.push( new Place( initialPlaces[i] ) );
		};

		for (var i = 0; i < initialSectors.length; ++i ) {
			self.sectorList.push( new Sector( initialSectors[i] ) );
		};

		for (var i = 0; i < initialDates.length; ++i ) {
			self.dateList.push( new Sector( initialDates[i] ) );
		};
	}

	this.init();

	this.addPublisher = function(){
		self.publisherList.push( new Publisher( { name: "", publications: ""} ) );
	};



};

var myViewModel = new ViewModel();
ko.applyBindings( myViewModel );

$('.btn-cotization').hover( function(){
	$('img', this).attr('src', 'img/6-Pub-Req-36-white.png');
}, function(){
	$('img', this).attr('src', 'img/6-Pub-Req-36.png');
});

$('.btn-cotization').focus( function(){
	$('img', this).attr('src', 'img/6-Pub-Req-36-white.png');
});

$('.btn-cotization').focusout( function(){
	$('img', this).attr('src', 'img/6-Pub-Req-36.png');
});

$('.filter .close').hide();

$('.filter').on('click', function(){
	$(this).css( 'background-color', 'skyblue' );
	$('.close', this).show();
});

$('.filter .close').click( function( e ){
	e.stopPropagation();
	$(this).parent().css( 'background-color', '#fff' );
	$(this).hide();
	$(this).parent().on('click', function(){
		$(this).css( 'background-color', 'skyblue' );
		$('.close', this).show();
	});
});