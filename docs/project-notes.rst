jsconfig.json
=============

- include the following below so the import paths will update when theyre moved


```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es2016",
        "jsx": "preserve"
    },
    "exclude": [
        "node_modules",
        "**/node_modules/*"
    ]
}
```