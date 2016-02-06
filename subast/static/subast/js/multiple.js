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

	this.name = ko.observable( data.name );
	this.quantity = ko.observable( data.quantity );
	this.technicalDetails = ko.observableArray( [] );

	this.addTechnicalSpecification = function(){
		self.technicalDetails.push( new TechnicalSpecification( {name: "", value: ""} ) );
	};
};

var ViewModel = function(){
	var self = this;

	this.requirements = ko.observableArray( [] );
	this.comercialSpecifications = ko.observableArray( [] );

	this.addRequirement = function(){
		self.requirements.push( new Requirement( {name: "", quantity: "" } ) );
	};

	this.addComercialSpecification = function(){
		self.comercialSpecifications.push( new ComercialSpecification( {name: "", value: "" } ) );
	};

	this.addRequirement();

};

ko.applyBindings( new ViewModel() );