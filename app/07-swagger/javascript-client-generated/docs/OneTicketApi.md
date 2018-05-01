# TicketApi.OneTicketApi

All URIs are relative to *https://virtserver.swaggerhub.com/example-boa/ticket/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTicket**](OneTicketApi.md#createTicket) | **POST** /tickets | Create an new ticket
[**deleteTicket**](OneTicketApi.md#deleteTicket) | **DELETE** /tickets/{id} | Delete an existing ticket.
[**retrieveTicket**](OneTicketApi.md#retrieveTicket) | **GET** /tickets/{id} | Retrieve a single ticket
[**updateTicket**](OneTicketApi.md#updateTicket) | **PUT** /tickets/{id} | Update an new ticket


<a name="createTicket"></a>
# **createTicket**
> Object createTicket(opts)

Create an new ticket

Create an new ticket on multinline... 

### Example
```javascript
import TicketApi from 'ticket_api';

let apiInstance = new TicketApi.OneTicketApi();

let opts = { 
  'ticket': new TicketApi.Ticket() // Ticket | a ticket
};
apiInstance.createTicket(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket** | [**Ticket**](Ticket.md)| a ticket | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="deleteTicket"></a>
# **deleteTicket**
> Object deleteTicket(id)

Delete an existing ticket.

Delete an existing ticket.

### Example
```javascript
import TicketApi from 'ticket_api';

let apiInstance = new TicketApi.OneTicketApi();

let id = "id_example"; // String | ticket id

apiInstance.deleteTicket(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ticket id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="retrieveTicket"></a>
# **retrieveTicket**
> Object retrieveTicket(id)

Retrieve a single ticket

Retrieve a ticket

### Example
```javascript
import TicketApi from 'ticket_api';

let apiInstance = new TicketApi.OneTicketApi();

let id = "id_example"; // String | ticket id

apiInstance.retrieveTicket(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ticket id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="updateTicket"></a>
# **updateTicket**
> Object updateTicket(id, opts)

Update an new ticket

Update a ticket

### Example
```javascript
import TicketApi from 'ticket_api';

let apiInstance = new TicketApi.OneTicketApi();

let id = "id_example"; // String | ticket id

let opts = { 
  'ticket': new TicketApi.Ticket() // Ticket | a ticket
};
apiInstance.updateTicket(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ticket id | 
 **ticket** | [**Ticket**](Ticket.md)| a ticket | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

