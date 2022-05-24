const config = {
  kit: {
    vite: {
      build: {
        rollupOptions: {
          external: [/\.test\.js$/],
        },
      },
    },
  },
}