# Restaurant service (cleient side)

Open the terminal and follow the commands below

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

# Run with docker
```
docker build -t delivery-client
``` 
```
docker run -it -p 8080:8080 --rm --name client delivery-client
```

# Run with docker-compose
1. Download the server-side code from [Restaurant service(server side)](https://github.com/yugako/global_backend.git)
2. Go to the root folder on the server side
 
3. Run: 
    ```    
    docker build -t delivery-client
    ```
4. Return to the root folder on the client side
5. Run: 
    ``` 
    docker build -t delivery-client
    ```
6. Run: 
    ```
    docker-compose up
    ```