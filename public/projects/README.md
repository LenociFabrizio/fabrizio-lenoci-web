# Immagini dei progetti

Metti qui gli screenshot reali dei tuoi siti (consigliato 1600×1000, formato .webp/.avif).

Poi in `src/data/projects.ts` aggiungi il campo `image` alla card, es:

```ts
{
  slug: "lumen-finance",
  image: "/projects/lumen-finance.webp",
  // ...resto invariato
}
```

`next/image` ottimizzerà automaticamente formato, dimensioni e lazy-loading.
Finché `image` non è impostata, viene mostrato un gradiente placeholder elegante.
