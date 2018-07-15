MESSAGE PRODUCER
=================

* DESCRIPTION: It is a way to connect with a module wihtout knowing the module anything about the father. 

* PARTS:
    - events-subscriber: 
        Interface to implement _subscribeToEvents_ in the father. It should subscribe to the events that happens in their modules. For this example, it should subscribe to the services of the pages one, two, three and four.
    - message-producer:
        It is in charge to send messages to the father.