

what this package might look like:

```

edx-platform/
  < instance data api >



src/


   util/


   // could be run on the server side
   core/
      api.js  // consume data from instance data api


   // will be run on the client side
   ui/
      learner/
         index.js  // pulling from core/api.js
      instructor/


```


what a multi-choice might look like:

```



edx-platform/
  < instance data api >



src/


   util/


   // could be run on the server side
   core/
      api.js  // consume data from instance data api
      events.js  

      /*

      function receivedSubmission(e) {
      	if (e.answer == nexblock.correctAnswer) { ... }
      }

      */
   


   // will be run on the client side
   ui/
      learner/
         index.js 
         // pulling from core/api.js
         // * writes an event to the core upon submission
         // * (or, maybe also on changing what answer you have selected)

      instructor/

```

