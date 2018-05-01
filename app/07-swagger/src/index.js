import 'angular/angular-csp.css';
import './style.css';
import 'angular';

import { OneTicketApi, AllTicketsApi, ApiClient } from '../javascript-client-generated/src/index';

const app = angular.module('myApp', []);

const url = '../../../ws/tickets';
ApiClient.instance.basePath = '../../../ws';

const oneTicketApi = new OneTicketApi();
const allTicketApi = new AllTicketsApi();

function MyController($scope, $http) {

    this.query = function () {
        console.log('appel query en cours...');
        // return $http.get(url)
        //     .then(response => this.tickets = response.data.content)
        //     .catch(e => console.log('error', e));
        return allTicketApi.retrieveAllTickets()
            .then(response => {
                console.log('response', response);
                this.tickets = response.content;
                $scope.$apply();
            })
            .catch(e => console.log('error', e));


    };

    this.create = function () {
        console.log('appel create en cours...', OneTicketApi);
        return oneTicketApi.createTicket({
            ticket: this.newTicket
        }).then(() => {
            this.query();
        }).catch((error) => {
            console.error('error', error);
        });
    };

    this.empty = function () {
        console.log('appel delete all en cours...');
        return $http.delete(url).then(() => {
            this.query();
        }).catch((error) => {
            console.error('error', error);
        });
    };

    this.retrieve = function (id) {
        console.log('appel retrieve en cours...', id);
        return $http.get(`${url}/${id}`).then((response) => {
            console.log('ticket', response.data.content);
            this.retrievedTicket = response.data.content;
        }).catch((error) => {
            console.error('error', error);
        });
    };

    this.update = function (ticket) {
        console.log('appel update en cours...');
        return $http.put(`${url}/${ticket._id}`, {
            _id: ticket._id,
            name: ticket.newName
        }).then((response) => {
            console.log('ticket', response.data.content);
            this.ticket = response.data.content;
            this.query();
        }).catch((error) => {
            console.error('error', error);
        });
    }

    this.delete = function (ticket) {
        console.log('appel delete en cours...');
        return $http.delete(`${url}/${ticket._id}`).then((response) => {
            console.log('ticket', response.data.content);
            this.ticket = response.data.content;
            this.query();
        }).catch((error) => {
            console.error('error', error);
        });
    }

    this.query();
}


app.controller('MyController', ['$scope', '$http', MyController]);

app.directive('jlgClickAndDisable', function () {
    return {
        scope: {
            jlgClickAndDisable: '&'
        },
        controller: ['$scope', '$element', function ($scope, $element) {
            $element.bind('click', function () {
                console.log('disable the button');
                $element.prop('disabled', true);
                $scope.jlgClickAndDisable().finally(function () {
                    $element.prop('disabled', false);
                })
            });
        }]
    };
});
