// import Vue from 'vue'

// export default (_context, inject) => {
//   const handler = Vue.observable({
//     handleError(error: Error) {
//       alert(error.message)
//     },

//   })

//   inject('error', handler)
// }

export default defineNuxtPlugin(() => {
  return {
    provide: {
      handleError: (error: Error | unknown) => {
        console.log(process.env.NODE_ENV);
        if (process.env.NODE_ENV) {
          console.log(error);
        }
        return error instanceof Error ? alert(error.message) : alert(error);
      },
    },
  };
});
