# ANALYTICS API List

## Queries

No Queries supported yet.

## Subscriptions

No Subscriptions supported yet.

## Mutations

### createEvent

#### Arguments

- **city**, optional, Client's city
- **clientTimestamp**, **required**, Specifies the timestamp when client makes the request
- **country**, optional, Client's country
- **deviceId**, **required**, Client's deviceID
- **eventContent**, optional, Specifies the content of this event.We will define it in detail in future
- **eventType**, **required**, Specifies the type of this event. Examples:interaction, activity
- **ip**, optional, Client's IP address
- **language**, optional, The language client uses
- **latitude**, optional, Client's latitude
- **longitude**, optional, Client's longitude
- **objectId**, **required**, Specifies the object ID of this activity
- **objectType**, **required**, Specifies the type of the object
- **operation**, **required**, Specifies the operation of this event
- **postalCode**, optional, Client's postal code
- **responseTime**, optional, Specifies the time it took for server to respond. The value is in milliseconds
- **serverTimestamp**, optional, Specifies the timestamp when server receives the request
- **source**, **required**, Specifies which application/service this event belongs to.Example:Playground, OCAP
- **targetId**, optional, Specifies the target ID of this activity
- **targetType**, optional, Specifies the type of the target
- **userAgent**, optional, The User Agent of the browser
- **userId**, **required**, Client's userID

#### Result Format

```graphql
mutation {
  createEvent(
    clientTimestamp: "abc"
    deviceId: "abc"
    eventType: "abc"
    objectId: "abc"
    objectType: "abc"
    operation: "abc"
    source: "abc"
    userId: "abc"
  )
}
```

### createEvents

#### Arguments

- **data**, **required**, A list of analytics events

#### Result Format

```graphql
mutation {
  createEvents(data: 123)
}
```
