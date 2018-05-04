const app = angular.module('myApp', []);

const url = '../../ws/graphql';

function MyController($http) {

	this.query = function () {
		console.log('appel query en cours...');

		const graphql = {
			query: '{ tickets { id name }}'
		};
		return $http.post(url, graphql).then(response => this.tickets = response.data.data.tickets).catch(e => console.log('error', e));
	};

	this.create = function () {
		console.log('appel create en cours...');
		const graphql = {
			query: `mutation createTicket
{
	createTicket(name: "${this.newTicket.name}") {
		id
	}
}`
		};
		return $http.post(url, graphql).then(() => {
			this.query();
		}).catch((error) => {
			console.error('error', error);
		});
	};

	this.empty = function () {
		console.log('appel delete all en cours...');
		const graphql = {
			query: `mutation deleteAllTickets
{
	deleteAllTickets
}`
		};
		return $http.post(url, graphql).then(() => {
			this.query();
		}).catch((error) => {
			console.error('error', error);
		});
	};

	this.retrieve = function (id) {
		console.log('appel retrieve en cours...', id);
		const graphql = {
			query: `
query retrieveTicket {
	ticket(id: "${id}") {
		id
		name
	} 
}`
		};
		return $http.post(url, graphql).then((response) => {
			console.log('ticket', response.data);
			this.retrievedTicket = response.data.data.ticket;
		}).catch((error) => {
			console.error('error', error);
		});
	};

	this.update = function (ticket) {
		console.log('appel update en cours...');
		const graphql = {
			query: `
mutation updateTicket {
	updateTicket(id: "${ticket.id}", name: "${ticket.newName}") {
		id
		name
	} 
}`
		};
		return $http.post(url, graphql).then((response) => {
			console.log('ticket', response.data.content);
			this.ticket = response.data.data.ticket;
			this.query();
		}).catch((error) => {
			console.error('error', error);
		});
	}

	this.delete = function (ticket) {
		console.log('appel delete en cours...');
		const graphql = {
			query: `
mutation deleteTicket {
	deleteTicket(id: "${ticket.id}") {
		id
		name
	} 
}`
		};
		return $http.post(url, graphql).then((response) => {
			console.log('ticket', response.data.content);
			this.ticket = response.data.data.ticket;
			this.query();
		}).catch((error) => {
			console.error('error', error);
		});
	}

	this.query();
}


app.controller('MyController', MyController);

app.directive('jlgClickAndDisable', function () {
	return {
		scope: {
			jlgClickAndDisable: '&'
		},
		controller: function ($scope, $element) {
			$element.bind('click', function () {
				console.log('disable the button');
				$element.prop('disabled', true);
				$scope.jlgClickAndDisable().finally(function () {
					$element.prop('disabled', false);
				})
			});
		}
	};
});
