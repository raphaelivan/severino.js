# Severino
Severino is a very simple away to play with events.

*"Cara, crachá. Cara, crachá."* by Severino.

# Brower
** Doesn't need a browser it runs on any environment.**

## Assign Event
emitter.on(event, callback, once);
```sh
  var emitter = Severino.wake();

  emitter.on("Post.create", function() {
    # do something
  });
  
  emitter.on("App.init", function() {
    # do something only once
  }
  , true);
```

emitter.once(event, callback);
```sh
  emitter.once("App.init", function() {
    # do something only once
  })
```

## Remove Event
emitter.off(event, callback);
```sh
  emitter.off("App.init", function() {
    # do something
  });
  or 
  emitter.off("App.init"); 
```

## List Events
emitter.events(<event>);
```sh
  severino.events("Post.create") # => return the function
  or 
  severino.events() # => return the events list
```

## Emit Event
emitter.emit(event, parameters);
```sh
  severino.emit("Post.create", 
    {
        name: "Jhon Doe"
      , age: 33
    }
  );  
  or
  severino.emit("Post.create");
```
The method emit return the object emitter.So we can chain methods.
```sh
  severino
    .emit("Post.delete")
    .emit("PostController.list")
  ;
```

## License
Severino is available under the MIT license.