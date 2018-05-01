# TicketApi.AllTicketsApi

All URIs are relative to *https://virtserver.swaggerhub.com/example-boa/ticket/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAllTickets**](AllTicketsApi.md#deleteAllTickets) | **DELETE** /tickets | Delete all tickets
[**retrieveAllTickets**](AllTicketsApi.md#retrieveAllTickets) | **GET** /tickets | List all tickets


<a name="deleteAllTickets"></a>
# **deleteAllTickets**
> deleteAllTickets()

Delete all tickets

To be able to delete all tickets. 

### Example
```javascript
import TicketApi from 'ticket_api';

let apiInstance = new TicketApi.AllTicketsApi();

apiInstance.deleteAllTickets((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="retrieveAllTickets"></a>
# **retrieveAllTickets**
> Object retrieveAllTickets()

List all tickets

To be able to retrieve all tickets. 

### Example
```javascript
import TicketApi from 'ticket_api';

let apiInstance = new TicketApi.AllTicketsApi();

apiInstance.retrieveAllTickets((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

