1. config dir   => save mongodb online key;
2. models dir   => for now just one todo Item , Schema & what has Item => name & date;
3. routes dir   => has api path where items rendered;
4. server file  => entry point for app & server;


CLIENT dir => React app, cd client & install yarn or npm packages;
  for create new react app inside [client] => create-react-app . ; WITH DOT!!!!
  1. Add in to client package.json file: "proxy": "http://localhost:5000"  =>
    and if we use axios then can write next: axios.get('api/items') NOT axios.get('http://localhost:5000/api/items') 

If we wont run beck & front in the same time => in the root(not client) package.json use concurrently;