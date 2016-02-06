
var model = {
	technicalSpecifications: [
	],

	comercialSpecifications: [
	]
};

var view = {

	init: function(){
		this.technicalSpecificationElement = $('#tecnic-specification');
		this.comercialSpecificationElement = $('#comercial-specification');
		this.technicalSpecificationButtonElement = $('#new-technic-speciifcation-btn');
		this.comercialSpecificationButtonElement = $('#new-comercial-speciifcation-btn');
		this.technicalTemplateElement = document.querySelector('#tecnic-template');
		this.comercialTemplateElement = document.querySelector('#comercial-template');

		this.technicalSpecificationButtonElement.click( function(){
			octopus.addNewTechnicalSpecification();
			view.render();
		});

		this.comercialSpecificationButtonElement.click( function(){
			octopus.addNewComercialSpecification();
			view.render();
		});

		this.render();
	},

	addNewTechnicalSpecification: function(){
		var newTechnicalSpecification = document.importNode( this.technicalTemplateElement.content, true );
		this.technicalSpecificationElement.append( newTechnicalSpecification );
	},

	addNewComercialSpecification: function(){
		var newComercialSpecification = document.importNode( this.comercialTemplateElement.content, true );
		this.comercialSpecificationElement.append( newComercialSpecification );
	},

	render: function(){
		this.technicalSpecificationElement.html('');
		this.comercialSpecificationElement.html('');

		var technicalSpecifications = octopus.getTechnicalSpecifications();
		var comercialSpecifications = octopus.getComercialSpecifications();

		for( var i = 0; i < technicalSpecifications.length; ++i ){
			var specif = technicalSpecifications[i];
			this.addNewTechnicalSpecification();
			$('#technical-specification-name').attr('value', specif.name );
			$('#technical-specification-name').attr('id', 'technical-specification-name-' + i );

			$('#technical-specification-name-' + i ).change( ( function( index ){

				return function(){
					octopus.setTechnicalSpecification( index, { name: $(this).val() } );
				};
			} )( i ) );

			$('#technical-specification-value').attr('value', specif.value );
			$('#technical-specification-value').attr('id', 'technical-specification-value-' + i );

			$('#technical-specification-value-' + i ).change( ( function( index ){

				return function(){
					octopus.setTechnicalSpecification( index, { value: $(this).val() } );
				};
			} )( i ) );
		}

		for( var i = 0; i < comercialSpecifications.length; ++i ){
			var specif = comercialSpecifications[i];
			this.addNewComercialSpecification();
			$('#comercial-specification-name').attr('value', specif.name );
			$('#comercial-specification-name').attr('id', 'comercial-specification-name-' + i );

			$('#comercial-specification-name-' + i ).change( ( function( index ){

				return function(){
					octopus.setComercialSpecification( index, { name: $(this).val() } );
				};
			} )( i ) );

			$('#comercial-specification-value').attr('value', specif.value );
			$('#comercial-specification-value').attr('id', 'comercial-specification-value-' + i );

			$('#comercial-specification-value-' + i ).change( ( function( index ){

				return function(){
					octopus.setComercialSpecification( index, { value: $(this).val() } );
				};
			} )( i ) );
		}
	}
};

var octopus = {
	init: function(){
		view.init();
	},

	getTechnicalSpecifications: function(){
		return model.technicalSpecifications;
	},

	getComercialSpecifications: function(){
		return model.comercialSpecifications;
	},

	setTechnicalSpecification: function( i, values ){
		for( var key in values ){
			model.technicalSpecifications[i][key] = values[key];
		}
	},

	setComercialSpecification: function( i, values ){
		for( var key in values ){
			model.comercialSpecifications[i][key] = values[key];
		}
	},

	addNewTechnicalSpecification: function(){
		model.technicalSpecifications.push( { name: '', value: ''} );
	},

	addNewComercialSpecification: function(){
		model.comercialSpecifications.push( { name: '', value: ''} );
	}
};

octopus.init();

